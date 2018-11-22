import React from 'react';

import './button.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const MyButton = props => {
  const buttons = () => {
    let template = '';

    switch (props.type) {
      case 'add_to_cart_link':
        template = (
          <div
            className="add_to_cart_link"
            onClick={() => {
              props.runAction();
            }}
          >
            <div className="button__content">
              <div>
                <FontAwesomeIcon icon={faCartPlus} className="button__icon" />
              </div>
              <div className="button__text">Add to cart</div>
            </div>
          </div>
        );
        break;
      default:
        template = '';
    }
    return template;
  };

  return <div className="my_link">{buttons()}</div>;
};

export default MyButton;
