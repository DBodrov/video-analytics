import React from 'react';
import {render} from 'react-dom';
import {Global} from '@emotion/react';
import {AppProviders} from '@/context';
import {App} from './App';
import {globalStyles} from './styles/globalStyles';
import {devServer} from './mocks/dev-server';

function run() {
  if (process.env.NODE_ENV === 'development' && process.env.USE_API_MOCKS === 'true') {
    devServer.start();
  }

  render(
    <React.StrictMode>
      <Global styles={globalStyles} />
      <AppProviders>
        <App />
      </AppProviders>
    </React.StrictMode>,
    document.getElementById('root'),
  );
}

run();
