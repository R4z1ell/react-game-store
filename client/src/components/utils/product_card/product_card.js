import React, { Component } from 'react';

import './product_card.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEuroSign, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FaWindows, FaShoppingCart } from 'react-icons/fa';

class ProductCard extends Component {
  state = {
    isHovered: false
  };

  handleHover = () => {
    this.setState({ isHovered: !this.state.isHovered });
  };

  sendPropsToParent = () => {
    this.props.callbackFromParent(
      this.props.title,
      this.props.genres,
      this.props.screenshots
    );
  };

  render() {
    const productClass = this.state.isHovered
      ? 'product-card product-card--active'
      : 'product-card';

    const discountedPrice = Number(
      this.props.prices.basePrice / 100 -
        (this.props.prices.basePrice / 10000) * this.props.prices.discount
    ).toFixed(2);

    return (
      <div
        className={productClass}
        onMouseEnter={() => {
          this.handleHover();
          this.sendPropsToParent();
        }}
        onMouseLeave={this.handleHover}
      >
        <div className="product-card__cover">
          <img src={this.props.images.card} alt="cover" />
        </div>
        <div className="product-card__title-content">
          <div className="product-card__title">
            <div>
              <span>{this.props.title}</span>
              <div className="product-card__genres">
                {this.props.genres
                  ? this.props.genres.map((genre, i) => (
                      <div key={i} style={{ marginRight: '5px' }}>
                        {genre.name}{' '}
                        {i === this.props.genres.length - 1 ? '' : ','}
                      </div>
                    ))
                  : null}
              </div>
              {this.props.user.userData.cart.some(
                game => game.id === this.props._id
              ) ||
              this.props.user.userData.wishlist.some(
                game => game.id === this.props._id
              ) ? null : (
                <FaWindows
                  fill="#999"
                  size="0.8em"
                  className="product-card__windows"
                />
              )}
            </div>
            <div className="product-card__labels">
              {this.props.user.userData.cart.some(
                game => game.id === this.props._id
              ) ? (
                <div style={{ display: 'flex' }}>
                  <span className="product-card__label product-card__label--in-cart">
                    <FaShoppingCart
                      fill="#fff"
                      size="1em"
                      className="product-card__label-icon"
                    />
                    in cart
                  </span>
                  <FaWindows
                    fill="#999"
                    size="0.8em"
                    className="product-card__image"
                  />
                </div>
              ) : null}
              {this.props.user.userData.wishlist.some(
                game => game.id === this.props._id
              ) &&
              !this.props.user.userData.cart.some(
                game => game.id === this.props._id
              ) ? (
                <div style={{ display: 'flex' }}>
                  <span className="product-card__label product-card__label--is-wishlisted">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="product-card__label-icon"
                    />
                    wishlisted
                  </span>
                  <FaWindows
                    fill="#999"
                    size="0.8em"
                    className="product-card__image"
                  />
                </div>
              ) : null}
            </div>
          </div>
          <div className="product-card__buy-block">
            <div className="product-card__prices">
              {this.props.prices.discount ? (
                <span className="product-card__discount">
                  -{this.props.prices.discount}%
                </span>
              ) : null}
              <div className="product-card__prices-inner">
                {this.props.prices.discount ? (
                  <span className="product-card__base-price">
                    <FontAwesomeIcon icon={faEuroSign} />
                    {this.props.prices.basePrice / 100}
                  </span>
                ) : (
                  <span className="product-card__base-price no-discount">
                    <FontAwesomeIcon icon={faEuroSign} />
                    {this.props.prices.basePrice / 100}
                  </span>
                )}
                {this.props.prices.discount ? (
                  <span className="product-card__price-discounted">
                    <FontAwesomeIcon icon={faEuroSign} />
                    {discountedPrice}
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
