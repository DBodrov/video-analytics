import React from 'react';
import {Span} from 'neutrino-ui';
import {SvgCamera} from '@/assets/icons';

export function Logo() {
  return (
    <div
      css={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: 30 }}
    >
      <SvgCamera />
      <Span css={{ fontSize: 26, paddingLeft: 15 }}>Video AI</Span>
      <Span css={{ fontSize: 12, color: 'var(--color-mts)', marginLeft: 4, marginBottom: 16 }}>mts</Span>
    </div>
  );
}
