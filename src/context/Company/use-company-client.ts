import {useReducer, useCallback} from 'react';
import {useFetch} from '@/utils';
import {
  CompanyLocationsGetResponse200FromJSON,
  CompanySensorsGetResponse200FromJSON,
  /*IncidentsGetResponse200Incidents,*/
  PipelinesGetResponse200Pipelines,
  // PipelinesGetResponse200BySensor
} from '@/backend/main';
import {useAuth, getAccessToken} from '../Auth';
import {TLocations, TSensors} from './types';

type TCompanyState = {
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
  locations?: TLocations;
  sensors?: TSensors;
  incidents?: any /*IncidentsGetResponse200Incidents*/;
  pipelines?: PipelinesGetResponse200Pipelines[];
  data?: any;
  error?: any;
};

const companyReducer = (s: TCompanyState, a: TCompanyState): TCompanyState => {
  return {...s, ...a};
};

const initialState: TCompanyState = {
  status: 'idle',
  locations: undefined,
  sensors: undefined,
  incidents: undefined,
  error: undefined,
};

export function useCompanyClient() {
  const [{status, locations, sensors, error}, setCompanyState] = useReducer(companyReducer, initialState);
  const {companyId, logout} = useAuth();
  const fetchClient = useFetch();

  const fetchData = useCallback(() => {
    const headers = {Authorization: `Bearer ${getAccessToken()}`};
    setCompanyState({status: 'pending'});
    const fetchLocations = fetchClient(`/api/va/companies/${companyId}/locations`, {headers});
    const fetchSensors = fetchClient(`/api/va/companies/${companyId}/sensors`, {headers});
    // const fetchPipelines = fetchClient(`/api/va/companies/${companyId}/pipelines`, {headers});
    // const fetchIncidents = fetchClient(`/api/va/companies/${companyId}/refs/incidents`, {headers});
    Promise.all([fetchLocations, fetchSensors]).then(
      response => {
        const [locationsData, sensorsData] = response;
        const locations = CompanyLocationsGetResponse200FromJSON(locationsData).locations;
        const sensors = CompanySensorsGetResponse200FromJSON(sensorsData).sensors;
        // const pipelines = PipelinesGetResponse200FromJSON(pipelinesData).pipelines;

        // const incidents = RefIncidentsGetResponse200FromJSON(incidentsData).incidents;
        setCompanyState({status: 'resolved', locations, sensors});
      },
      error => {
        setCompanyState({status: 'rejected', error});
        if (error?.status_code === 401) logout();
      },
    );
  }, [companyId, fetchClient, logout]);

  const getLocationById = useCallback(
    (id: number) => {
      return locations?.find(l => l.id === id);
    },
    [locations],
  );

  const getSensorById = useCallback(
    (id: number) => {
      return sensors?.find(s => s.ref.id === id);
    },
    [sensors],
  );

  return {
    fetchData,
    error,
    locations,
    sensors,
    getLocationById,
    getSensorById,

    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isSuccess: status === 'resolved',
    isError: status === 'rejected',
  };
}
