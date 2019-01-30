import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import './home_carousel.scss';
import './slider.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faEuroSign } from '@fortawesome/free-solid-svg-icons';
import { FaWindows } from 'react-icons/fa';

import MyButton from '../../../components/utils/button/button';

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
    autoplay: false,
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
          <Link to={`/game/${game.title}`} key={i}>
            <div
              style={{
                background: `linear-gradient(180deg,transparent 0,rgba(0,0,0,.6)),url(${
                  game.images.background
                })`,
                height: '490px'
              }}
            >
              <div className="container">
                <div className="gamme__above--logo">
                  {game.images.logo ? (
                    <img src={`${game.images.logo}`} alt="logo" />
                  ) : null}
                </div>
                <div className="game__above">
                  <FaWindows
                    fill="#999"
                    className="game__above--windows"
                    size="0.8em"
                  />
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="game__above--circle"
                  />
                  <span>Now available</span>
                </div>
                <div className="game__title">{game.title}</div>
                <div className="game__action">
                  <div className="game__price">
                    <FontAwesomeIcon icon={faEuroSign} />
                    {game.prices.basePrice / 100}
                  </div>
                  <MyButton type="add_to_cart_link" />
                </div>
              </div>
            </div>
          </Link>
        ))
      : null;
  return (
    <div>
      <Slider {...settings}>{generateGameSlides()}</Slider>
    </div>
  );
};

export default HomeCarousel;
