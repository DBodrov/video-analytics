import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from '@emotion/styled';
import { Summary } from './Summary';
import {Events} from './Events';

const Panel = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 250px;
  height: 100%;
  margin: auto;
  padding-top: 20px;
`;

export const RightPanel = observer(() => {
  return (
    <Panel>
      <Summary />
      <Events />
    </Panel>
  );
});
