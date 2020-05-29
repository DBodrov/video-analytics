import { to } from '@/common/await-to-js';
import { notification } from 'antd';
import { ResponseContext } from './main/runtime';

export async function showResponseError(context: ResponseContext) {
  console.log(context);
  const { status } = context.response;
  if (status >= 400 && status !== 401) {
    const { method } = context.init;
    const { statusText } = context.response;
    const [body] = await to(context.response.json());
    const details = body?.message;
    notification.error({
      message: `Ошибка ${status} ${statusText}`,
      description: `${method} ${context.url}\n${details}`,
      className: 'whitespace-pre-line',
    });
  }
  return context.response;
}
