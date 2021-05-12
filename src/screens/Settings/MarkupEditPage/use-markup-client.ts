import React from 'react';
import {useFetch} from '@/utils';
import {useAuth} from '@/context';
import {useSettings} from '../SettingsContext';
import {TPolygons, TPolygon, TPipelineSensorCheck} from '../types';

const combinePolygons = (pipelineSensorCheck: TPipelineSensorCheck[]) => {
  return pipelineSensorCheck.map(p => p.markup?.polygons);
};

const createCoordinate = ({
  x,
  y,
  width = 960,
  height = 455,
}: {
  x: number;
  y: number;
  width?: number;
  height?: number;
}) => {
  const xCoord = x * width;
  const yCoord = y * height;
  return {x: xCoord, y: yCoord};
};

//TODO:
/**
 *
 * add state reducer
 * change statuses (saved, updated, etc.)
 *
 *
 */
type TChangesTypes =
  | 'FETCHING_POLYGONS'
  | 'FETCHED_POLYGONS'
  | 'IS_ERROR'
  | 'CLEAR_POLYGONS'
  | 'SAVING_POLYGONS'
  | 'SAVED_POLYGONS'
  | 'NEW_LINE'
  | 'NEW_SQUARE';

type TChanges = {
  type: TChangesTypes;
  payload?: any;
};

type TPolygonPoint = {
  x: number;
  y: number;
  sequence: number;
};

type TPolygonsState = {
  status: 'idle' | 'pending' | 'fetched' | 'saved' | 'editing' | 'rejected';
  linesPolygons: [T1: TPolygonPoint, T2: TPolygonPoint][] | undefined;
  squaresPolygons: [T1: TPolygonPoint, T2: TPolygonPoint, T3: TPolygonPoint, T4: TPolygonPoint][] | undefined;
};

const initPolygonsState: TPolygonsState = {
  status: 'idle',
  linesPolygons: undefined,
  squaresPolygons: undefined,
};

const polygonsReducer = (state: TPolygonsState, changes: TChanges): TPolygonsState => {
  console.log('changes', changes);
  switch (changes.type) {
    case 'FETCHING_POLYGONS': {
      return {
        ...state,
        status: 'pending',
      };
    }

    case 'FETCHED_POLYGONS': {
      return {
        ...state,
        status: 'fetched',
        linesPolygons: changes.payload.linesPolygons,
        squaresPolygons: changes.payload.squaresPolygons,
      };
    }

    case 'NEW_LINE': {
      const updateLines = state.linesPolygons
        ? [...state.linesPolygons, changes.payload.line]
        : changes.payload.line;
      return {
        ...state,
        status: 'editing',
        linesPolygons: updateLines,
      };
    }

    case 'NEW_SQUARE': {
      const updateSquares = state.squaresPolygons
        ? [...state.squaresPolygons, changes.payload.square]
        : changes.payload.square;
      return {
        ...state,
        status: 'editing',
        squaresPolygons: updateSquares,
      };
    }

    case 'SAVING_POLYGONS': {
      return {
        ...state,
        status: 'pending',
      };
    }

    case 'SAVED_POLYGONS': {
      return {
        ...state,
        status: 'saved',
      };
    }

    case 'CLEAR_POLYGONS': {
      return {
        ...state,
        status: 'editing',
        linesPolygons: [],
        squaresPolygons: [],
      };
    }

    default:
      return state;
  }
};

