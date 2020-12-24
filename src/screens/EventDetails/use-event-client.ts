import React from 'react';
import {EventGetResponse200EventFromJSON, IncidentGetResponse200IncidentFromJSON} from '@/backend/main';
import {useAuth, useRefs, useCompany} from '@/context';
import {TIMEZONE_OFFSET, useFetch} from '@/utils';
import {
  TEvent,
  TIncident,
  TImageTrackBoxes,
  TCommonDetectInfo,
  TExtraDetectInfo,
  TOccurrenceData,
  TOccurrenceType,
} from './types';

type State = {
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
  eventData?: TOccurrenceData;
  imageContent?: string;
  trackBoxes?: TImageTrackBoxes;
  error?: any;
};

const eventReducer = (state: State, changes: Partial<State>): State => ({...state, ...changes});
const initState: State = {
  status: 'idle',
  eventData: undefined,
  imageContent: '',
  trackBoxes: undefined,
  error: null,
};

export function useEventClient(id: string, occurrenceType: TOccurrenceType) {
  const fetchClient = useFetch();
  const {authHeader, companyId} = useAuth();
  const {getCheckById, getCheckCategoryById, getEventStatusById, getIncidentNameByCategoryId} = useRefs();
  const {getSensorById, getLocationById} = useCompany();
  const [{status, eventData, imageContent, trackBoxes, error}, dispatch] = React.useReducer(
    eventReducer,
    initState,
  );

  React.useEffect(() => {
    const fetchEvent = () => {
      dispatch({status: 'pending'});

      const url = `/api/va/companies/${companyId}/${occurrenceType}/${id}?tz_offset=${TIMEZONE_OFFSET}`;

      fetchClient(url, {headers: authHeader}).then(
        response => {
          const eventData =
            occurrenceType === 'events'
              ? EventGetResponse200EventFromJSON(response?.event)
              : IncidentGetResponse200IncidentFromJSON(response?.incident);
          const imageContent = `data:image/${eventData.thumbnail?.compression};base64, ${eventData.thumbnail?.content}`;
          //const trackBox = eventData.thumbnail?.trackBox;
          const trackBoxes = eventData.thumbnail?.trackBoxes;
          const timeStamp = occurrenceType === 'events' ? (eventData as TEvent).eventTimestamp : (eventData as TIncident).period.start.time;
          const id: string | number =
            occurrenceType === 'events' ? (eventData as TEvent).eventCode : (eventData as TIncident).id;
          const eventWithId: TOccurrenceData = {...eventData, id, date: timeStamp} as TOccurrenceData;

          dispatch({
            status: 'resolved',
            eventData: eventWithId,
            imageContent,
            trackBoxes,
          });
          return response;
        },
        error => {
          dispatch({status: 'rejected', error});
          return error;
        },
      );
    };

    fetchEvent();
  }, [authHeader, companyId, fetchClient, id, occurrenceType]);

  const boxRects = trackBoxes?.map(box => {
    return {
      top: box?.topY ?? 0,
      left: box?.topX ?? 0,
      width: (box?.bottomX ?? 0) - (box?.topX ?? 0),
      height: (box?.bottomY ?? 0) - (box?.topY ?? 0),
    };
  });

  const createCommonDetectInfo = React.useCallback((): TCommonDetectInfo | undefined => {
    if (eventData) {
      if (occurrenceType === 'events') {
        const checkData = getCheckById((eventData as TEvent)?.checkId);
        return {
          check: checkData?.name ?? '',
          checkCategory: checkData ? getCheckCategoryById(checkData?.categoryId)?.name : undefined,
          sensor: getSensorById(eventData?.sensorId)?.ref?.name ?? '',
          location: getLocationById(eventData.locationId)?.name ?? '',
          eventStatus: getEventStatusById(eventData.status?.currentId)?.name,
        };
      }

      const incidentData = eventData as TIncident;

      return {
        check: getIncidentNameByCategoryId(incidentData?.categoryId) ?? '',
        sensor: getSensorById(incidentData?.sensorId)?.ref?.name ?? '',
        location: getLocationById(incidentData.locationId)?.name ?? '',
        eventStatus: getEventStatusById(incidentData.status?.currentId)?.name,
        checkCategory: getCheckCategoryById(incidentData.categoryId)?.name,
      };
    }
    return undefined;
  }, [
    eventData,
    getCheckById,
    getCheckCategoryById,
    getEventStatusById,
    getIncidentNameByCategoryId,
    getLocationById,
    getSensorById,
    occurrenceType,
  ]);

  const createExtraInfo = React.useCallback((): TExtraDetectInfo[] | undefined => {
    if (eventData) {
      const extraInfo = eventData?.trackedObject.extra;
      const orderedExtra = extraInfo?.sort((a, b) => a.displayOrder - b.displayOrder);
      return orderedExtra;
    }
    return undefined;
  }, [eventData]);

  return {
    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isSuccess: status === 'resolved',
    isError: status === 'rejected',

    eventData,
    imageContent,
    trackBoxes,
    boxRects,
    commonDetectInfo: createCommonDetectInfo(),
    extraDetectInfo: createExtraInfo(),

    error,
  };
}
