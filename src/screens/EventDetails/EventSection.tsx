import React from 'react';
import {css} from '@emotion/core';
import {Switch, Span} from 'neutrino-ui';
import {DetectInfo} from './DetectInfo';
import {EventBox, RectSwitch} from './styles';
import {TDetectInfo} from './types';

type TEventSectionProps = {
  detectInfo: TDetectInfo | undefined;
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
        <RectSwitch>
          <Switch
            on={showTrackBox}
            onToggle={() => setShowTrackBox(!showTrackBox)}
            trackCss={css({width: 38, height: 20})}
            buttonCss={css({width: 16, height: 16})}
          />
          <Span css={{marginLeft: 5, fontSize: 10, fontWeight: 'bold'}}>
            РАЗМЕТКА {showTrackBox ? 'ВКЛ' : 'ВЫКЛ'}
          </Span>
        </RectSwitch>
        <img src={imageContent} alt="event" />
        {showTrackBox ? (
          <div css={{position: 'absolute', border: '2px var(--color-secondary) solid', ...boxRect}}></div>
        ) : null}
      </div>
      <DetectInfo info={detectInfo} />
    </EventBox>
  );
}
