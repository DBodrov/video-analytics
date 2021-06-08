import React, { useCallback } from 'react';
import {useHistory} from 'react-router-dom';
import styled from '@emotion/styled';
import {Button} from 'neutrino-ui';
import {ArrowDownIcon} from '@/assets/icons';
import {Logo} from './Logo';
import {Content, Header, PageLayout} from './styles';
import { useTimelines } from '../EventDetails/TimelineContext'
import {DropDownLogoutMenu} from './DropDownLogoutMenu'

const BackButton = styled(Button)`
  background-color: transparent;
  color: var(--color-text-secondary);
  font-size: 14;
  font-weight: 600;
  &:hover,
  &:active {
    background-color: transparent;
    box-shadow: none;
    border: 1px var(--color-primary) solid;
  }
`;

export function DetailsLayout({children}: {children: React.ReactNode}) {
  const history = useHistory();

  const { filtersState, queryParams } = useTimelines();

  const onClick = useCallback(()=>{
    history.push({pathname: '/events', state: { filtersState , checkIds: queryParams?.checkIds }})
  },[history, filtersState, queryParams?.checkIds])

  return (
    <PageLayout>
      <Header>
        <Logo />
        <BackButton outline flat onClick={onClick}>
          <ArrowDownIcon css={{transform: 'rotate(90deg)', width: 9, height: 9, marginRight: 14}} />
          <span>Вернуться</span>
        </BackButton>
        <DropDownLogoutMenu/>
      </Header>
      <Content>{children}</Content>
    </PageLayout>
  );
}
