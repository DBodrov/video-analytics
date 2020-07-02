import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from '@emotion/styled';
import { Aggregates } from './Aggregates';

const PanelTitle = styled.span`
  font-size: 16px;
  margin-bottom: 26px;
`;

export const Summary = observer(() => {
  return (
    <>
      <PanelTitle>Суммарно за 1 день</PanelTitle>
      <Aggregates />
    </>
  );
});
