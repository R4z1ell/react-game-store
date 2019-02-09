import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Layout from './hoc/layout';
import Auth from './hoc/auth';

import Home from './components/Home';
import GamePage from './components/Game';
import StorePage from './components/Store';
import UserDashboard from './components/User';
import AddGame from './components/User/Admin/add_game/add_game';

// ! Show our Hide the 'discount' element in the 'HeaderSearch' Component if the game has or not a discount
// ! add a game to the cart when clicking on his price in the 'HeaderSearch' Component and change the relative icon
// ! shot the discounted price for discounted game inside the 'HeaderSearch' Component
// ! dispatch a game to the cart when clicking on the cart button of the 'ProductCard' Component
// ! add the 'in cart' or 'wishlist' to the 'ProductCard' Component

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
