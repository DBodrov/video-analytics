import {ChecksGetResponse200Checks} from '@/backend/auth';

export const checksFromJSON = (json: any[]): ChecksGetResponse200Checks[] => {
  return json.map((checkRaw: any) => {
    return {
      id: checkRaw['id'],
      name: checkRaw['name'],
      code: checkRaw['code'],
      description: checkRaw['description'],
      categoryId: checkRaw['category_id'],
    };
  });
};
