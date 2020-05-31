import { Layout } from 'antd';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { AppHeader } from './AppHeader';
import css from './AppLayout.less';
import { AppMenu } from './AppMenu';
import { Logo } from './Logo';
const { Header, Sider, Content } = Layout;

interface Props {
  className?: string;
}

export const AppLayout: React.FC<Props> = observer(props => {
  return (
    <Layout className="h-screen">
      <Sider width={250} className={css.leftSider}>
        <div className={cn('flex items-center', css.logoContainer)}>
          <Logo />
        </div>
        <div className="py-6">
          <AppMenu />
        </div>
      </Sider>
      <Layout>
        <Header>
          <AppHeader />
        </Header>
        <Layout>
          <Content>{props.children}</Content>
          <Sider width={310} className={css.rightSider}>
            Sider
          </Sider>
        </Layout>
      </Layout>
    </Layout>
  );
});
