import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../styles/theme';

import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './Auth';

type Props = { children: React.ReactNode };

export function AppProviders({ children }: Props) {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AuthProvider>{children}</AuthProvider>
      </ThemeProvider>
    </Router>
  );
}
