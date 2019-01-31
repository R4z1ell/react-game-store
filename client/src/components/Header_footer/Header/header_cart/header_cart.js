import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header_cart.scss';

class HeaderCart extends Component {
  closeAll = () => {
    setTimeout(() => {
      this.props.closeAll(false);
    }, 500);
  };

  render() {
    return (
      <div className="menu-cart__submenu" onMouseLeave={this.closeAll}>
        {/* <div className="menu-header-cart"></div> */}
        <div className="menu-cart-empty">
          <div className="menu-cart-empty__header">
            <svg
              preserveAspectRatio="xMidYMax meet"
              viewBox="0 0 17 16.1"
              width="100%"
              height="100%"
              className="menu-cart-empty__header-icon"
            >
              <path
                d="M16.8,1.5l-1.8,0L13,11l-1,1l-9,0l-1.1-1L0,3l1.5,0l2.1,7.6h7.7L13.4,1l1-1L17,0L16.8,1.5z
                M4.6,8.2V7.7h5.8v0.5L4.6,8.2L4.6,8.2z M4.3,5.6h6.2l0,0.5l-6.2,0V5.6L4.3,5.6z M3.5,4l0-0.4h7.9l0,0.4L3.5,4z M4.5,13
                C5.3,13,6,13.6,6,14.4c0,0,0,0.1,0,0.1c0,0.9-0.7,1.6-1.5,1.6c0,0,0,0,0,0C3.7,16,3,15.4,3,14.6c0,0,0-0.1,0-0.1
                c0-0.8,0.5-1.4,1.3-1.5C4.4,13,4.4,13,4.5,13L4.5,13z M10.4,13c0.8-0.1,1.6,0.6,1.6,1.4c0,0,0,0,0,0c0,0.9-0.7,1.6-1.6,1.6
                c-0.8,0-1.5-0.7-1.5-1.5C8.9,13.7,9.6,13,10.4,13L10.4,13L10.4,13z"
              />
            </svg>
            Your cart is empty
          </div>
          <hr className="menu-cart-empty__line" />
          <div className="menu-cart-empty__description">
            Explore great games and offers
          </div>
          <Link to="/games" className="menu-cart-empty__btn">
            Browse games
          </Link>
          {this.props.auth.isAuth ? (
            <Link
              to="/games"
              className="menu-cart-empty__btn menu-cart-empty__btn--wishlist"
            >
              Your Wishlist
            </Link>
          ) : null}
        </div>
        {/* <div className="menu-cart__products-list"></div> */}
      </div>
    );
  }
}

export default HeaderCart;
