import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './game_card.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEuroSign,
  faHeart,
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';
import { FaWindows, FaShoppingCart } from 'react-icons/fa';
import { addToCart } from '../../../store/actions/user_actions';
import { getOverlayStatus } from '../../../store/actions/site_actions';

class GameCard extends Component {
  state = {
    inCart: false,
    wishlisted: false,
    upcoming: false,
    isCartBtnClicked: false
  };

  sendToCart = () => {
    if (this.props.user.userData.isAuth) {
      this.props.dispatch(addToCart(this.props._id));
      this.setState({
        isCartBtnClicked: true,
        inCart: true
      });
    }
    if (!this.props.user.userData.isAuth) {
      this.props.dispatch(getOverlayStatus(true, true));
    }
  };

  componentDidMount() {
    if (this.props.user.userData) {
      if (this.props.user.userData.isAuth) {
        if (this.props.user.userData.cart.length !== 0) {
          const found = this.props.user.userData.cart.find(element => {
            return element.id === this.props._id;
          });

          if (found) {
            this.setState({
              inCart: true,
              isCartBtnClicked: true
            });
          }
        }
      }
      if (!this.props.user.userData.isAuth) {
        this.setState({
          inCart: false,
          isCartBtnClicked: false
        });
      }
    }
  }

  render() {
    const buttonClass = this.state.isCartBtnClicked
      ? 'game-card__button game-card__button--clicked'
      : 'game-card__button';

    return this.props.grid ? (
      <div style={{ position: 'relative' }} className="link-wrapper">
        <Link to={`/game/${this.props.title}`}>
          <div className="game-card">
            <div className="game-card__cover">
              <img src={this.props.images.card} alt="cover" />
              <div className="game-card__labels">
                {this.state.inCart && this.props.user.userData.isAuth ? (
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
          </div>
        </Link>
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
            <button className={buttonClass}>
              {!this.state.isCartBtnClicked && !this.state.inCart ? (
                <svg
                  viewBox="0 0 16 13"
                  width="100%"
                  height="100%"
                  className="game-card__button-image"
                  onClick={this.sendToCart}
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
              ) : (
                <svg
                  viewBox="0 0 16 14"
                  width="100%"
                  height="100%"
                  className="game-card__button-image"
                >
                  <g id="button-in-cart_Symbols" stroke="none" fill="none">
                    <g
                      id="button-in-cart_Game-/-overlay"
                      transform="translate(-249.000000, -200.000000)"
                      fill="#FFFFFF"
                    >
                      <path
                        d="M249.006881,203.582252 L250.005524,209.574145 C250.041324,209.815152 250.249104,210.000053 250.50007,210.000053 C250.501894,210.000102 253.833002,210.000102 260.493393,210.000053 C260.757429,210.000053 260.969402,209.805544 260.996984,209.555489 L261.941408,202.000053 L264.500003,202.000053 C264.776144,202.000053 265,201.776195 265,201.500053 C265,201.22391 264.776144,201.000053 264.500003,201.000053 L261.506652,201.000053 C261.255108,200.996406 261.03581,201.182618 261.003883,201.438035 C261.003668,201.439492 260.688586,203.960164 260.058636,209.000053 L250.923631,209.000053 L250.090302,204.000053 L250.575466,204.000053 C250.851607,204.000053 251.075463,203.776195 251.075463,203.500053 C251.075463,203.22391 250.851607,203.000053 250.575466,203.000053 L249.509495,203.000053 C249.505587,202.999983 249.45108,202.999983 249.345976,203.000053 C249.159589,203.026192 249.05868,203.143292 249.051525,203.279059 C249.006745,203.36976 248.988982,203.474858 249.006881,203.582252 Z M258.500031,214 C259.328453,214 260.000022,213.328427 260.000022,212.5 C260.000022,211.671573 259.328453,211 258.500031,211 C257.671608,211 257.000039,211.671573 257.000039,212.5 C257.000039,213.328427 257.671608,214 258.500031,214 Z M252.500064,214 C251.671642,214 251.000072,213.328427 251.000072,212.5 C251.000072,211.671573 251.671642,211 252.500064,211 C253.328487,211 254.000056,211.671573 254.000056,212.5 C254.000056,213.328427 253.328487,214 252.500064,214 Z M252.5,213 C252.776142,213 253,212.776142 253,212.5 C253,212.223858 252.776142,212 252.5,212 C252.223858,212 252,212.223858 252,212.5 C252,212.776142 252.223858,213 252.5,213 Z M258.5,213 C258.223858,213 258,212.776142 258,212.5 C258,212.223858 258.223858,212 258.5,212 C258.776142,212 259,212.223858 259,212.5 C259,212.776142 258.776142,213 258.5,213 Z M259.173136,200.658223 L259.903036,201.341777 L255.1605,206.40586 L252.634313,203.696697 L253.365687,203.01472 L255.162081,204.94123 L259.173136,200.658223 Z"
                        id="button-in-cart_Combined-Shape"
                      />
                    </g>
                  </g>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
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

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(GameCard);
