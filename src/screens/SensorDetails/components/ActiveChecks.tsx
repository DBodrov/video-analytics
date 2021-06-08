import React from 'react';
import styled from '@emotion/styled';
import {Span} from 'neutrino-ui';
import {CircleCheckIcon} from '@/assets/icons';
import {TCheck} from '@/context/Refs/types';

const CheckItem = styled.li`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 10px;
  padding: 0;
`;

type Props = {
  checkList?: TCheck[];
};

export function ActiveChecks(props: Props) {
  const {checkList} = props;
  return (
    <div css={{padding: '10px 0px 10px 30px', border: '1px var(--color-border) solid'}}>
      <Span css={{fontSize: 14}}>Активные правила</Span>
      <ul css={{margin: 0, padding: '10px 0'}}>
        {checkList
          ? checkList.map((check) => (
              <CheckItem key={check?.id}>
                <CircleCheckIcon />
                <Span css={{paddingLeft: 14, fontSize: 14}}>{check?.name}</Span>
              </CheckItem>
            ))
          : null}
      </ul>
    </div>
  );
}
