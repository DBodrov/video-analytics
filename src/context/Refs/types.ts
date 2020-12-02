import {
  // EventStatusesGetResponse200,
  ChecksGetResponse200Checks,
  CheckCategoriesGetResponse200Categories,
  StatusesGetResponse200Statuses,
} from '@/backend/auth';

// export type TEventStatuses = EventStatusesGetResponse200EventStatuses | undefined; // FIXME: Deprecated
export type TEventStatus = StatusesGetResponse200Statuses | undefined;
export type TEventStatusList = TEventStatus[];
// export type TChecks = ChecksGetResponse200Checks | undefined;
export type TCheck = ChecksGetResponse200Checks | undefined;
export type TCheckList = TCheck[];
// export type TCheckCategories = CheckCategoriesGetResponse200Categories | undefined;
export type TCheckCategory = CheckCategoriesGetResponse200Categories | undefined;
export type TCheckCategoryList = CheckCategoriesGetResponse200Categories[] | undefined;

export type TRefsContext = {
  eventStatuses?: TEventStatusList;
  checks?: TCheckList;
  checkCategories?: TCheckCategoryList;
  getCheckById(id: number): TCheck;
  getCheckCategoryById(id?: number): TCheckCategory;
  getEventStatusById(id?: number): TEventStatus;
  getCheckByIncidentCategoryId(categoryId: number): TCheck;
  getIncidentNameByCategoryId(categoryId: number): string | undefined;
};
