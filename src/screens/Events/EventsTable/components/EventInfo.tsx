import React from 'react';
import {TEventView} from '@/context'

export function EventInfo(props: TEventView) {

  const {check, sensorName, locationName, checkCategory} = props;

  return (
    <div css={{ display: 'flex', flexFlow: 'column nowrap' }}>
      <span css={{ fontSize: 16, fontWeight: 600, lineHeight: '20px' }}>{check}</span>
      <div css={{ display: 'flex', flexFlow: 'row nowrap', color: '#7F8FA4' }}>
        <span css={{ fontSize: 12 }}>{sensorName}</span>
        <span css={{ padding: '0 4px' }}>|</span>
        <span css={{ fontSize: 12 }}>Площадка: </span>
        <span css={{ fontSize: 12, color: '#fff', textDecoration: 'underline', paddingLeft: 4 }}>
          {locationName}
        </span>
      </div>
      <div css={{ display: 'flex', flexFlow: 'row nowrap', color: '#7F8FA4' }}>
        <span css={{ fontSize: 12 }}>Шаблон: </span>
        <span css={{ fontSize: 12, color: '#fff', textDecoration: 'underline', paddingLeft: 4 }}>
          {checkCategory}
        </span>
      </div>
    </div>
  );
}

export function EventDetection({ timeStamp }: { timeStamp: TEventView['timestamp'] }) {
  return (
    <div css={{ display: 'flex', flexFlow: 'column nowrap', justifyContent: 'center' }}>
      <span css={{ fontSize: 14 }}>{timeStamp}</span>
      <span css={{ fontSize: 12, color: '#7F8FA4' }}>Время детекции</span>
    </div>
  );
};

export function EventStatus({ eventStatus }: { eventStatus: TEventView['eventStatus'] }) {
  return (
    <div css={{ display: 'flex', flexFlow: 'column nowrap', justifyContent: 'center' }}>
      <span css={{ fontSize: 14 }}>{eventStatus}</span>
      <span css={{ fontSize: 12, color: '#7F8FA4' }}>Статус</span>
    </div>
  );
};
