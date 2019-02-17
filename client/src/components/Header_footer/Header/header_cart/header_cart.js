import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import './header_cart.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FaEuroSign } from 'react-icons/fa';
import {
  getCartItems,
  removeCartItem,
  addToWishlist
} from '../../../../store/actions/user_actions';
import { getOverlayStatus } from '../../../../store/actions/site_actions';

class HeaderCart extends Component {
  state = {
    total: 0,
    loading: false,
    hide: false
  };

  componentDidMount() {
    let cartItems = [];
    let user = this.props.user;

    if (user.userData.cart) {
      if (user.userData.cart.length > 0) {
        user.userData.cart.forEach(item => {
          cartItems.push(item.id);
        });
        this.props.dispatch(getCartItems(cartItems)).then(() => {
          if (this.props.user.cartDetail.length > 0) {
            this.calculateTotal(this.props.user.cartDetail);
          }
        });
      }
    }
  }

  closeAll = () => {
    setTimeout(() => {
      this.props.closeAll(false);
    }, 500);
  };

  goToCheckout = () => {
    this.setState({
      loading: true,
      hide: true
    });
    setTimeout(() => {
      this.setState({
        loading: false,
        hide: false
      });
      this.props.closeAll(false);
      this.props.history.push('/user/checkout');
    }, 1500);
  };

  calculateTotal = cartDetail => {
    let total = 0;

    cartDetail.forEach(item => {
      const discountedPrice = Number(
        item.prices.basePrice / 100 -
          (item.prices.basePrice / 10000) * item.prices.discount
      );

      if (item.prices.discount) {
        total += discountedPrice;
      } else {
        total += item.prices.basePrice / 100;
      }
    });

    this.setState({
      total: total.toFixed(2)
    });
  };

  removeCartItem = id => {
    this.props.dispatch(removeCartItem(id)).then(() => {
      this.calculateTotal(this.props.user.cartDetail);
    });
  };

  sendToWishlist = id => {
    if (this.props.user.userData.isAuth) {
      this.props.dispatch(addToWishlist(id));
      this.removeCartItem(id);
    }
    if (!this.props.user.userData.isAuth) {
      this.props.dispatch(getOverlayStatus(true, true));
    }
  };

  renderCartGames = () =>
    this.props.auth.cart.length !== 0 && this.props.user.cartDetail
      ? this.props.user.cartDetail.map((game, i) => {
          const discountedPrice = Number(
            game.prices.basePrice / 100 -
              (game.prices.basePrice / 10000) * game.prices.discount
          ).toFixed(2);
          return (
            <div className="menu-product menu-cart-item" key={i}>
              {game.prices.discount ? (
                <div className="menu-cart-item__price">
                  <FaEuroSign size="0.91em" />
                  {discountedPrice}
                </div>
              ) : (
                <div className="menu-cart-item__price">
                  <FaEuroSign size="0.91em" />
                  {game.prices.basePrice / 100}
                </div>
              )}
              <Link to={`/game/${game.title}`}>
                <img
                  src={game.images.card}
                  alt="card_image"
                  className="menu-cart-item__image"
                />
                <div className="menu-cart__content">
                  <div className="menu-cart__content-in">
                    <div className="menu-product__title menu-cart-item__title">
                      {game.title}
                    </div>
                    {game.prices.discount ? (
                      <div className="menu-cart-item__discount">
                        <span className="menu-product__discount-text">
                          -{game.prices.discount}%
                        </span>
                      </div>
                    ) : null}
                  </div>
                </div>
              </Link>
              <span
                className="menu-cart-option"
                onClick={() => this.removeCartItem(game._id)}
              >
                Remove
              </span>
              {!this.props.user.userData.wishlist.some(
                elem => elem.id === game._id
              ) ? (
                <span
                  className="menu-cart-option menu-cart-option--add-to-wishlist"
                  onClick={() => this.sendToWishlist(game._id)}
                >
                  Move to wishlist
                </span>
              ) : null}
              {this.props.user.userData.wishlist.some(
                elem => elem.id === game._id
              ) ? (
                <Link to={`/game/${game.title}`}>
                  <span className="menu-cart-option menu-cart-option--wishlisted">
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{
                        color: '#ffa200',
                        width: '11px',
                        height: '11px',
                        marginRight: '5px'
                      }}
                    />
                    Wishlisted
                  </span>
                </Link>
              ) : null}
            </div>
          );
        })
      : null;

  renderMenuCartIsEmpty = () => (
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
      <Link
        to="/games"
        className="menu-cart-empty__btn menu-cart-empty__btn--browse"
        onClick={this.closeAll}
      >
        Browse games
      </Link>
      {this.props.auth.isAuth ? (
        <Link
          to="/user/wishlist"
          className="menu-cart-empty__btn menu-cart-empty__btn--wishlist"
        >
          Your Wishlist
        </Link>
      ) : null}
    </div>
  );

  render() {
    const hideElem = this.state.hide ? '0' : '1';

    return (
      <div className="menu-cart__submenu" onMouseLeave={this.closeAll}>
        {!this.props.auth.isAuth ? (
          this.renderMenuCartIsEmpty()
        ) : this.props.auth.cart.length === 0 ? (
          this.renderMenuCartIsEmpty()
        ) : (
          <React.Fragment>
            <div className="menu-header-cart">
              <div style={{ opacity: hideElem }}>
                <div className="menu-cart-items">
                  <span className="menu-header__label">Your shopping cart</span>
                  <span className="menu-header__items">
                    {this.props.user.cartDetail
                      ? this.props.user.cartDetail.length > 1
                        ? `${this.props.user.cartDetail.length} Items added`
                        : `${this.props.user.cartDetail.length} Item added`
                      : null}
                  </span>
                </div>
                <div className="menu-cart__total-price">
                  <FaEuroSign size="0.75em" /> {this.state.total}
                </div>
              </div>
              <div className="menu-btn--green" onClick={this.goToCheckout}>
                {this.state.loading ? (
                  <Loader type="Oval" color="#fff" height="20" width="20" />
                ) : (
                  'Go to checkout'
                )}
              </div>
            </div>
            <div className="menu-cart__products-list">
              <div className="menu-cart__custom-scrollbar">
                <div className="menu-cart__custom-scrollbar--wrapper">
                  <div
                    className="menu-cart__custom-scrollbar--content"
                    id="bar"
                  >
                    {this.renderCartGames()}
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(withRouter(HeaderCart));
