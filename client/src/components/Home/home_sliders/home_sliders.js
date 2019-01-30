import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import './home_sliders.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEuroSign } from '@fortawesome/free-solid-svg-icons';
import { FaWindows } from 'react-icons/fa';

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
              <FaWindows
                fill="#999"
                size="0.8em"
                className="featured-detail__image"
              />
              <div className="featured-detail__title">{game.title}</div>
              <div className="featured-detail__buy-block">
                <div className="featured-detail__prices">
                  <FontAwesomeIcon icon={faEuroSign} />
                  {game.prices.basePrice / 100}
                </div>
                <button className="featured-detail__button">
                  <svg
                    viewBox="0 0 16 13"
                    width="100%"
                    height="100%"
                    className="featured-detail__button-image"
                  >
                    <g fill="none">
                      <g
                        transform="translate(-249.000000, -201.000000)"
                        fill="#fff"
                      >
                        <path
                          d="M264.993119,203.582252 L263.994476,209.574145 C263.958676,209.815152 263.750896,210.000053 263.49993,210.000053 C263.498106,210.000102 260.166998,210.000102 253.506607,210.000053 C253.242571,210.000053 253.030598,209.805544 253.003016,209.555489 L252.058592,202.000053 L249.499997,202.000053 C249.223856,202.000053 249,201.776195 249,201.500053 C249,201.22391 249.223856,201.000053 249.499997,201.000053 L252.493348,201.000053 C252.744892,200.996406 252.96419,201.182618 252.996117,201.438035 C252.996332,201.439492 253.311414,203.960164 253.941364,209.000053 L263.076369,209.000053 L263.909698,204.000053 L263.424534,204.000053 C263.148393,204.000053 262.924537,203.776195 262.924537,203.500053 C262.924537,203.22391 263.148393,203.000053 263.424534,203.000053 L264.490505,203.000053 C264.494413,202.999983 264.54892,202.999983 264.654024,203.000053 C264.840411,203.026192 264.94132,203.143292 264.948475,203.279059 C264.993255,203.36976 265.011018,203.474858 264.993119,203.582252 Z M255.499969,214 C254.671547,214 253.999978,213.328427 253.999978,212.5 C253.999978,211.671573 254.671547,211 255.499969,211 C256.328392,211 256.999961,211.671573 256.999961,212.5 C256.999961,213.328427 256.328392,214 255.499969,214 Z M261.499936,214 C260.671513,214 259.999944,213.328427 259.999944,212.5 C259.999944,211.671573 260.671513,211 261.499936,211 C262.328358,211 262.999928,211.671573 262.999928,212.5 C262.999928,213.328427 262.328358,214 261.499936,214 Z M261.5,213 C261.776142,213 262,212.776142 262,212.5 C262,212.223858 261.776142,212 261.5,212 C261.223858,212 261,212.223858 261,212.5 C261,212.776142 261.223858,213 261.5,213 Z M255.5,213 C255.223858,213 255,212.776142 255,212.5 C255,212.223858 255.223858,212 255.5,212 C255.776142,212 256,212.223858 256,212.5 C256,212.776142 255.776142,213 255.5,213 Z M257.999955,203 L257.999955,201 L258.99995,201 L258.99995,203 L260.999939,203 L260.999939,204 L258.99995,204 L258.99995,206 L257.999955,206 L257.999955,204 L255.999967,204 L255.999967,203 L257.999955,203 Z"
                          id="button-add-to-cart_Combined-Shape"
                          transform="translate(257.000000, 207.500000) scale(-1, 1) translate(-257.000000, -207.500000) "
                        />
                      </g>
                    </g>
                  </svg>
                </button>
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
