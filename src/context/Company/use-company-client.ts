import {useReducer, useCallback} from 'react';
import {useFetch} from '@/utils';
import {
  CompanyLocationsGetResponse200,
  LocationsGetResponse200FromJSON,
  CompanySensorsGetResponse200,
  SensorsGetResponse200FromJSON,
  RefIncidentsGetResponse200,
} from '@/backend/main';
import {useAuth} from '../Auth';

type TCompanyState = {
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
  locations?: CompanyLocationsGetResponse200['locations'];
  sensors?: CompanySensorsGetResponse200['sensors'];
  incidents?: RefIncidentsGetResponse200['incidents'];
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
  const {accessToken, companyId} = useAuth();
  const fetchClient = useFetch();

  const fetchData = useCallback(() => {
    const headers = {Authorization: `Bearer ${accessToken}`};
    setCompanyState({status: 'pending'});
    const fetchLocations: Promise<CompanyLocationsGetResponse200> = fetchClient(
      `/api/va/companies/${companyId}/locations`,
      {headers},
    );
    const fetchSensors = fetchClient(`/api/va/companies/${companyId}/sensors`, {headers});
    // const fetchIncidents = fetchClient(`/api/va/companies/${companyId}/refs/incidents`, {headers});
    Promise.all([fetchLocations, fetchSensors]).then(
      response => {
        const [locationsData, sensorsData] = response;
        const locations = LocationsGetResponse200FromJSON(locationsData).locations;
        const sensors = SensorsGetResponse200FromJSON(sensorsData).sensors;
        // const incidents = RefIncidentsGetResponse200FromJSON(incidentsData).incidents;
        setCompanyState({status: 'resolved', locations, sensors});
      },
      error => {
        setCompanyState({status: 'rejected', error});
      },
    );
  }, [accessToken, companyId, fetchClient]);

  const getLocationById = useCallback(
    (id: number) => {
      return locations?.find(l => l.id === id);
    },
    [locations],
  );

  const getSensorById = useCallback(
    (id: number) => {
      return sensors?.find(s => s.id === id);
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
