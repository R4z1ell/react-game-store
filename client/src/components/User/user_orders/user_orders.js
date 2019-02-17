import React from 'react';

import SettingsLayout from '../settings_layout/settings_layout';
import OrderHeader from './order_header/order_header';
import OrderProduct from './order_product/order_product';

const UserOrders = props => {
  const porderValues = [];
  props.user.userData.history.forEach(game => porderValues.push(game.porder));
  let uniqueValues = [...new Set(porderValues)];

  let filteredArray = [];
  for (let key of uniqueValues) {
    let filterByPorder = props.user.userData.history.filter(
      game => game.porder === key
    );
    filteredArray.push(filterByPorder);
  }

  const renderHeader = () =>
    filteredArray.map((value, i) => (
      <OrderHeader
        porder={value[0].porder}
        dateOfPurchase={value[0].dateOfPurchase}
        key={i}
      >
        {value.map((elem, i) => (
          <OrderProduct
            image={elem.images.card}
            title={elem.title}
            basePrice={elem.prices.basePrice}
            discount={elem.prices.discount}
            key={i}
          />
        ))}
      </OrderHeader>
    ));

  return <SettingsLayout>{renderHeader()}</SettingsLayout>;
};

export default UserOrders;
