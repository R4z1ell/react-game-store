import React from 'react';

import { reviews } from '../../utils/Form/fixed_categories';

import './product_images.scss';

const ProductImages = props => {
  const renderGenres = () =>
    props.genres
      ? props.genres.map((genre, i) => (
          <div key={i} className="product-images__genre">
            {genre.name}
          </div>
        ))
      : null;

  const renderImages = () =>
    props.images
      ? props.images.map((image, i) =>
          i < 4 ? (
            <img
              key={i}
              src={image.formatted_images[0].image_url}
              alt="images"
              className="product-images__screenshot"
            />
          ) : null
        )
      : null;

  const renderGameRating = () => {
    if (props.title) {
      const result = reviews.filter(elem => elem.gameTitle === props.title);
      return result[0].rating;
    } else {
      return 'Extremely positive';
    }
  };

  const renderGameReviewCount = () => {
    if (props.title) {
      const result = reviews.filter(elem => elem.gameTitle === props.title);
      return result[0].reviewCount;
    } else {
      return '12320';
    }
  };

  const renderGameImg = () =>
    props.games
      ? props.games[0].screenshots.map((image, i) =>
          i < 4 ? (
            <img
              key={i}
              src={image.formatted_images[0].image_url}
              alt="images"
              className="product-images__screenshot"
            />
          ) : null
        )
      : null;

  const renderGameGenres = () =>
    props.games
      ? props.games[0].genres.map((genre, i) => (
          <div key={i} className="product-images__genre">
            {genre.name}
          </div>
        ))
      : null;

  return (
    <div className="product-images__container">
      <div className="product-images__title">
        {props.games && !props.title ? props.games[0].title : props.title}
      </div>
      <div className="product-images__reviews">
        <h4>Overall user reviews</h4>
        <p>
          {renderGameRating()}
          <span>({renderGameReviewCount()})</span>
        </p>
      </div>
      <div className="product-images__genres-container">
        {props.genres ? renderGenres(props.genres) : renderGameGenres()}
      </div>
      <div className="product-images__screenshots-container">
        {renderImages(props.images)}
        {props.images ? null : renderGameImg()}
      </div>
    </div>
  );
};

export default ProductImages;
