import {
  CompanyLocationsGetResponse200,
  CompanySensorsGetResponse200,
  CompanySensorsGetResponse200Sensors,
  LocationsGetResponse200Locations,
} from '@/backend/main';

export type TLocations = CompanyLocationsGetResponse200['locations'];
export type TLocation = LocationsGetResponse200Locations;

export type TSensors = CompanySensorsGetResponse200['sensors'];
export type TSensor = CompanySensorsGetResponse200Sensors;

export interface ICompanyContext {
  locations?: TLocations;
  sensors?: TSensors;
  getLocationById(id: number): TLocation | undefined;
  getSensorById(id: number): TSensor | undefined;
}
