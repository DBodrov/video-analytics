import React from 'react';
import {H6, Span, Button} from 'neutrino-ui';
import {Section, SectionBlock, SectionHeader} from '../styles';
import {useMarkupClient} from './use-markup-client';
import {MarkupToolbar} from './MarkupToolbar';
import {IncidentsSettings} from './IncidentsSettings';
import {MarkupSection, Tooltip} from './styles';

type TCoordinate = {
  x: number;
  y: number;
};

export function MarkupEditPage() {
  const point = React.useRef<TCoordinate | null>(null);
  const [startPositions, setStartPositions] = React.useState<TCoordinate[] | undefined>(undefined);
  const [startPositionsSquare, setStartPositionsSquare] = React.useState<TCoordinate[] | undefined>(
    undefined,
  );
  const [endPositions, setEndPositions] = React.useState<TCoordinate[] | undefined>(undefined);
  const [endPositionsSquare, setEndPositionsSquare] = React.useState<TCoordinate[] | undefined>(undefined);

  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const context = canvasRef.current?.getContext('2d');

  const {
    setShape,
    shape,
    isDrawing,
    setIsDrawing,
    readPolygons,
    savePolygons,
    status,
    linesPolygons,
    squaresPolygons,
    createNewLine,
    createNewSquare,
    createLinesPolygons,
    createSquarePolygons
  } = useMarkupClient(canvasRef);

  const clearAll = () => {
    savePolygons([]);
    //clearCanvas();
  };

  const getCoordinates = (event: React.PointerEvent<HTMLCanvasElement>): TCoordinate => {
    const {pageX, pageY} = event;
    const canvas = canvasRef?.current;
    if (canvas) {
      const canvasRect = canvas.getBoundingClientRect();
      const x = pageX - canvasRect.left;
      const y = pageY - canvasRect.top;

      return {
        x,
        y,
      };
    }
    return {
      x: 0,
      y: 0,
    };
  };

  const clearCanvas = React.useCallback(() => {
    if (context && canvasRef !== null) {
      context.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
    }
  }, [context]);

  // const renderMarkers = () => {
  //   if (endPositions) {
  //     return endPositions.map((end, i) => {
  //       const start = startPositions![i];
  //       return (
  //         <>
  //           <Marker x={start.x} y={start.y} />
  //           <Marker x={end.x} y={end.y} />
  //         </>
  //       );
  //     });
  //   }
  // };

  const drawSavedLines = React.useCallback(() => {
    if (context && linesPolygons) {
      linesPolygons.forEach(polygon => {
        context.beginPath();
        context.lineWidth = 2;
        context.strokeStyle = '#57D841';
        context.fillStyle = '#57D841';
        const start = polygon[0];
        const end = polygon[1];
        context.moveTo(start.x, start.y);
        context.lineTo(end.x, end.y);
        context.stroke();
        context.closePath();

        context.beginPath();
        context.arc(start.x, start.y, 5, 0, 2 * Math.PI, false);
        context.arc(end.x, end.y, 5, 0, 2 * Math.PI, false);
        context.fill();
        context.closePath();
      });
    }
  }, [context, linesPolygons]);

  const drawSavedSquares = React.useCallback(() => {
    if (context && squaresPolygons) {
      squaresPolygons.forEach(polygon => {
        const start = polygon.find(p => p.sequence === 0);
        const end = polygon.find(p => p.sequence === 2);
        const width = end!.x - start!.x;
        const height = end!.y - start!.y;
        context.lineWidth = 2;
        context.strokeStyle = '#57D841';
        context.strokeRect(start!.x, start!.y, width, height);
      });
    }
  }, [context, squaresPolygons]);

  const drawLine = React.useCallback(
    (startPosition, endPosition) => {
      if (context) {
        context.beginPath();
        context.lineWidth = 2;
        context.strokeStyle = '#57D841';
        context.fillStyle = '#57D841';
        context.moveTo(startPosition.x, startPosition.y);
        context.lineTo(endPosition.x, endPosition.y);
        context.stroke();
        context.closePath();

        context.beginPath();
        context.arc(startPosition.x, startPosition.y, 5, 0, 2 * Math.PI, false);
        context.arc(endPosition.x, endPosition.y, 5, 0, 2 * Math.PI, false);
        context.fill();
        context.closePath();

        drawSavedLines();
        drawSavedSquares();
      }
    },
    [context, drawSavedLines, drawSavedSquares],
  );

  const drawSquare = React.useCallback(
    (startPosition, endPosition) => {
      // console.log(startPosition, endPosition);
      const height = endPosition.y - startPosition.y;
      const width = endPosition.x - startPosition.x;
      if (context) {
        context.lineWidth = 2;
        context.strokeStyle = '#57D841';
        context.strokeRect(startPosition.x, startPosition.y, width, height);

        drawSavedLines();
        drawSavedSquares();
      }
    },
    [context, drawSavedLines, drawSavedSquares],
  );

  const handleMouseDown = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const {x, y} = getCoordinates(event);
    point.current = {x, y};
    setIsDrawing(true);
    // if (shape === 'square') {
    //   const updateStartPositionSquare = startPositionsSquare ? [...startPositionsSquare, {x, y}] : [{x, y}];
    //   setStartPositionsSquare(updateStartPositionSquare);
    // } else if (shape === 'line') {
    //   console.log(point);
    //   // point.current.y = y;

    //   // const updateStartPosition = startPositions ? [...startPositions, {x, y}] : [{x, y}];
    //   // setStartPositions(updateStartPosition);
    // }
  };

  const handleMouseMove = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const newMousePosition = getCoordinates(event);
    clearCanvas();
    if (shape === 'line') {
      if (point.current && newMousePosition) {
        drawLine(point.current, newMousePosition);
      }
    } else {
      if (point.current && newMousePosition) {
        drawSquare(point.current, newMousePosition);
      }
    }
  };

  const handleMouseUp = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    setIsDrawing(false);
    const {x, y} = getCoordinates(event);
    if (shape === 'line') {
      const line = [
        {x: point.current!.x, y: point.current!.y, sequence: 0},
        {x, y, sequence: 1},
      ];
      createNewLine(line);
    } else if (shape === 'square') {
      const square = [
        {x: point.current!.x, y: point.current!.y, sequence: 0},
        {x, y, sequence: 2},
        {x, y: point.current!.y, sequence: 1},
        {x: point.current!.x, y, sequence: 3},
      ];
      createNewSquare(square);
    }
    point.current = null;
  };

  const createLinesCoordinate = ({x, y}: {x: number; y: number}) => {
    const imageRect = canvasRef!.current!.getBoundingClientRect();
    const xCoord = x * imageRect.width;
    const yCoord = y * imageRect.height;
    return {x: xCoord, y: yCoord};
  };

  const submitPolygons = () => {
    const lines = createLinesPolygons() ?? [];
    const squares = createSquarePolygons() ?? [];

    const polygons = [...lines, ...squares];
    savePolygons(polygons);
    // const squarePolygons = createSquarePolygons() ?? [];
    // const linesPolygons = createLinesPolygons() ?? [];
    // const polygons = [...squarePolygons, ...linesPolygons];

    // if (polygons.length > 0) {
    //   //savePolygons(polygons);
    // }
  };

  const handleMouseLeave = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (isDrawing) {
      handleMouseUp(event);
    } else {
      return;
    }
  };

  React.useEffect(() => {
    readPolygons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (status === 'fetched') {
      drawSavedLines();
      drawSavedSquares();
    }
  }, [drawSavedLines, drawSavedSquares, status]);

  return (
    <Section css={{margin: '0 auto', flexFlow: 'column nowrap', alignItems: 'center'}}>
      <SectionBlock css={{width: '960px', margin: '0 auto'}}>
        <SectionHeader
          css={{
            flexFlow: 'row nowrap',
            borderRadius: '4px 4px 0px 0px',
            border: '1px var(--color-border) solid',
          }}
        >
          <div css={{display: 'flex', flexFlow: 'column nowrap'}}>
            <H6 css={{fontSize: 18, fontWeight: 400}}>Редактор разметки</H6>
            <Span css={{fontSize: 12, color: 'var(--color-text-secondary)', paddingTop: 5}}>
              Выберите и установите нужные зоны
            </Span>
          </div>
          <div css={{display: 'flex', flexFlow: 'row nowrap', marginLeft: 'auto'}}>
            <Button
              flat
              variant="primary"
              css={{
                height: '2.5rem',
                minHeight: '2.5rem',
                marginRight: 10,
                backgroundColor: '#39B54A',
                borderColor: '#39B54A',
                '&:hover': {backgroundColor: '#39B54A', borderColor: '#39B54A'},
              }}
              onClick={submitPolygons}
              disabled={status === 'saved'}
            >
              <Span css={{fontSize: '0.875rem'}}>Сохранить</Span>
            </Button>
          </div>
        </SectionHeader>
        <MarkupToolbar onClearAll={clearAll} onSetShape={setShape} shape={shape} />
        <MarkupSection css={{position: 'relative'}}>
          <canvas
            id="markup"
            width="960px"
            height="455px"
            ref={canvasRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          ></canvas>
          {/* {endPositions?.map((ep, i) => {
            return <Marker key={`lineEnd_${i}`} x={ep.x} y={ep.y} />;
          })}
          {} */}
        </MarkupSection>
        <Tooltip>
          <Span css={{fontSize: 14}}>
            <strong>Совет:</strong> Нажмите “Сохранить” для завершения редактирования зон и других элементов
            разметки.
          </Span>
        </Tooltip>
      </SectionBlock>
      <SectionBlock>
        <IncidentsSettings />
      </SectionBlock>
    </Section>
  );
}

// type TMarkerProps = {
//   x: number;
//   y: number;
// };

// function Marker({x, y}: TMarkerProps) {
//   return (
//     <div
//       css={{
//         width: 10,
//         height: 10,
//         border: '1px var(--color-box) solid',
//         position: 'absolute',
//         top: y - 5,
//         left: x - 5,
//       }}
//     ></div>
//   );
// }
