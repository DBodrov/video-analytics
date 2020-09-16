import {TCheckCategoryList, TCheckList} from '@/context/Refs/types';

export const periodsList = [
  {
    id: -1,
    title: '1 день',
    filterDate() {
      return {startTime: undefined, endTime: undefined};
    },
  },
  {
    id: 1,
    title: '3 дня',
    filterDate() {
      const now = new Date();
      const endTime = now.toISOString();
      const startDate = new Date();
      const startTimeVal = startDate.setDate(startDate.getDate() - 3);
      const startTime = new Date(startTimeVal).toISOString();
      return {
        startTime,
        endTime,
      };
    },
  },
  {
    id: 2,
    title: '1 неделя',
    filterDate() {
      const now = new Date();
      const endTime = now.toISOString();
      const startDate = new Date();
      const startTimeVal = startDate.setDate(startDate.getDate() - 7);
      const startTime = new Date(startTimeVal).toISOString();
      return {
        startTime,
        endTime,
      };
    },
  },
  {
    id: 3,
    title: '1 месяц',
    filterDate() {
      const now = new Date();
      const endTime = now.toISOString();
      const startDate = new Date();
      const startTimeVal = startDate.setMonth(startDate.getMonth() - 1);
      const startTime = new Date(startTimeVal).toISOString();
      return {
        startTime,
        endTime,
      };
    },
  },
];

export const createFilterList = (data?: any[]) => {
  const list = data?.filter(item => item.id > 0).map(item => ({id: item.id, title: item.name}));
  return list;
};

export function createCheckAndCategoriesList(categories?: TCheckCategoryList, checks?: TCheckList) {
  const list: Record<string, {id?: number; title?: string}[]> = {};
  if (categories && checks) {
    categories.forEach(
      cat =>
        (list[cat.name] = checks
          .filter(ch => ch?.categoryId === cat.id)
          .map(f => ({id: f?.id, title: f?.name}))),
    );
    //console.log(list);
  }
  return list;
}
