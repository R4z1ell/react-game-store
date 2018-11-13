import React, { Component } from 'react';

import './products_list.scss';

import ProductCard from '../../utils/product_card/product_card';
import ProductImages from '../../utils/product_images/product_images';

class ProductsList extends Component {
  state = {
    gameInfo: null
  };

  myCallback = dataFromChild => {
    this.setState({ gameInfo: dataFromChild });
  };

  renderCards = () =>
    this.props.list
      ? this.props.list.map(card => (
          <ProductCard
            key={card.title}
            {...card}
            callbackFromParent={this.myCallback}
          />
        ))
      : null;

  render() {
    console.log(this.props.list);
    return (
      <div className="products-list__container">
        <div>{this.renderCards(this.props.list)}</div>
        <div>
          <ProductImages
            title={this.state.gameInfo !== null ? this.state.gameInfo : ''}
          />
        </div>
      </div>
    );
  }
}

export default ProductsList;
