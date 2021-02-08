import React from 'react';
import {css} from '@emotion/react';
import {useTheme, useToggle, ToggleArrowIcon} from 'neutrino-ui';
import {TextBox} from './styles';

export function SelectBox({children}: {children: React.ReactNode}) {
  const {handleToggle, isOpen} = useToggle();
  const {colors} = useTheme();
  const baseCss = css({
    border: `1px ${
      isOpen ? colors?.pageElementsColors?.activeBorder : colors?.pageElementsColors?.border
    } solid`,
    '&:hover': {cursor: 'pointer', borderColor: colors?.pageElementsColors?.activeBorder},
    color: colors?.textColors?.text,
    borderRadius: 4,
    backgroundColor: colors?.pageElementsColors?.formElements,
  });

  return (
    <TextBox onClick={handleToggle} css={[baseCss]}>
      {children}
      <ToggleArrowIcon css={{position: 'absolute', top: 15, right: 8, width: 10, height: 10}}/>
    </TextBox>
  );
}
