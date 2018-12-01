import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import './home_sliders.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEuroSign } from '@fortawesome/free-solid-svg-icons';

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'transparent',
        left: '14px'
      }}
      onClick={onClick}
    >
      <svg
        viewBox="0 0 15 24"
        width="100%"
        height="100%"
        fill="#fff"
        className="prev-arrow"
      >
        <path d="M0 21.16L9.16 12 0 2.82 2.82 0l12 12-12 12z" />
      </svg>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'transparent',
        right: '15px'
      }}
      onClick={onClick}
    >
      <svg viewBox="0 0 15 24" width="100%" height="100%" fill="#fff">
        <path d="M0 21.16L9.16 12 0 2.82 2.82 0l12 12-12 12z" />
      </svg>
    </div>
  );
}

const HomeSliders = props => {
  const settingOne = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: false,
    autoplaySpeed: 3000,
    appendDots: dots => (
      <div
        style={{
          bottom: '-80px'
        }}
      >
        <ul className="featured__dots">{dots}</ul>
      </div>
    )
  };

  const settingTwo = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    appendDots: dots => (
      <div
        style={{
          bottom: '-32px'
        }}
      >
        <ul className="featured__dots">{dots}</ul>
      </div>
    )
  };

  const generateFeaturedSlides = () =>
    props.games
      ? props.games.map((game, i) => (
          <Link to={`/game/${game.title}`} key={i}>
            <div
              style={{
                background: `url(${game.images.mobile}) no-repeat`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '353px',
                width: '722px'
              }}
            />
            <div className="featured-detail">
              <img
                src="/images/windows.png"
                alt="window-logo"
                className="featured-detail__image"
              />
              <div className="featured-detail__title">{game.title}</div>
              <div className="featured-detail__price">
                <FontAwesomeIcon icon={faEuroSign} />
                {game.prices.basePrice / 100}
              </div>
            </div>
          </Link>
        ))
      : null;

  const generateDealsSlides = () =>
    props.games
      ? props.games.map((game, i) => (
          <Link to={`/game/${game.title}`} key={i}>
            <div
              style={{
                background: `url(${game.images.mobile}) no-repeat`,
                backgroundPosition: 'top',
                backgroundSize: '125% 74%',
                height: '400px',
                width: '340px'
              }}
            />
            <div className="purchase-detail">
              <div className="purchase-detail__up">
                <div className="purchase-detail__title">{game.title}</div>
                <span className="purchase-detail__deal-title">
                  Today's deal
                </span>
              </div>
              <div className="purchase-detail__bottom">
                <div className="purchase-detail__bottom-left">
                  <span className="purchase-detail__time-left ">Time Left</span>
                  <span className="purchase-detail__counter">3.19:17:35</span>
                </div>
                <div className="purchase-detail__bottom-right">
                  <FontAwesomeIcon icon={faEuroSign} />
                  {game.prices.basePrice / 100}
                </div>
              </div>
            </div>
          </Link>
        ))
      : null;

  return (
    <div className="page-section">
      <div className="page-section__left">
        <h3 className="page-section__title">Featured</h3>
        <Slider {...settingOne} className="featured__container">
          {generateFeaturedSlides()}
        </Slider>
      </div>
      <div className="page-section__right">
        <h3 className="page-section__title">Special Deals</h3>
        <Slider {...settingTwo} className="deals__container">
          {generateDealsSlides()}
        </Slider>
      </div>
    </div>
  );
};

export default HomeSliders;
