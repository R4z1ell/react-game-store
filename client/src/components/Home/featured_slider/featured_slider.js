import React from 'react';
import Slider from 'react-slick';

import style from './featured_slider.module.scss';
import './slider.css';

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

const FeaturedSlider = props => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
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
        <ul className={style.featured__dots}>{dots}</ul>
      </div>
    )
  };

  const generateFeaturedSlides = () =>
    props.games
      ? props.games.map((game, i) => (
          <div key={i}>
            <div
              style={{
                background: `url(${game.images.mobile}) no-repeat`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '353px',
                width: '722px'
              }}
            >
              <div className={style.container} />
            </div>
            <div className={style.container__bottom}>
              <img src="/images/windows.png" alt="window-logo" />
              <div className={style.game__title}>{game.title}</div>
              <div className={style.game__price}>
                <FontAwesomeIcon icon={faEuroSign} />
                {game.prices.basePrice / 100}
              </div>
            </div>
          </div>
        ))
      : null;
  return (
    <div className={style.container}>
      <div className={style.container__left}>
        <h3>FEATURED</h3>
        <Slider {...settings} className={style.container__slider}>
          {generateFeaturedSlides()}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedSlider;
