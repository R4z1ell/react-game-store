import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './user_wishlist.scss';

import {
  getWishlistItems,
  addToCart,
  removeFromWishlist,
  addToWishlist,
  clearWishlistDetail
} from '../../../store/actions/user_actions';
import { FaWindows, FaTimes, FaHeart } from 'react-icons/fa';
import { getOverlayStatus } from '../../../store/actions/site_actions';

class UserWishlist extends Component {
  state = {
    gameId: [],
    emptyMessage: false
  };

  componentDidMount() {
    let cartItems = [];
    let user = this.props.user;

    if (user.userData.wishlist.length === 0) {
      this.setState({ emptyMessage: true }, () =>
        this.props.dispatch(clearWishlistDetail())
      );
    }

    if (user.userData.wishlist) {
      if (user.userData.wishlist.length > 0) {
        user.userData.wishlist.forEach(item => {
          cartItems.push(item.id);
        });
        this.props.dispatch(getWishlistItems(cartItems));
      }
    }
  }

  sendToCart = id => {
    if (this.props.user.userData.isAuth) {
      this.props.dispatch(addToCart(id));
    }
    if (!this.props.user.userData.isAuth) {
      this.props.dispatch(getOverlayStatus(true, true));
    }
  };

  sendToWishlist = id => {
    if (this.props.user.userData.isAuth) {
      this.props.dispatch(addToWishlist(id));
      let array = [...this.state.gameId];
      let index = this.state.gameId.indexOf(id);
      array.splice(index, 1);
      this.setState({
        gameId: array
      });
    }
    if (!this.props.user.userData.isAuth) {
      this.props.dispatch(getOverlayStatus(true, true));
    }
  };

  removeFromWishlist = id => {
    this.props.dispatch(removeFromWishlist(id));
  };

  storeGameId = id => {
    let gameId = [...this.state.gameId];
    gameId.push(id);

    this.setState({
      gameId
    });
    this.removeFromWishlist(id);
  };

  generateLinks = () =>
    this.props.user.wishlistDetail
      ? this.props.user.wishlistDetail.map((game, i) => {
          const discountedPrice = Number(
            game.prices.basePrice / 100 -
              (game.prices.basePrice / 10000) * game.prices.discount
          ).toFixed(2);
          const rowLinkClass =
            this.state.gameId.some(elem => elem === game._id) &&
            !this.props.user.userData.wishlist.some(
              elem => elem.id === game._id
            )
              ? '0.5'
              : '1';

          return (
            <div className="wishlist-row-wrapper" key={i}>
              <div className="wishlist-row">
                <Link
                  to={`/game/${game.title}`}
                  className="wishlist-row__link"
                  style={{ opacity: rowLinkClass }}
                >
                  <div className="wishlist-row__picture">
                    <img
                      src={game.images.card}
                      alt="wishlist_img"
                      className="wishlist-row__img"
                    />
                  </div>
                  <div className="wishlist-row__text">
                    <div className="wishlist-row__content">
                      <div className="wishlist-row__content-in">
                        <div className="wishlist-row__title">
                          <span className="wishlist-row__title-text">
                            {game.title}
                          </span>
                        </div>
                        <div className="wishlist-row__info">
                          <span className="wishlist-row__windows">
                            <FaWindows
                              fill="#aeaeae"
                              size="1em"
                              className="wishlist-row__windows-icon"
                            />
                          </span>
                          <span className="wishlist-row__genre">
                            {game.genres[0].name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {game.prices.discount ? (
                    <div className="wishlist-row__discount">
                      <span className="price-text--discount">
                        -{game.prices.discount}%
                      </span>
                    </div>
                  ) : null}
                </Link>
                <div className="wishlist-row__action">
                  {this.props.user.userData.wishlist.some(
                    elem => elem.id === game._id
                  ) ? (
                    <span
                      className="wishlist-row__btn-remove"
                      onClick={() => this.storeGameId(game._id)}
                    >
                      <FaTimes
                        fill="#595959"
                        size="0.8em"
                        className="wishlist-row__cross-icon"
                      />
                    </span>
                  ) : (
                    <span
                      className="wishlist-row__btn-remove"
                      style={{ opacity: '0.5' }}
                      onClick={() => this.sendToWishlist(game._id)}
                    >
                      <FaHeart
                        fill="#595959"
                        size="0.8em"
                        className="wishlist-row__heart-icon"
                      />
                    </span>
                  )}
                </div>
                <div className="wishlist-row__price">
                  <div className="price-btn">
                    {this.props.user.userData.cart.some(
                      elem => elem.id === game._id
                    ) ? (
                      <svg
                        preserveAspectRatio="xMidYMax meet"
                        viewBox="0 0 17 16.1"
                        className="price-btn__in-cart"
                        fill="#686868"
                      >
                        <path
                          d="M16.8,1.5l-1.8,0L13,11l-1,1l-9,0l-1.1-1L0,3l1.5,0l2.1,7.6h7.7L13.4,1l1-1L17,0L16.8,1.5z
                          M4.6,8.2V7.7h5.8v0.5L4.6,8.2L4.6,8.2z M4.3,5.6h6.2l0,0.5l-6.2,0V5.6L4.3,5.6z M3.5,4l0-0.4h7.9l0,0.4L3.5,4z M4.5,13
                          C5.3,13,6,13.6,6,14.4c0,0,0,0.1,0,0.1c0,0.9-0.7,1.6-1.5,1.6c0,0,0,0,0,0C3.7,16,3,15.4,3,14.6c0,0,0-0.1,0-0.1
                          c0-0.8,0.5-1.4,1.3-1.5C4.4,13,4.4,13,4.5,13L4.5,13z M10.4,13c0.8-0.1,1.6,0.6,1.6,1.4c0,0,0,0,0,0c0,0.9-0.7,1.6-1.6,1.6
                          c-0.8,0-1.5-0.7-1.5-1.5C8.9,13.7,9.6,13,10.4,13L10.4,13L10.4,13z"
                        />
                      </svg>
                    ) : (
                      <span
                        className="price-btn__text"
                        onClick={() => this.sendToCart(game._id)}
                      >
                        <span className="price-btn__amount">
                          {game.prices.discount
                            ? discountedPrice
                            : game.prices.basePrice / 100}
                        </span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })
      : null;

  render() {
    return (
      <div className="wishlist__container">
        {!this.state.emptyMessage ? (
          <div className="wishlist__header">
            Wishlisted titles &nbsp;
            {this.props.user.userData.wishlist.length !== 0
              ? `(${this.props.user.userData.wishlist.length})`
              : null}
          </div>
        ) : null}
        <div className="wishlist__products">{this.generateLinks()}</div>
        {this.state.emptyMessage ? (
          <div className="empty-message">
            <div className="empty-message__big">
              Your wishlist is currently empty
            </div>
            <div className="empty-message__small">
              Explore our &nbsp;
              <Link to={'/games'} className="un">
                catalog of carefully selected games
              </Link>
              &nbsp; and we are pretty sure you will find many titles you wish
              you had in your collection. :)
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(UserWishlist);
