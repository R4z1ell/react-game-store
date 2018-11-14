import React from 'react';

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

  return (
    <div className="product-images__container">
      <div className="product-images__title">{props.title}</div>
      <div className="product-images__reviews">
        <h4>Overall user reviews</h4>
        <p>
          Extremely positive<span>(15293)</span>
        </p>
      </div>
      <div className="product-images__genres-container">
        {renderGenres(props.genres)}
      </div>
      <div className="product-images__screenshots-container">
        {renderImages(props.images)}
      </div>
    </div>
  );
};

export default ProductImages;
