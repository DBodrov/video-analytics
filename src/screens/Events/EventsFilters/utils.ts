import {TCheckCategoryList, TCheckList} from '@/context/Refs/types';

export const createFilterList = (data?: any[]) => {
  const list = data?.filter(item => item.id > 0).map(item => ({id: item.id, value: item.name}));
  return list;
};

export function createCheckAndCategoriesList(categories: Required<TCheckCategoryList>, checks: TCheckList = []) {
  const list: Record<string, {id?: number; value?: string}[]> = {};
  if (categories && checks) {
    categories.forEach(
      cat =>
        (list[cat.name] = checks
          .filter(ch => ch?.categoryId === cat.id)
          .map(f => ({id: f?.id, value: f?.name}))),
    );
  }
  return list;
}
