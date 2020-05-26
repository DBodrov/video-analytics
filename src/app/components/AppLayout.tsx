import { Layout } from 'antd';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import React from 'react';
import css from './AppLayout.less';
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
      </Sider>
      <Layout>
        <Header>Header</Header>
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
