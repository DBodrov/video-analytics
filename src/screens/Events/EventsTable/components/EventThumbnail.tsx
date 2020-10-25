import React from 'react';
import {css} from '@emotion/core';
import {RedWarningIcon} from '@/assets/icons';

export function EventThumbnail({thumbnail, isIncident}: {thumbnail: string; isIncident: boolean}) {
  const thumbnailCss = css({width: 82, height: 52, position: 'relative'});
  return (
    <div css={thumbnailCss}>
      <img
        src={thumbnail}
        css={{
          width: '100%',
          height: '100%',
          border: isIncident ? '1px var(--color-mts) solid' : 0,
          borderRadius: 4,
        }}
        alt="Event thumbnail"
      />
      {isIncident ? (<RedWarningIcon css={{position: 'absolute', bottom: -7, right: -7}}/>) : null}
    </div>
  );
}
