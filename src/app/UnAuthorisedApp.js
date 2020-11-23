import React, { lazy } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

const Login = lazy(() => import('../pages/Login'));

const UnAuthorisedApp = () => {
  const location = useLocation();
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Redirect
        to={{
          pathname: '/',
          state: { from: location },
        }}
      />
    </Switch>
  );
};

export default UnAuthorisedApp;
