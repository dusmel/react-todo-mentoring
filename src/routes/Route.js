import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import getRoutes from 'helpers/getRoutes';
import routes from 'routes';
import Dashboard from 'containers/Dashboard';

const { protectedRoutes, unprotectedRoutes } = getRoutes(routes);

const Routes = () => {
  return (
    <Router>
      <Switch>
        {unprotectedRoutes.map(route => (
          <Route key={route.name} exact path={route.path} component={route.component} />
        ))}
        <Dashboard>
          {protectedRoutes.map(route => (
            <Route key={route.name} exact path={route.path} component={route.component} />
          ))}
        </Dashboard>
      </Switch>
    </Router>
  );
};

export default Routes;
