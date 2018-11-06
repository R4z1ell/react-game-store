import React from 'react';
import Slider from 'react-slick';

import style from './home_carousel.module.scss';
import './slider.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'transparent' }}
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
      style={{ ...style, display: 'block', background: 'transparent' }}
      onClick={onClick}
    >
      <svg viewBox="0 0 15 24" width="100%" height="100%" fill="#fff">
        <path d="M0 21.16L9.16 12 0 2.82 2.82 0l12 12-12 12z" />
      </svg>
    </div>
  );
}

const HomeCarousel = props => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: i => (
      <div
        style={{
          position: 'relative',
          display: 'block',
          overflow: 'hidden',
          width: '41px',
          height: '3px',
          backgroundColor: 'hsla(0,0%,100%,.2)'
        }}
      />
    )
  };

  const generateGameSlides = () =>
    props.games
      ? props.games.map((game, i) => (
          <div key={i}>
            <div
              style={{
                background: `linear-gradient(180deg,transparent 0,rgba(0,0,0,.6)),url(${
                  game.images.background
                })`,
                height: '490px'
              }}
            >
              <div className={style.container}>
                <div className={style.logo__container}>
                  {game.images.logo ? (
                    <img src={`${game.images.logo}`} alt="logo" />
                  ) : null}
                </div>
                <div className={style.game__above}>
                  <img src="/images/windows.png" alt="window-logo" />
                  <FontAwesomeIcon icon={faCircle} />
                  <span>Now available</span>
                </div>
                <div className={style.game__title}>{game.title}</div>
              </div>
            </div>
          </div>
        ))
      : null;
  return (
    <div>
      <Slider {...settings}>{generateGameSlides()}</Slider>
    </div>
  );
};

export default HomeCarousel;
