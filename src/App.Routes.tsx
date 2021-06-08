import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Events} from '@/screens/Events';
import {EventDetails} from '@/screens/EventDetails';
import {Sensors} from '@/screens/Sensors';
import {Faq} from '@/screens/Faq';
import {SensorDetails} from '@/screens/SensorDetails';
import {ReportsPage} from '@/screens/ReportsPage';
import {Settings, AddSensorsPage} from '@/screens/Settings';
import {TimelinesProvider} from '@/screens/EventDetails/TimelineContext'

export function AppRoutes() {
  return (
    <Switch>
      <Redirect exact from="/" to="/events" />
      <Route exact path="/events">
        <Events />
      </Route>
      <Route path="/events/details">
        <TimelinesProvider>
          <EventDetails />
        </TimelinesProvider>
      </Route>
      <Route exact path="/sensors">
        <Sensors />
      </Route>
      <Route path="/sensors/:id">
        <SensorDetails />
      </Route>
      <Route exact path="/reports">
        <ReportsPage />
      </Route>
      <Route exact path="/settings">
        <Settings />
      </Route>
      <Route exact path="/settings/addsensor">
        <AddSensorsPage />
      </Route>
      <Route exact path="/faq">
        <Faq/>
      </Route>
    </Switch>
  );
}