export function useMarkupClient(canvasRef: React.RefObject<HTMLCanvasElement>) {
  // const [status, setStatus] = React.useState('idle');
  const canvas = canvasRef?.current;

  const imgWidth = canvas?.getBoundingClientRect().width;
  const imgHeight = canvas?.getBoundingClientRect().height;

  const [shape, setShape] = React.useState<'line' | 'square'>('line');
  const [isDrawing, setIsDrawing] = React.useState(false);
  const [{status, linesPolygons, squaresPolygons}, dispatch] = React.useReducer(
    polygonsReducer,
    initPolygonsState,
  );
  const {companyId, authHeader} = useAuth();
  const {currentTemplateId, currentSensorsIds, currentChecksIds} = useSettings();
  const fetchClient = useFetch();

  const readPolygons = React.useCallback(() => {
    if (currentSensorsIds && currentChecksIds) {
      dispatch({type: 'FETCHING_POLYGONS'});
      const readers = currentChecksIds
        .map(checkId => {
          return currentSensorsIds.map(sensorId => {
            return `/api/va/companies/${companyId}/pipelines/${currentTemplateId}/sensors/${sensorId}/checks/${checkId}`;
          });
        })
        .flat()
        .map(url => {
          return fetchClient(url, {
            headers: authHeader,
          });
        });

      Promise.all(readers).then(
        response => {
          let lines: TPolygons = [];
          let squares: TPolygons = [];
          const polygons = (response as TPipelineSensorCheck[]).map(p => p.markup?.polygons);
          polygons.forEach(p => {
            p?.forEach(polygon => {
              const coordinates = (polygon as TPolygon).map(p => {
                const point = createCoordinate({x: p.x, y: p.y, width: imgWidth, height: imgHeight});
                return {
                  x: point.x,
                  y: point.y,
                  sequence: p.sequence,
                };
              });
              if (polygon.length === 2) {
                lines.push(coordinates);
              } else if (polygon.length === 4) {
                squares.push(coordinates);
              }
            });
          });

          //console.log(polygons);

          dispatch({
            type: 'FETCHED_POLYGONS',
            payload: {linesPolygons: lines, squaresPolygons: squares},
          });
          return response;
        },
        error => {
          dispatch({type: 'IS_ERROR'});
          //console.log(error);
        },
      );
    }
  }, [
    authHeader,
    companyId,
    currentChecksIds,
    currentSensorsIds,
    currentTemplateId,
    fetchClient,
    imgHeight,
    imgWidth,
  ]);

  const createNewLine = React.useCallback((line: TPolygon) => {
    dispatch({type: 'NEW_LINE', payload: {line}});
  }, []);

  const createNewSquare = React.useCallback((square: TPolygon) => {
    dispatch({type: 'NEW_SQUARE', payload: {square}});
  }, []);

  const createLinesPolygons = React.useCallback(() => {
    if (canvas && linesPolygons) {
      const imageRect = canvas.getBoundingClientRect();
      return linesPolygons.map((line, i) => {
        const start = line[0];
        const end = line[1];
        const firstPoint = {x: start.x / imageRect.width, y: start.y / imageRect.height, sequence: 0};
        const secondPoint = {x: end.x / imageRect.width, y: end.y / imageRect.height, sequence: 1};
        return [firstPoint, secondPoint];
      });
    }
  }, [canvas, linesPolygons]);

  const createSquarePolygons = React.useCallback(() => {
    if (squaresPolygons && canvas) {

      const imageRect = canvas.getBoundingClientRect();
      console.log(squaresPolygons)
      return squaresPolygons.map((square, i) => {
        console.log(square)
        const start = square.;
        const end = square[2];
        const firstPoint = {x: start.x / imageRect.width, y: start.y / imageRect.height, sequence: 0};
        const thirdPoint = {x: end.x / imageRect.width, y: end.y / imageRect.height, sequence: 2};
        const secondPoint = {x: thirdPoint.x, y: firstPoint.y, sequence: 1};
        const fourthPoint = {x: firstPoint.x, y: thirdPoint.y, sequence: 3};
        return [firstPoint, secondPoint, thirdPoint, fourthPoint];
      });
    }
  }, [canvas, squaresPolygons]);

  const savePolygons = React.useCallback(
    (polygons: TPolygons) => {
      //if (status !== 'editing') return;

      console.log('polygons', polygons);

      if (currentSensorsIds && currentChecksIds) {
        dispatch({type: 'SAVING_POLYGONS'});

        const updaters = currentChecksIds
          .map(checkId => {
            return currentSensorsIds.map(sensorId => {
              return `/api/va/companies/${companyId}/pipelines/${currentTemplateId}/sensors/${sensorId}/checks/${checkId}`;
            });
          })
          .flat()
          .map(url => {
            return fetchClient(url, {
              method: 'PATCH',
              headers: authHeader,
              body: {
                enabled: true,
                extra: {},
                markup: {
                  polygons,
                },
              },
            });
          });

        Promise.all(updaters).then(
          () => {
            dispatch({type: 'SAVED_POLYGONS'});
            console.log('read after saved');
            //setStatus('resolved');
          },
          () => {
            dispatch({type: 'IS_ERROR'});
            //setStatus('rejected');
          },
        );
      }
    },
    [authHeader, companyId, currentChecksIds, currentSensorsIds, currentTemplateId, fetchClient, status],
  );

  return {
    setShape,
    shape,
    isDrawing,
    setIsDrawing,
    readPolygons,
    linesPolygons,
    squaresPolygons,
    status,
    createNewLine,
    createNewSquare,
    createLinesPolygons,
    createSquarePolygons,
    savePolygons,
  };
}
