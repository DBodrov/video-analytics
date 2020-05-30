import '@/styles/index.less';

import 'reflect-metadata';
import 'mobx-react-lite/batchingForReactDom';

import { configure } from 'mobx';
import { createElement as h } from 'react';
import ReactDOM from 'react-dom';

import { App } from '@/app/App';
import { registerApiServices } from '@/backend/register-api';

if (process.env.NODE_ENV === 'development') {
  configure({ enforceActions: 'observed' });
}

registerApiServices();

ReactDOM.render(h(App), document.getElementById('root'));
