import { StatsPage } from '@/stats/StatsPage';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

export const TopRoutes: React.FC = observer(props => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/stats" />
      </Route>
      <Route path="/stats">
        <StatsPage />
      </Route>
    </Switch>
  );
});
