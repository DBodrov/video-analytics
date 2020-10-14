import React from 'react';
import {css} from '@emotion/core';
import {Switch, Span} from 'neutrino-ui';
import {BoxToggle} from '@/components';
import {DetectInfo} from './DetectInfo';
import {EventBox, RectSwitch} from './styles';
import {TDetectInfo} from './types';

type TEventSectionProps = {
  detectInfo?: TDetectInfo;
  imageContent?: string;
  boxRect: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
};

export function EventSection({imageContent, boxRect, detectInfo}: TEventSectionProps) {
  const [showTrackBox, setShowTrackBox] = React.useState(true);
  return (
    <EventBox>
      <div css={{position: 'relative'}}>
        <BoxToggle showBox={showTrackBox} onToggle={() => setShowTrackBox(!showTrackBox)}/>
        <img src={imageContent} alt="event" />
        {showTrackBox ? (
          <div css={{position: 'absolute', border: '2px var(--color-secondary) solid', ...boxRect}}></div>
        ) : null}
      </div>
      <DetectInfo info={detectInfo} />
    </EventBox>
  );
}
