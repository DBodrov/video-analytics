import React from 'react';
import {useHistory} from 'react-router-dom';
import styled from '@emotion/styled';
import {Button} from 'neutrino-ui';
import {ArrowDownIcon} from '@/assets/icons';
import {Logo} from './Logo';
import {Content, Header, PageLayout} from './styles';

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
  return (
    <PageLayout>
      <Header>
        <Logo />
        <BackButton outline flat onClick={() => history.push('/events')}>
          <ArrowDownIcon css={{transform: 'rotate(90deg)', width: 9, height: 9, marginRight: 14}} />
          <span>Вернуться</span>
        </BackButton>
      </Header>
      <Content>{children}</Content>
    </PageLayout>
  );
}
