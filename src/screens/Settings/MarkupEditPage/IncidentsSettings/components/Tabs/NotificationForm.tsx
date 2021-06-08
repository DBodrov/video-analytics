import React from 'react';
import {Span} from 'neutrino-ui';
import {Form, Input} from './styles';

export function NotificationForm() {
  return (
    <Form>
      <Span>Укажите email для отправки информирования</Span>
      <div css={{display: 'flex', flexDirection: 'column', padding: '26px 0 0 16px'}}>
        <label
          htmlFor="email"
          css={{fontSize: 14, color: 'var(--color-text-secondary)', marginBottom: 8}}
        >
          Отправить уведомление о инциденте на email
        </label>
        <Input type="email" name="email" id="email" css={{width: 245, height: 36, borderRadius: 4}} />
      </div>
    </Form>
  );
}
