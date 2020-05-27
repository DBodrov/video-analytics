import { RouterStore } from '@/router/router-store';
import { TopRoutes } from '@/router/TopRoutes';
import { useInject } from '@/store/use-inject';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/es/locale/ru_RU';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Router } from 'react-router';
import { AppLayout } from './components/AppLayout';

export const App: React.FC = observer(() => {
  const [router] = useInject(RouterStore);

  return (
    <Router history={router.history}>
      <ConfigProvider locale={ruRU}>
        <AppLayout>
          <TopRoutes />
        </AppLayout>
      </ConfigProvider>
    </Router>
  );
});
