import React from 'react';
import { css } from '@emotion/react';
import {Switch, Span} from 'neutrino-ui';
import {ToggleWrap} from './styles';

type TBoxToggleProps = {
  showBox: boolean;
  onToggle: () => void;
}
export function BoxToggle({showBox, onToggle}: TBoxToggleProps) {
  return (
    <ToggleWrap>
      <Switch
        on={showBox}
        onToggle={onToggle}
        trackCss={css({width: 38, height: 20})}
        buttonCss={css({width: 16, height: 16})}
      />
      <Span css={{marginLeft: 5, fontSize: 10, fontWeight: 'bold'}}>
        РАЗМЕТКА {showBox ? 'ВКЛ' : 'ВЫКЛ'}
      </Span>
    </ToggleWrap>
  );
}
