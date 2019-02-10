import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import './home_carousel.scss';
import './slider.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircle,
  faEuroSign,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import { FaWindows, FaShoppingCart } from 'react-icons/fa';

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
      ? props.games.map((game, i) => {
          const discountedPrice = Number(
            game.prices.basePrice / 100 - (game.prices.basePrice / 10000) * 33
          ).toFixed(2);
          const myButtonClass = game.prices.discount ? '23.8%' : '23%';
          const titleClass = game.title.length >= 35 ? '29px' : '32px';

          return (
            <React.Fragment key={i}>
              <Link to={`/game/${game.title}`}>
                <div
                  style={{
                    background: `linear-gradient(180deg,transparent 0,rgba(0,0,0,.6)),url(${
                      game.images.background
                    })`,
                    height: '490px'
                  }}
                >
                  <div className="container">
                    <div className="game__above--logo">
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
                    <div
                      className="game__title"
                      style={{ fontSize: titleClass }}
                    >
                      {game.title}
                    </div>
                    <div className="game__action">
                      {game.prices.discount ? (
                        <span className="game__discount">
                          -{game.prices.discount}%
                        </span>
                      ) : null}
                      <div className="game__price">
                        {game.prices.discount ? (
                          <span className="game__base-price">
                            {game.prices.basePrice / 100}
                          </span>
                        ) : null}
                        <FontAwesomeIcon icon={faEuroSign} />
                        {game.prices.discount
                          ? discountedPrice
                          : game.prices.basePrice / 100}
                      </div>
                    </div>
                    <div className="game__labels">
                      {props.user.userData.cart.some(
                        elem => elem.id === game._id
                      ) ? (
                        <span className="game__label game__label--in-cart">
                          <FaShoppingCart
                            fill="#fff"
                            size="1em"
                            className="game__label-icon"
                          />
                          in cart
                        </span>
                      ) : null}
                      {props.user.userData.wishlist.some(
                        elem => elem.id === game._id
                      ) &&
                      !props.user.userData.cart.some(
                        elem => elem.id === game._id
                      ) ? (
                        <span className="game__label game__label--is-wishlisted">
                          <FontAwesomeIcon
                            icon={faHeart}
                            className="game__label-icon game__label-icon--wishlisted"
                          />
                          wishlisted
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
              </Link>
              <div
                className="myButton__container"
                style={{ bottom: myButtonClass }}
              >
                <div className="myButton__wrapper">
                  <MyButton type="add_to_cart_link" gameId={game._id} />
                </div>
              </div>
            </React.Fragment>
          );
        })
      : null;

  return (
    <div>
      <Slider {...settings} className="game__wrapper">
        {generateGameSlides()}
      </Slider>
    </div>
  );
};

export default HomeCarousel;
