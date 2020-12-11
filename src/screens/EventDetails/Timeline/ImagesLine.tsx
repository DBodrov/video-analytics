import React from 'react';
import {OldCameraIcon} from '@/assets/icons';
import {TOccurrenceByHours} from '../types';
import {HeaderCell, ImageBox} from './styles';

type TImageLineProps = {events?: TOccurrenceByHours};

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
                return <img key={event.eventId} src={event.thumbnail} alt="thumb" />;
              })}
            </ImageBox>
          );
        })}
    </>
  );
}
