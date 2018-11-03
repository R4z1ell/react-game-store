import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import styles from './App.module.scss';

import Layout from './hoc/layout';
import Home from './components/Home';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
};

export default Routes;
