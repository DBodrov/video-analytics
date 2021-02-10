import {
  CompanySensorsGetResponse200,
  SensorsGetResponse200Sensors,
  CompanyLocationsGetResponse200Locations,
  PipelinesGetResponse200Pipelines
} from '@/backend/main';

export type TLocation = CompanyLocationsGetResponse200Locations;
export type TLocations = TLocation[];

export type TPipeline = PipelinesGetResponse200Pipelines;
export type TPipelines = TPipeline[];

export type TSensors = CompanySensorsGetResponse200['sensors'];
export type TSensor = SensorsGetResponse200Sensors;

export interface ICompanyContext {
  locations?: TLocations;
  sensors?: TSensors;
  pipelines?: TPipelines;
  getLocationById(id: number): TLocation | undefined;
  getSensorById(id: number): TSensor | undefined;
}
