import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';
import Home from './components/Home';
import GamePage from './components/Game';
import StorePage from './components/Store';
import UserDashboard from './components/User';
import AddGame from './components/User/add_game/add_game';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/user/dashboard" exact component={UserDashboard} />
        <Route path="/admin/add_product" exact component={AddGame} />
        <Route path="/games" exact component={StorePage} />
        <Route path="/game/:title" exact component={GamePage} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
};

export default Routes;
