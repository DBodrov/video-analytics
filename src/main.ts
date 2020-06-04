import '@/styles/index.less';

import 'reflect-metadata';
import 'mobx-react-lite/batchingForReactDom';

import { configure } from 'mobx';
import { createElement as h } from 'react';
import ReactDOM from 'react-dom';

import { App } from '@/app/App';
import { registerApiServices } from '@/backend/register-api';
import { getStoreByName } from './store/get-store-by-name';

async function run() {
  if (process.env.NODE_ENV === 'development') {
    configure({ enforceActions: 'observed' });
  }

  if (
    process.env.NODE_ENV === 'development' &&
    process.env.VUE_APP_USE_API_MOCKS === 'true'
  ) {
    await import('@/backend/init-mocks');
  }

  registerApiServices();

  ReactDOM.render(h(App), document.getElementById('root'));

  (window as any).APP_getStore = getStoreByName;
}

run();
