import React from 'react';

import './order_product.scss';

const OrderProduct = props => {
  const discountedPrice = Number(
    props.basePrice / 100 - (props.basePrice / 10000) * props.discount
  ).toFixed(2);

  return (
    <React.Fragment>
      <div className="order-item__products">
        <div className="order-row order-product">
          <div className="order-row__link">
            <div className="order-row__picture">
              <img src={props.image} alt="product" className="order-row__img" />
              <span className="order-title__text">{props.title}</span>
            </div>
            <div>
              {props.discount ? (
                <React.Fragment>
                  <span className="order-row__base-price order-row__old-price">
                    {props.basePrice / 100}
                  </span>
                  <span className="order-row__discounted-price">
                    {discountedPrice}
                  </span>
                </React.Fragment>
              ) : (
                <span className="order-row__base-price">
                  {props.basePrice / 100}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OrderProduct;
