import React from 'react';
import {Span} from 'neutrino-ui';
import {LineIcon, RecycleBinIcon, SquareIcon} from './ToolbarIcons';
import {ToolbarButton, Toolbar} from './styles';

type Props = {
  shape?: string;
  onSetShape: (shape: string) => void;
  onClearAll: () => void;
};

export function MarkupToolbar(props: Props) {
  const {onClearAll, onSetShape, shape} = props;

  return (
    <Toolbar>
      <ToolbarButton onClick={() => onSetShape('line')}>
        <LineIcon />
        <Span css={{fontSize: 14, fontWeight: 600, paddingLeft: 12}}>Линия</Span>
      </ToolbarButton>
      <ToolbarButton onClick={() => onSetShape('square')}>
        <SquareIcon />
        <Span css={{fontSize: 14, fontWeight: 600, paddingLeft: 12}}>Прямоугольник</Span>
      </ToolbarButton>
      <ToolbarButton onClick={onClearAll}>
        <RecycleBinIcon />
        <Span css={{fontSize: 14, fontWeight: 600, paddingLeft: 12}}>Удалить</Span>
      </ToolbarButton>
    </Toolbar>
  );
}
