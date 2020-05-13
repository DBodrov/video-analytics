import { ConfigProvider } from 'antd';
import ruRU from 'antd/es/locale/ru_RU';
import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import cn from 'classnames';
import React from 'react';
import css from './App.less';

interface Props {
  className?: string;
}

export const App: React.FC<Props> = observer(props => {
  return (
    <ConfigProvider locale={ruRU}>
      <div className={cn(css.container, props.className)}>
        <Button>Test</Button>
      </div>
    </ConfigProvider>
  );
});
