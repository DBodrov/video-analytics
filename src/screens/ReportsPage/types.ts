import {CompanyReportsPostRequest} from '@/backend/main';

export interface IReportsPostRequest extends Pick<CompanyReportsPostRequest, 'startTime' | 'endTime' | 'tzOffset' | 'entityTypes'> {

  /**
   * Массив идентификаторов правил
   * @type {Array<number>}
   * @memberof CompanyReportsPostRequest
   */
  checkIds?: Array<number>;
  /**
   * Массив идентификаторов правил
   * @type {Array<number>}
   * @memberof CompanyReportsPostRequest
   */
  checkCategoryIds?: Array<number>;
  /**
   * Массив идентификаторов площадок
   * @type {Array<number>}
   * @memberof CompanyReportsPostRequest
   */
  locationIds?: Array<number>;
  /**
   * Массив идентификаторов датчиков
   * @type {Array<number>}
   * @memberof CompanyReportsPostRequest
   */
  sensorIds?: Array<number>;
}

export function ReportsPostRequestToJSON(value?: IReportsPostRequest | null): any {
  if (value === undefined) {
      return undefined;
  }
  if (value === null) {
      return null;
  }
  return {

      'start_time': value.startTime,
      'end_time': value.endTime,
      'tz_offset': value.tzOffset,
      'entity_types': value.entityTypes,
      'check_ids': value.checkIds,
      'check_category_ids': value.checkCategoryIds,
      'location_ids': value.locationIds,
      'sensor_ids': value.sensorIds,
  };
}
