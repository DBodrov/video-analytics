import React from 'react';
import {OldCameraIcon} from '@/assets/icons';
import {TEventsByHours} from '../use-timeline-client';
import {HeaderCell, ImageBox} from './styles';

type TImageLineProps = {events?: TEventsByHours};

export function ImagesLine({events}: TImageLineProps) {
  return (
    <>
      <HeaderCell>
        <OldCameraIcon />
      </HeaderCell>
      {events &&
        Object.keys(events).map(hour => {
          const currentEvents = events[Number(hour)];
          return (
            <ImageBox key={hour}>
              {currentEvents.map(event => {
                return <img key={event.eventCode} src={event.thumbnail} alt="thumb" />;
              })}
            </ImageBox>
          );
        })}
    </>
  );
}
