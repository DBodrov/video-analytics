/**@jsx jsx */
import React from 'react';
import { observer } from 'mobx-react-lite';
import cn from 'classnames';
import { Layout } from 'antd';
import { css, jsx } from '@emotion/core'
import { useInject } from '@/store/use-inject';
import { AppUiStore } from '../app-ui-store';
import { AppHeader } from './AppHeader';
import { AppMenu } from './AppMenu';
import { Logo } from './Logo';
import {RightPanel} from './RightPanel'
import styles from './AppLayout.less';
const { Header, Sider, Content } = Layout;

interface Props {
  className?: string;
}

export const AppLayout: React.FC<Props> = observer(props => {
  const [ui] = useInject(AppUiStore);

  return (
    <Layout className="h-screen">
      <Sider width={250} className={styles.leftSider}>
        <div className={cn('flex items-center', styles.logoContainer)}>
          <Logo />
        </div>
        <div className="py-6">
          <AppMenu />
        </div>
      </Sider>
      <Layout>
        <Header css={{borderBottom: '1px #313D4F solid'}}>
          <AppHeader />
        </Header>
        <Layout>
          <Content
            className={cn(ui.currentPageHasOwnScrolling && 'overflow-y-hidden')}
            css={css`
              ::-webkit-scrollbar {
                width: 10px;
              };
              ::-webkit-scrollbar-thumb {
                background: #1B222D;
                border: 1px #6B727D solid;
                border-radius: 25px;
                height: 70px;
              }
            `}
          >
            {props.children}
          </Content>
          <Sider width={310} className={styles.rightSider}>
            <RightPanel />
          </Sider>
        </Layout>
      </Layout>
    </Layout>
  );
});
