import { StatsPage } from '@/stats/StatsPage';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { ROUTES } from '../router-constants';

export const TopRoutes: React.FC = observer(props => {
  return (
    <Switch>
      <Route {...ROUTES.home}>
        <Redirect to={ROUTES.stats.path} />
      </Route>
      <Route {...ROUTES.stats}>
        <StatsPage />
      </Route>
    </Switch>
  );
});
