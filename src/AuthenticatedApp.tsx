import React from 'react';
import { AppRoutes } from './App.Routes';
import { UIProvider, RefsProvider, CompanyProvider, EventsProvider } from '@/context';

export default function AuthenticatedApp() {
  return (
    <UIProvider>
      <RefsProvider>
        <CompanyProvider>
          <EventsProvider>
            <AppRoutes />
          </EventsProvider>
        </CompanyProvider>
      </RefsProvider>
    </UIProvider>
  );
}
