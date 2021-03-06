import React, { Component } from 'react';

import './user_checkout.scss';
import {
  getCartItems,
  removeCartItem,
  addToWishlist,
  onSuccessBuy
} from '../../../store/actions/user_actions';
import Paypal from '../../utils/paypal';
import { getOverlayStatus } from '../../../store/actions/site_actions';

class UserCheckout extends Component {
  state = {
    total: 0
  };

  componentDidMount() {
    let cartItems = [];
    let user = this.props.user;

    if (this.props.history.location.pathname === '/user/checkout') {
      let selectBody = document.body;
      selectBody.classList.add('body-bck');
    }

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

  componentWillUnmount() {
    let selectBody = document.body;
    selectBody.classList.remove('body-bck');
  }

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

  transactionError = data => {
    console.log('Paypal error');
  };

  transactionCanceled = data => {
    console.log('Transaction canceled');
  };

  transactionSuccess = data => {
    this.props
      .dispatch(
        onSuccessBuy({
          cartDetail: this.props.user.cartDetail,
          paymentData: data
        })
      )
      .then(() => {
        if (this.props.user.successBuy) {
          this.props.history.push('/');
        }
      });
  };

  renderCartGames = () =>
    this.props.user.cartDetail ? (
      this.props.user.cartDetail.length !== 0 ? (
        this.props.user.cartDetail.map((game, i) => {
          const discountedPrice = Number(
            game.prices.basePrice / 100 -
              (game.prices.basePrice / 10000) * game.prices.discount
          ).toFixed(2);

          return (
            <div className="product-row" key={i}>
              <div className="product-row__link">
                <div className="product-row__picture">
                  <img
                    src={game.images.card}
                    alt="cart"
                    className="product-row__img"
                  />
                </div>
                <div className="product-row__wrapper">
                  <div className="product-row__text">
                    <div className="product-row__content">
                      <div className="product-row__content-in">
                        <div className="product-row__title">
                          <span className="product-title__text">
                            {game.title}
                          </span>
                        </div>
                        <div className="product-row__info">
                          {!this.props.user.userData.wishlist.some(
                            elem => elem.id === game._id
                          ) ? (
                            <span
                              className="product-row__option"
                              onClick={() => this.sendToWishlist(game._id)}
                            >
                              Move to wishlist
                            </span>
                          ) : null}
                          <span
                            className="product-row__option"
                            onClick={() => this.removeCartItem(game._id)}
                          >
                            Remove
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-row__prices product-row__alignment">
                    {game.prices.discount ? (
                      <React.Fragment>
                        <span className="product-row__base-price price-text--old">
                          {game.prices.basePrice / 100}
                        </span>
                        <span className="product-row__discounted-price">
                          {discountedPrice}
                        </span>
                      </React.Fragment>
                    ) : (
                      <span className="product-row__base-price">
                        {game.prices.basePrice / 100}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="product-row__empty">Your order is empty</div>
      )
    ) : (
      <div className="product-row__empty">Your order is empty</div>
    );

  render() {
    return (
      <div
        style={{
          display: 'flex',
          maxWidth: '1100px',
          minHeight: '71.9vh',
          margin: '90px auto 24px auto'
        }}
      >
        <div className="section-1">
          <header className="module-header" style={{ fontSize: '14px' }}>
            Your order
          </header>
          <div className="order__games">{this.renderCartGames()}</div>
          {this.props.user.cartDetail ? (
            this.props.user.cartDetail.length !== 0 ? (
              <div className="total-price">
                <div
                  style={{
                    fontSize: '11px',
                    textTransform: 'none',
                    color: 'gray',
                    marginTop: '3px'
                  }}
                >
                  All prices include VAT if applicable
                </div>
                <div>
                  Order total: <span>{this.state.total}</span>
                </div>
              </div>
            ) : null
          ) : null}
        </div>
        {this.props.user.cartDetail ? (
          this.props.user.cartDetail.length !== 0 ? (
            <div className="section-2">
              <header className="module-header" style={{ fontSize: '14px' }}>
                Info
              </header>
              <div
                className="module-payment"
                style={{ padding: '20px 15px', textTransform: 'none' }}
              >
                <div>
                  <p className="info-checkout__text">
                    If you want to test PayPal's payment workflow click on the
                    button below and use the following credentials
                  </p>
                  <div className="info-checkout__wrapper">
                    <span
                      className="info-checkout__span"
                      style={{ padding: '10px 22.6px' }}
                    >
                      Email
                    </span>
                    <p className="info-checkout__email">
                      gokutra4-buyer@gmail.com
                    </p>
                  </div>
                  <div
                    className="info-checkout__wrapper"
                    style={{ margin: '0px' }}
                  >
                    <span
                      className="info-checkout__span"
                      style={{ padding: '10px' }}
                    >
                      Password
                    </span>
                    <p className="info-checkout__password">test1234</p>
                  </div>
                </div>
              </div>
              <header className="module-header" style={{ fontSize: '14px' }}>
                Your payment
              </header>
              <div className="module-payment">
                <strong className="module-summary">{this.state.total}</strong>
                <Paypal
                  toPay={Number(this.state.total)}
                  transactionError={data => this.transactionError(data)}
                  transactionCanceled={data => this.transactionCanceled(data)}
                  onSuccess={data => this.transactionSuccess(data)}
                />
              </div>
            </div>
          ) : null
        ) : null}
      </div>
    );
  }
}

export default UserCheckout;
