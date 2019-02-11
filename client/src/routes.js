import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Layout from './hoc/layout';
import Auth from './hoc/auth';

import Home from './components/Home';
import GamePage from './components/Game';
import StorePage from './components/Store';
import UserWishlist from './components/User/user_wishlist/user_wishlist';
import AddGame from './components/User/Admin/add_game/add_game';

// ! Add logic and error handling for the 'SignupModal' Component
// ! Add logic and error handling for the 'ResetpassModal' Component
// ! Add countdown in 'HomeSliders' Component for the special deals
// ! Complete the footer
// ! create a 404 page

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route
          path="/user/wishlist"
          exact
          component={Auth(UserWishlist, true)}
        />
        <Route
          path="/admin/add_product"
          exact
          component={Auth(AddGame, true)}
        />
        <Route path="/games" exact component={Auth(StorePage, false)} />
        <Route
          path="/game/:title"
          exact
          component={Auth(withRouter(GamePage, false))}
        />
        <Route path="/" exact component={Auth(Home, false)} />
      </Switch>
    </Layout>
  );
};

export default Routes;
