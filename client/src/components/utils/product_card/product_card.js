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

  render() {
    const productClass = this.state.isHovered
      ? 'product-card__title-content product-card--active'
      : 'product-card__title-content';
    return (
      <div
        className="product-card"
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
      >
        <div className="product-card__cover">
          <img src={this.props.images.card} alt="cover" />
        </div>
        <div className={productClass}>
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
            <img src="/images/windows.png" alt="window-logo" />
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
