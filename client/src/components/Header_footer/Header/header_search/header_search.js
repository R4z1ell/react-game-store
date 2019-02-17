import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';

import './header_search.scss';

import { FaWindows } from 'react-icons/fa';
import { addToCart } from '../../../../store/actions/user_actions';
import { getOverlayStatus } from '../../../../store/actions/site_actions';

class HeaderSearch extends Component {
  state = {
    linkClickStatus: false
  };

  linkIsClicked = () => {
    this.setState(
      {
        linkClickStatus: true
      },
      () => this.props.linkClickStatus(this.state.linkClickStatus)
    );
  };

  sendToCart = id => {
    if (this.props.user.userData.isAuth) {
      this.props.dispatch(addToCart(id));
    }
    if (!this.props.user.userData.isAuth) {
      this.props.dispatch(getOverlayStatus(true, true));
    }
  };

  renderSearchElements = () =>
    this.props.searchResult
      ? this.props.searchResult.map((game, i) => {
          const discountedPrice = Number(
            game.prices.basePrice / 100 -
              (game.prices.basePrice / 10000) * game.prices.discount
          ).toFixed(2);
          return (
            <div key={i} className="menu-product menu-search__result">
              <div className="menu-product__price-btn menu-product__price-btn--active">
                <span className="menu-product__price-btn-text">
                  {this.props.user.userData.cart.some(
                    elem => elem.id === game._id
                  ) ? (
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 17 16.1"
                      className="menu-product__in-cart"
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
                      className="product-state__price"
                      onClick={() => this.sendToCart(game._id)}
                    >
                      {game.prices.discount
                        ? discountedPrice
                        : game.prices.basePrice / 100}
                    </span>
                  )}
                </span>
              </div>
              <Link
                to={`/game/${game.title}`}
                className="menu-product__link"
                onClick={() => this.linkIsClicked()}
              >
                <img
                  src={game.images.card}
                  alt="product"
                  className="menu-product__image"
                />
                <div className="menu-product__content">
                  <div className="menu-product__content-in">
                    <div className="menu-product__title">
                      <span>{game.title}</span>
                    </div>
                    <div className="menu-product__details">
                      {moment(game.release_date).format('YYYY')},{' '}
                      {game.developer}, {game.publisher}
                    </div>
                    <div className="menu-product__windows">
                      <FaWindows
                        fill="#999"
                        size="0.9em"
                        className="product-tile__windows"
                      />
                    </div>
                    {game.prices.discount ? (
                      <div className="menu-product__discount">
                        <span className="menu-product__discount-text">
                          -{game.prices.discount}%
                        </span>
                      </div>
                    ) : null}
                  </div>
                </div>
              </Link>
            </div>
          );
        })
      : null;

  render() {
    return (
      <div className="header-search__container">
        {this.props.errorTab && this.props.searchResult.length === 0 ? (
          <div className="header-search__no-results">
            <div className="header-search-empty">
              <div className="header-search-empty__header">
                <svg
                  preserveAspectRatio="xMidYMax meet"
                  viewBox="0 0 13.8 15"
                  id="icon-search2"
                  width="100%"
                  height="100%"
                  className="header-search-empty__header-icon"
                >
                  <path
                    d="M13.8,13.7L12.2,15L9,11.1C8.1,11.7,7.1,12,6,12c-3.2,0.1-5.9-2.4-6-5.6C0,6.3,0,6.1,0,6
                c0-3.3,2.7-6,6-6s6,2.7,6,6c0,1.5-0.6,3-1.6,4.1L13.8,13.7z M6,1.6c-2.3-0.1-4.3,1.6-4.5,4c0,0.1,0,0.3,0,0.4c0,2.5,1.9,4.5,4.4,4.6
                s4.5-1.9,4.6-4.4C10.5,3.7,8.6,1.6,6,1.6C6.1,1.6,6,1.6,6,1.6z"
                  />
                </svg>
                No results found
              </div>
              <hr className="header-search-empty__line" />
              <div className="header-search-empty__description">
                Try adjusting the terms of your search, you can search by game
                titles, publishers, and developers.
              </div>
              <Link to="/games" className="header-search-empty__btn">
                Browse all games
              </Link>
            </div>
          </div>
        ) : null}
        {this.props.searchResult !== [] ? (
          <div className="header-search__results">
            <div className="header-search__results-list" id="style-2">
              <div className="custom-scrollbar__wrapper">
                <div className="custom-scrollbar__content">
                  <div className="header-search__results-rows">
                    {this.renderSearchElements()}
                  </div>
                </div>
              </div>
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

export default connect(mapStateToProps)(HeaderSearch);
