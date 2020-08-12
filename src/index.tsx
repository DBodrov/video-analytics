import React from 'react';
import {render} from 'react-dom';
import {Global} from '@emotion/core';
import {AppProviders} from '@/context';
import {App} from './App';
import {globalStyles} from './styles/globalStyles';

async function run() {
  if (process.env.NODE_ENV === 'development' && process.env.USE_API_MOCKS === 'true') {
    await import('@/backend/init-mocks');
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
