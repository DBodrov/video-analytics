import React from 'react';
import {H6, Span, Button} from 'neutrino-ui';
import {Section, SectionBlock, SectionHeader} from '../styles';
import {MarkupToolbar} from './MarkupToolbar';
import {MarkupSection} from './styles';

type TCoordinate = {
  x: number;
  y: number;
};

export function MarkupEditPage() {
  // const [lineState, dispatch] = React.useReducer(shapeStateReducer, initShapeState)
  const [shape, setShape] = React.useState<'line' | 'square'>('line');
  const [mousePosition, setMousePosition] = React.useState<TCoordinate | undefined>(undefined);
  const [startPositions, setStartPositions] = React.useState<TCoordinate[] | undefined>(undefined);
  const [startPositionsSquare, setStartPositionsSquare] = React.useState<TCoordinate[] | undefined>(
    undefined,
  );
  const [endPositions, setEndPositions] = React.useState<TCoordinate[] | undefined>(undefined);
  const [endPositionsSquare, setEndPositionsSquare] = React.useState<TCoordinate[] | undefined>(undefined);
  const [isDrawing, setIsDrawing] = React.useState(false);
  //const [lineState, setLine] = React.useState([]);
  //const [lineCoordinates, setLineCoord] = React.useState({x: undefined, y: undefined});
  // const [shapeState, setState] = React.useState({
  //   shape: '',
  //   line: undefined,
  //   square: undefined,
  // });
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const context = canvasRef.current?.getContext('2d');

  // const setShape = React.useCallback((shape: string) => {
  //   // setState(s => ({...s, shape}));
  // }, []);

  const clearAll = () => {
    //setLine([]);
    setStartPositions(undefined);
    setStartPositionsSquare(undefined);
    setEndPositions(undefined);
    setEndPositionsSquare(undefined);
    setMousePosition(undefined);
    clearCanvas();
  };

  const getCoordinates = (event: React.PointerEvent<HTMLCanvasElement>): TCoordinate => {
    const {pageX, pageY} = event;
    //console.log(pageX, pageY, canvasRef.current?.offsetLeft);
    const canvas = canvasRef?.current;
    //console.log({canvas});
    if (canvas) {
      const x = pageX - canvas.offsetLeft;
      const y = pageY - canvas.offsetTop;
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

  const drawLine = React.useCallback(
    (startPosition, endPosition) => {
      if (context) {
        context.beginPath();
        context.lineWidth = 2; // width of the line
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

        endPositions?.forEach((end, i) => {
          context.beginPath();
          const start = startPositions![i];
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
    },
    [context, endPositions, startPositions],
  );

  const drawSquare = React.useCallback(
    (startPosition, endPosition) => {
      const height = endPosition.y - startPosition.y;
      const width = endPosition.x - startPosition.x;

      if (context) {
        //console.log(height, width);
        // context.beginPath();
        context.lineWidth = 2; // width of the line
        context.strokeStyle = '#57D841';
        context.strokeRect(startPosition.x, startPosition.y, width, height);
        //context.closePath();
      }
    },
    [context],
  );

  const handleMouseDown = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const {x, y} = getCoordinates(event);
    if (shape === 'square') {
      const updateStartPositionSquare = startPositionsSquare ? [...startPositionsSquare, {x, y}] : [{x, y}];
      setStartPositionsSquare(updateStartPositionSquare);
    } else {
      const updateStartPosition = startPositions ? [...startPositions, {x, y}] : [{x, y}];
      setStartPositions(updateStartPosition);
    }
    setIsDrawing(true);
  };

  const handleMouseMove = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const newMousePosition = getCoordinates(event);
    clearCanvas();
    if (shape === 'line') {
      if (startPositions && newMousePosition) {
        drawLine(startPositions[startPositions.length - 1], newMousePosition);
      }
    } else {
      if (startPositionsSquare && newMousePosition) {
        drawSquare(startPositionsSquare[startPositionsSquare.length - 1], newMousePosition);
     }
    }
    // setMousePosition(newMousePosition);
  };

  const handleMouseUp = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    setIsDrawing(false);
    const {x, y} = getCoordinates(event);
    const updateEndPosition = endPositions ? [...endPositions, {x, y}] : [{x, y}];
    setEndPositions(updateEndPosition);
  };

  const handleMouseLeave = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (isDrawing) {
      handleMouseUp(event);
    } else {
      return;
    }
  };

  return (
    <Section css={{margin: '0 auto'}}>
      <SectionBlock css={{width: '960px', margin: '0 auto'}}>
        <SectionHeader css={{flexFlow: 'row nowrap'}}>
          <div css={{display: 'flex', flexFlow: 'column nowrap'}}>
            <H6 css={{fontSize: 18, fontWeight: 400}}>Редактор разметки</H6>
            <Span css={{fontSize: 12, color: 'var(--color-text-secondary)', paddingTop: 5}}>
              Выберите и установите нужны зоны
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
            >
              <Span css={{fontSize: '0.875rem'}}>Сохранить</Span>
            </Button>
          </div>
        </SectionHeader>
        <MarkupToolbar onClearAll={clearAll} onSetShape={setShape} shape={shape} />
        <MarkupSection>
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
        </MarkupSection>
      </SectionBlock>
    </Section>
  );
}
