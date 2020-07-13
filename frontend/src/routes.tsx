import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ListCountries from './pages/ListCountries';

import { isAuthenticated } from './auth';

const PrivateRoute = ({ component: Component, ...rest }:any) => (
  <Route 
    {...rest} 
    render={props => 
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/' , state: { from: props.location } }} />
      )
    } 
  />
);

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Login} path="/login" />
        <Route component={Register} path="/register" />
        <PrivateRoute component={ListCountries} path="/list-countries" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;