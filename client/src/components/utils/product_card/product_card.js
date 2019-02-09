import React, { Component } from 'react';

import './product_card.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEuroSign } from '@fortawesome/free-solid-svg-icons';
import { FaWindows } from 'react-icons/fa';

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
            <FaWindows
              fill="#999"
              size="0.8em"
              className="product-card__image"
            />
          </div>
          <div className="product-card__buy-block">
            <div className="product-card__prices">
              <FontAwesomeIcon icon={faEuroSign} />
              {this.props.prices.basePrice / 100}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
