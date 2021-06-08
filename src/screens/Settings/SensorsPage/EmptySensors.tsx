import React from 'react';
import {Span} from 'neutrino-ui';
import Monitor from '@/assets/img/Monitor.png';
import {EmptySensorsList} from './styles';

export function EmptySensors() {
  return (
    <EmptySensorsList>
      <img src={Monitor} alt="" />
      <Span css={{fontSize: 18, marginTop: 16}}>Нет настроенных камер</Span>
      <svg width="60" height="2" viewBox="0 0 60 2" fill="none" xmlns="http://www.w3.org/2000/svg" css={{margin: '10px 0'}}>
        <rect width="60" height="2" fill="#1A91EB" />
      </svg>
      <Span css={{color: 'var(--color-text-secondary)'}}>
        У вас пока не настроена ни одна камера. Для подключения камер перейдите в раздел настройки.
      </Span>
    </EmptySensorsList>
  );
}
