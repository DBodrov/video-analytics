import React from 'react';
import {Span} from 'neutrino-ui';
import {TSensor} from '../types';

type Props = {sensor?: TSensor};

export function TechInfo({sensor}: Props) {
  return (
    <div css={{paddingLeft: 30, backgroundColor: 'var(--color-border)'}}>
      <Span css={{fontSize: 14}}>{sensor?.ref.name}</Span>
      <div>
        <Span css={{fontSize: 12, color: 'var(--color-text-secondary)'}}>
          Правил: {sensor?.metrics.activeCheckIds?.length} | Шаблонов:{' '}
          {sensor?.metrics.activeCheckCategoryIds?.length}
        </Span>
      </div>
    </div>
  );
}
