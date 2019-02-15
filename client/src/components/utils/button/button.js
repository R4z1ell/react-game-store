import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './button.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import { addToCart } from '../../../store/actions/user_actions';
import { getOverlayStatus } from '../../../store/actions/site_actions';

class MyButton extends Component {
  addGameToCart = id => {
    if (this.props.user.userData.isAuth) {
      if (
        !this.props.user.userData.cart.some(
          game => game.id === this.props.gameId
        )
      ) {
        this.props.dispatch(addToCart(id));
      }
    }
    if (!this.props.user.userData.isAuth) {
      this.props.dispatch(getOverlayStatus(true, true));
    }
  };

  buttons = () => {
    let template = '';

    switch (this.props.type) {
      case 'add_to_cart_link':
        template = (
          <div
            className="add_to_cart_link"
            onClick={() => this.addGameToCart(this.props.gameId)}
          >
            <div className="button__content">
              {this.props.user.userData.cart.some(
                game => game.id === this.props.gameId
              ) ? (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <svg
                    viewBox="0 0 16 14"
                    id="button-in-cart"
                    width="100%"
                    height="100%"
                    className="button__in-cart"
                  >
                    <g>
                      <g
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
                  <Link to={'/user/checkout'}>
                    <div className="button__text">Checkout now</div>
                  </Link>
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <FontAwesomeIcon icon={faCartPlus} className="button__icon" />
                  <div className="button__text">Add to cart</div>
                </div>
              )}
            </div>
          </div>
        );
        break;
      default:
        template = '';
    }
    return template;
  };

  render() {
    return (
      <div className="my_link" style={{ height: '0px' }}>
        {this.buttons()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(MyButton);
