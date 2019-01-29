import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Layout from './hoc/layout';
import Auth from './hoc/auth';

import Home from './components/Home';
import GamePage from './components/Game';
import StorePage from './components/Store';
import UserDashboard from './components/User';
import AddGame from './components/User/Admin/add_game/add_game';

// ! Create the 'Auth' HOC Component to handle the authentication, create the 'auth' action inside the
// ! 'user_actions.js' file

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/user/dashboard" exact component={Auth(UserDashboard)} />
        <Route path="/admin/add_product" exact component={Auth(AddGame)} />
        <Route path="/games" exact component={Auth(StorePage)} />
        <Route
          path="/game/:title"
          exact
          component={Auth(withRouter(GamePage))}
        />
        <Route path="/" exact component={Auth(Home)} />
      </Switch>
    </Layout>
  );
};

export default Routes;
