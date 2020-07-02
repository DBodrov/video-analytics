import { useInject } from '@/store/use-inject';
import { Layout } from 'antd';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { AppUiStore } from '../app-ui-store';
import { AppHeader } from './AppHeader';
import css from './AppLayout.less';
import { AppMenu } from './AppMenu';
import { Logo } from './Logo';
import {RightPanel} from './RightPanel'
const { Header, Sider, Content } = Layout;

interface Props {
  className?: string;
}

export const AppLayout: React.FC<Props> = observer(props => {
  const [ui] = useInject(AppUiStore);

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
          <Content
            className={cn(ui.currentPageHasOwnScrolling && 'overflow-y-hidden')}
          >
            {props.children}
          </Content>
          <Sider width={310} className={css.rightSider}>
            <RightPanel />
          </Sider>
        </Layout>
      </Layout>
    </Layout>
  );
});
