import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Events} from '@/screens/Events';
import {EventDetails} from '@/screens/EventDetails';
import {Sensors} from '@/screens/Sensors';
import {SensorDetails} from '@/screens/SensorDetails';
import {ReportsPage} from '@/screens/ReportsPage';

export function AppRoutes() {
  return (
    <Switch>
      <Redirect exact from="/" to="/events" />
      <Route exact path="/events">
        <Events />
      </Route>
      <Route path="/events/details">
        <EventDetails />
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
    </Switch>
  );
}
