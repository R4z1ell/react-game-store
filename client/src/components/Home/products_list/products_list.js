import React from 'react';

import ProductCard from '../../utils/product_card/product_card';

const ProductsList = props => {
  const renderCards = () =>
    props.list
      ? props.list.map((card, i) => <ProductCard key={i} {...card} />)
      : null;

  return (
    <div style={{ maxWidth: '1100px', margin: '110px auto' }}>
      {renderCards(props.list)}
    </div>
  );
};

export default ProductsList;
