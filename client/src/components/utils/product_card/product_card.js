import React, { Component } from 'react';

import './product_card.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEuroSign } from '@fortawesome/free-solid-svg-icons';

class ProductCard extends Component {
  state = {
    isHovered: false
  };

  handleHover = () => {
    this.setState({ isHovered: !this.state.isHovered });
  };

  someFn = () => {
    this.props.callbackFromParent(this.props.title);
  };

  render() {
    const productClass = this.state.isHovered
      ? 'product-card product-card--active'
      : 'product-card';
    return (
      <div
        className={productClass}
        onMouseEnter={() => {
          this.handleHover();
          this.someFn();
        }}
        onMouseLeave={this.handleHover}
      >
        <div className="product-card__cover">
          <img src={this.props.images.card} alt="cover" />
        </div>
        <div className="product-card__title-content">
          <div className="product-card__title">
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
            <svg
              aria-hidden="true"
              data-prefix="fab"
              data-icon="windows"
              className="svg-inline--fa fa-windows fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="#b4b6ba"
                d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"
              />
            </svg>
          </div>
          <div className="product-card__price">
            <FontAwesomeIcon icon={faEuroSign} />
            {this.props.prices.basePrice / 100}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
