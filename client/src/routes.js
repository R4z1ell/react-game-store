import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';
import Home from './components/Home';
import GamePage from './components/Game';
import StorePage from './components/Store';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/games" exact component={StorePage} />
        <Route path="/game/:title" exact component={GamePage} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
};

export default Routes;
