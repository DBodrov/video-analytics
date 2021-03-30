import React from 'react';
import { NavMenu } from '@/components';
import { Logo } from './Logo';
import { PageTitle } from './PageTitle';
import { DropDownLogoutMenu } from './DropDownLogoutMenu';
import { Aside, Content, Header, Main, PageLayout } from './styles';

type Props = {
  children: React.ReactNode;
  pageTitle?: string | React.ReactNode;
}

export function AppLayout({ children, pageTitle}: Props) {
  return (
    <PageLayout>
      <Header>
        <Logo />
        <PageTitle title={pageTitle} />
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

