import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Layout from './hoc/layout';
import Auth from './hoc/auth';

import Home from './components/Home';
import GamePage from './components/Game';
import StorePage from './components/Store';
import UserWishlist from './components/User/user_wishlist/user_wishlist';
import AddGame from './components/User/Admin/add_game/add_game';
import UserAccount from './components/User/user_account/user_account';
import UserSecurity from './components/User/user_security/user_security';
import UserCheckout from './components/User/user_checkout/user_checkout';
import UserOrders from './components/User/user_orders/user_orders';

// ! Add logic and error handling for the 'SignupModal' Component
// ! Add logic and error handling for the 'ResetpassModal' Component
// ! Add countdown in 'HomeSliders' Component for the special deals
// ! Create a 404 page
// ! Username should remain white when we hover over the 'HeaderAccount' Component
// ! Cart Icon(in navbar) should remain white when we hover over the 'HeaderCart' Component
// ! Reactivate ALL the Carousels animation
// ! Game in 'ProductsList' Component(the one in the Home) should remain white when we hover the 'ProductImages'
// ! Remove the 'Overall user reviews' in the 'ProductImages' Component
// ! Add logic for when we click on the 'discounted' option inside the Store filter
// ! Implement the 'onMouseLeave' inside the 'StoreSearch' Component when we leave the dropdown
// ! Complete the 'email' and 'password' in the 'UserSecurity' Component
// ! Remove the price and 'buy' button from the 'featured' Carousel section in the Home page
// ! Load random and different games for the Home page

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route
          path="/user/checkout"
          exact
          component={Auth(UserCheckout, true)}
        />
        <Route
          path="/user/wishlist"
          exact
          component={Auth(UserWishlist, true)}
        />
        <Route
          path="/user/settings/account"
          exact
          component={Auth(UserAccount, true)}
        />
        <Route
          path="/user/settings/security"
          exact
          component={Auth(UserSecurity, true)}
        />
        <Route
          path="/user/settings/orders"
          exact
          component={Auth(UserOrders, true)}
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
