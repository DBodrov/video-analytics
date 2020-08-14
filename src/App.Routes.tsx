import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Events} from '@/screens/Events';
import {EventDetails} from '@/screens/EventDetails';

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
    </Switch>
  );
}
