import React, { Component } from 'react';

import './product_actions.scss';

import MyButton from '../button/button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class ProductActions extends Component {
  render() {
    return (
      <div className="product-actions">
        <div className="product-actions-price">
          <span className="product-actions-price__discount">-33%</span>
          <span className="product-actions-price__base-amount">€ 29.99</span>
          <span className="product-actions-price__final-amount">€ 20.09</span>
        </div>
        <div className="product-actions__cart-button">
          <MyButton type="add_to_cart_link" />
        </div>
        <div className="product-actions__wishlist-button">
          {/* <FontAwesomeIcon icon={faHeart} /> */}
          <svg
            viewBox="0 0 25.1 25.1"
            id="heart-empty"
            width="100%"
            height="100%"
          >
            <path
              d="M17.7,18.7c-2.5,2.4-4.9,5.2-5.2,6.4c-0.3-1.2-2.5-3.9-5.2-6.3C4.6,16.3,0,14.5,0,8.9
              C0.1-1.1,9.9-2.5,12.5,4.1C14.8-2.5,25-1.2,25.1,8.9C25.1,14.4,20.4,16.1,17.7,18.7z M12.5,6.8C8.4-0.9,2.3,1.7,2,8.8 c-0.2,4.2,3.7,5.7,6,7.7s4.2,4.4,4.5,5.3c0.2-0.9,2.5-3.8,4.6-5.6c2.3-2,6.2-3.3,5.9-7.5C22.5,1.9,17.1-0.9,12.5,6.8z"
            />
          </svg>
          <p>Wishlist it</p>
        </div>
      </div>
    );
  }
}

export default ProductActions;
