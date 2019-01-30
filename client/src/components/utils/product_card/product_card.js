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
            <button className="product-card__button">
              <svg
                viewBox="0 0 16 13"
                width="100%"
                height="100%"
                className="product-card__button-image"
              >
                <g fill="none">
                  <g
                    transform="translate(-249.000000, -201.000000)"
                    fill="#fff"
                  >
                    <path
                      d="M264.993119,203.582252 L263.994476,209.574145 C263.958676,209.815152 263.750896,210.000053 263.49993,210.000053 C263.498106,210.000102 260.166998,210.000102 253.506607,210.000053 C253.242571,210.000053 253.030598,209.805544 253.003016,209.555489 L252.058592,202.000053 L249.499997,202.000053 C249.223856,202.000053 249,201.776195 249,201.500053 C249,201.22391 249.223856,201.000053 249.499997,201.000053 L252.493348,201.000053 C252.744892,200.996406 252.96419,201.182618 252.996117,201.438035 C252.996332,201.439492 253.311414,203.960164 253.941364,209.000053 L263.076369,209.000053 L263.909698,204.000053 L263.424534,204.000053 C263.148393,204.000053 262.924537,203.776195 262.924537,203.500053 C262.924537,203.22391 263.148393,203.000053 263.424534,203.000053 L264.490505,203.000053 C264.494413,202.999983 264.54892,202.999983 264.654024,203.000053 C264.840411,203.026192 264.94132,203.143292 264.948475,203.279059 C264.993255,203.36976 265.011018,203.474858 264.993119,203.582252 Z M255.499969,214 C254.671547,214 253.999978,213.328427 253.999978,212.5 C253.999978,211.671573 254.671547,211 255.499969,211 C256.328392,211 256.999961,211.671573 256.999961,212.5 C256.999961,213.328427 256.328392,214 255.499969,214 Z M261.499936,214 C260.671513,214 259.999944,213.328427 259.999944,212.5 C259.999944,211.671573 260.671513,211 261.499936,211 C262.328358,211 262.999928,211.671573 262.999928,212.5 C262.999928,213.328427 262.328358,214 261.499936,214 Z M261.5,213 C261.776142,213 262,212.776142 262,212.5 C262,212.223858 261.776142,212 261.5,212 C261.223858,212 261,212.223858 261,212.5 C261,212.776142 261.223858,213 261.5,213 Z M255.5,213 C255.223858,213 255,212.776142 255,212.5 C255,212.223858 255.223858,212 255.5,212 C255.776142,212 256,212.223858 256,212.5 C256,212.776142 255.776142,213 255.5,213 Z M257.999955,203 L257.999955,201 L258.99995,201 L258.99995,203 L260.999939,203 L260.999939,204 L258.99995,204 L258.99995,206 L257.999955,206 L257.999955,204 L255.999967,204 L255.999967,203 L257.999955,203 Z"
                      id="button-add-to-cart_Combined-Shape"
                      transform="translate(257.000000, 207.500000) scale(-1, 1) translate(-257.000000, -207.500000) "
                    />
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
