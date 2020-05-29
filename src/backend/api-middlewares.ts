import { to } from '@/common/await-to-js';
import { notification } from 'antd';
import { API_BASE_PATH } from './api-constants';
import { RequestErrorInfo } from './api-types';
import { ResponseContext } from './main/runtime';

export async function showResponseErrorMware(context: ResponseContext) {
  const { status } = context.response;
  if (status >= 400 && status !== 401) {
    const [body] = await to(context.response.json());
    showRequestError({
      status,
      statusText: context.response.statusText,
      method: context.init.method,
      url: context.url,
      message: body?.message,
    });
  }
  return context.response;
}

export function showRequestError({
  status,
  statusText = 'при запросе',
  method = '',
  message,
  ...params
}: RequestErrorInfo) {
  const url = dropBasePath(params.url);
  const endpoint = [method, url].filter(Boolean).join(' ');
  notification.error({
    message: ['Ошибка', status, statusText].filter(Boolean).join(' '),
    description: [endpoint, message].filter(Boolean).join('\n'),
    className: 'whitespace-pre-line',
  });
}

function dropBasePath(url: string | undefined): string | undefined {
  if (typeof url !== 'string') {
    return url;
  }
  return API_BASE_PATH && url.startsWith(API_BASE_PATH)
    ? url.slice(API_BASE_PATH.length)
    : url;
}
