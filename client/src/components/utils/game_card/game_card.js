import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './game_card.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEuroSign,
  faHeart,
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';
import { FaWindows, FaShoppingCart } from 'react-icons/fa';

class GameCard extends Component {
  state = {
    inCart: false,
    wishlisted: false,
    upcoming: false
  };

  render() {
    return this.props.grid ? (
      <Link to={`/game/${this.props.title}`}>
        <div className="game-card">
          <div className="game-card__cover">
            <img src={this.props.images.card} alt="cover" />
            <div className="game-card__labels">
              {this.state.inCart ? (
                <span className="game-card__label game-card__label--in-cart">
                  <FaShoppingCart
                    fill="#fff"
                    size="1em"
                    className="game-card__label-icon"
                  />
                  in cart
                </span>
              ) : null}
              {this.state.wishlisted ? (
                <span className="game-card__label game-card__label--is-wishlisted">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="game-card__label-icon"
                  />
                  wishlisted
                </span>
              ) : null}
              {this.state.upcoming ? (
                <span className="game-card__label game-card__label--is-upcoming">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="game-card__label-icon"
                  />
                  soon
                </span>
              ) : null}
            </div>
          </div>
          <div className="game-card__info">
            <div className="game-card__platform">
              <FaWindows
                fill="#999"
                size="0.8em"
                className="game-card__windows"
              />
            </div>
            <div className="game-card__buy-block">
              <div className="game-card__prices">
                <FontAwesomeIcon icon={faEuroSign} />
                {this.props.prices.basePrice / 100}
              </div>
              <button className="game-card__button">
                <svg
                  viewBox="0 0 16 13"
                  width="100%"
                  height="100%"
                  className="game-card__button-image"
                >
                  <g id="button-add-to-cart_Symbols" fill="none">
                    <g
                      id="button-add-to-cart_Game-/-overlay"
                      transform="translate(-249.000000, -201.000000)"
                      fill="#FFFFFF"
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
      </Link>
    ) : (
      <div className="product-tile product-tile--list">
        <Link
          to={`/game/${this.props.title}`}
          className="product-tile__content"
        >
          <div className="product-tile__cover">
            <img
              src={this.props.images.card}
              alt="cover"
              className="product-tile__cover-img"
            />
          </div>
          <div className="product-tile__title">
            {this.props.title}
            <div className="product-tile__platform">
              <FaWindows
                fill="#999"
                size="0.9em"
                className="product-tile__windows"
              />
            </div>
          </div>
          <div className="product-tile__info">
            <div className="product-tile__buy-block">
              <div className="product-tile__prices">
                {/* <span className="product-tile__discount"></span> */}
                <div className="product-tile__prices-inner">
                  <span className="product-tile__price-discounted">
                    <FontAwesomeIcon icon={faEuroSign} />
                    {this.props.prices.basePrice / 100}
                  </span>
                </div>
              </div>
              <button className="product-tile__button">
                <svg
                  viewBox="0 0 16 13"
                  width="100%"
                  height="100%"
                  className="product-tile__button-image"
                >
                  <g id="button-add-to-cart_Symbols" fill="none">
                    <g
                      id="button-add-to-cart_Game-/-overlay"
                      transform="translate(-249.000000, -201.000000)"
                      fill="#FFFFFF"
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
        </Link>
      </div>
    );
  }
}

export default GameCard;
