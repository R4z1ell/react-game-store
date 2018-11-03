import React from 'react';
import Slider from 'react-slick';

import style from './home_carousel.module.scss';

const HomeCarousel = props => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000
  };

  const generateGameSlides = () =>
    props.games
      ? props.games.map((game, i) => (
          <div key={i}>
            <div
              style={{
                background: `url(${game.images.background})`,
                height: '490px'
              }}
            >
              <div className={style.container}>
                <div className={style.logo__container}>
                  {game.images.logo ? (
                    <img src={`${game.images.logo}`} alt="logo" />
                  ) : null}
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
