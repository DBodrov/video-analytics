import React from 'react';
import { NavMenu } from '@/components';
import { Logo } from './Logo';
import { PageTitle } from './PageTitle';
import { DropDownLogoutMenu } from './DropDownLogoutMenu';
import { Aside, Content, Header, Main, PageLayout } from './styles';

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout>
      <Header>
        <Logo />
        <PageTitle />
        <DropDownLogoutMenu />
      </Header>
      <Main>
        <Aside>
          <NavMenu />
        </Aside>
        <Content>{children}</Content>
      </Main>
    </PageLayout>
  );
}

