import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './products_list.scss';

import ProductCard from '../../utils/product_card/product_card';
import ProductImages from '../../utils/product_images/product_images';

class ProductsList extends Component {
  state = {
    gameTitle: null,
    gameGenres: null,
    gameImages: null
  };

  updateState = (title, genres, images) => {
    this.setState({ gameTitle: title, gameGenres: genres, gameImages: images });
  };

  renderCards = () =>
    this.props.list
      ? this.props.list.map(card => (
          <Link to={`/game/${card.title}`} key={card.title}>
            <ProductCard {...card} callbackFromParent={this.updateState} />
          </Link>
        ))
      : null;

  render() {
    return (
      <div className="products-list">
        <div className="products-list__tabs">
          <div className="products-list__tabs-wrapper">
            <div className="products-list__tabs-wrapper__popular">Popular</div>
            <div className="products-list__tabs-wrapper__new">New</div>
            <div className="products-list__tabs-wrapper__upcoming">
              Upcoming
            </div>
          </div>
        </div>
        <div className="products-list__container">
          <div>{this.renderCards(this.props.list)}</div>
          <div>
            <ProductImages
              title={this.state.gameTitle !== null ? this.state.gameTitle : ''}
              genres={
                this.state.gameGenres !== null ? this.state.gameGenres : ''
              }
              images={
                this.state.gameImages !== null ? this.state.gameImages : ''
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsList;
