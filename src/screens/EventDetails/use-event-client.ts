import React from 'react';
import {EventGetResponse200EventFromJSON} from '@/backend/main';
import {useAuth, useRefs, useCompany} from '@/context';
import {TIMEZONE_OFFSET, useFetch} from '@/utils';
import {TEvent, TImageTrackBox} from './types';

type State = {
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
  eventData?: TEvent | undefined;
  imageContent?: string;
  trackBox?: TImageTrackBox;
  error?: any;
};

const eventReducer = (state: State, changes: State): State => ({...state, ...changes});
const initState: State = {
  status: 'idle',
  eventData: undefined,
  imageContent: '',
  trackBox: undefined,
  error: null,
};

export function useEventClient() {
  const fetchClient = useFetch();
  const {accessToken, companyId} = useAuth();
  const {getCheckById, getCheckCategoryById, getEventStatusById} = useRefs();
  const {getSensorById, getLocationById} = useCompany();
  const [{status, eventData, imageContent, trackBox, error}, dispatch] = React.useReducer(
    eventReducer,
    initState,
  );
  const fetchEvent = React.useCallback(
    (id: string) => {
      dispatch({status: 'pending'});
      const headers = {Authorization: `Bearer ${accessToken}`};
      fetchClient(`/api/va/companies/${companyId}/events/${id}?tz_offset=${TIMEZONE_OFFSET}`, {headers}).then(
        response => {
          const eventData = EventGetResponse200EventFromJSON(response?.event);
          const imageContent = `data:image/${eventData.thumbnail?.compression};base64, ${eventData.thumbnail?.content}`;
          const trackBox = eventData.thumbnail?.trackBox;
          dispatch({status: 'resolved', eventData, imageContent, trackBox});
          return response;
        },
        error => {
          dispatch({status: 'rejected', error});
          return error;
        },
      );
    },
    [accessToken, companyId, fetchClient],
  );

  const boxRect = {
    top: trackBox?.topY ?? 0,
    left: trackBox?.topX ?? 0,
    width: (trackBox?.bottomX ?? 0) - (trackBox?.topX ?? 0),
    height: (trackBox?.bottomY ?? 0) - (trackBox?.topY ?? 0),
  };

  const createDetectInfo = React.useCallback(() => {
    if (eventData) {
      const checkData = getCheckById(eventData?.checkId);
      return {
        sensor: getSensorById(eventData?.sensorId)?.name,
        check: checkData?.name,
        checkCategory: checkData ? getCheckCategoryById(checkData?.categoryId)?.name : undefined,
        location: getLocationById(eventData.locationId)?.name,
        object: eventData.trackedObject.name,
        startDetect: eventData.trackedObject.startTime,
        endDetect: eventData.trackedObject.endTime,
        eventStatus: getEventStatusById(eventData.status?.currentId)?.name,
      };
    }
  }, [eventData, getCheckById, getCheckCategoryById, getEventStatusById, getLocationById, getSensorById]);

  return {
    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isSuccess: status === 'resolved',
    isError: status === 'rejected',

    eventData,
    imageContent,
    trackBox,
    boxRect,
    detectInfo: createDetectInfo(),

    error,
    fetchEvent,
  };
}