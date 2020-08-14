import React from 'react';
import styled from '@emotion/styled';
import {Button} from 'neutrino-ui';
import {PlayerStartIcon, PlayerLastIcon, PlayerNextIcon, PlayerPrevIcon} from '@/assets/icons';

const PlayerPanel = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 20px;
`;

const PlayerButtons = styled.div`
  display: flex;
  flex-flow: row nowrap;
  max-width: 225px;
`;

const PlayerButton = styled(Button)`
  border-radius: 50%;
  min-width: 38px;
  min-height: 38px;
  width: 38px;
  height: 38px;
  margin-right: 20px;
  &:last-child() {
    margin-right: 0;
  }
`;

type PlayerProps = {
  onStart: () => void;
  onLast: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function Player({onStart, onLast, onPrev, onNext}: PlayerProps) {
  return (
    <PlayerPanel>
      <PlayerButtons>
        <PlayerButton flat variant="primary" onClick={onStart}>
          <PlayerStartIcon />
        </PlayerButton>
        <PlayerButton flat variant="primary" onClick={onPrev}>
          <PlayerPrevIcon />
        </PlayerButton>
        <PlayerButton flat variant="primary" onClick={onNext}>
          <PlayerNextIcon />
        </PlayerButton>
        <PlayerButton flat variant="primary" onClick={onLast}>
          <PlayerLastIcon />
        </PlayerButton>
      </PlayerButtons>
    </PlayerPanel>
  );
}
