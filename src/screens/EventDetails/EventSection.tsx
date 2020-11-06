import React from 'react';
import {BoxToggle} from '@/components';
import {DetectInfo} from './DetectInfo';
import {EventBox} from './styles';
import {TCommonDetectInfo, TExtraDetectInfo} from './types';

type TEventSectionProps = {
  commonDetectInfo?: TCommonDetectInfo;
  extraDetectInfo?: TExtraDetectInfo[];
  imageContent?: string;
  boxes?: {
    top: number;
    left: number;
    width: number;
    height: number;
  }[];
};

export function EventSection({imageContent, boxes, commonDetectInfo, extraDetectInfo}: TEventSectionProps) {
  const [showTrackBox, setShowTrackBox] = React.useState(true);
  return (
    <EventBox>
      <div css={{position: 'relative'}}>
        <BoxToggle showBox={showTrackBox} onToggle={() => setShowTrackBox(!showTrackBox)} />
        <img src={imageContent} alt="event" />
        {showTrackBox
          ? boxes?.map(box => (
              <div css={{position: 'absolute', border: '2px var(--color-secondary) solid', ...box}}></div>
            ))
          : null}
      </div>
      <DetectInfo commonInfo={commonDetectInfo} extraInfo={extraDetectInfo} />
    </EventBox>
  );
}
