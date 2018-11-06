import React from 'react';

import style from './button.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const MyButton = props => {
  const buttons = () => {
    let template = '';

    switch (props.type) {
      case 'add_to_cart_link':
        template = (
          <div
            className={style.add_to_cart_link}
            onClick={() => {
              props.runAction();
            }}
          >
            <div className={style.button__content}>
              <div>
                <FontAwesomeIcon
                  icon={faCartPlus}
                  className={style.button__icon}
                />
              </div>
              <div className={style.button__text}>Add to cart</div>
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
