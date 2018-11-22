import React, { Component } from 'react';
import { connect } from 'react-redux';
import Lightbox from 'react-images';
import Slider from 'react-slick';
import Iframe from 'react-iframe';

import './index.scss';

import ProductActions from '../utils/product_actions/product_actions';
import { getGameDetail } from '../../store/actions/games_actions';

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="prev-arrow" onClick={onClick}>
      <svg viewBox="0 0 15 24" width="100%" height="100%" fill="#fff">
        <path d="M0 21.16L9.16 12 0 2.82 2.82 0l12 12-12 12z" />
      </svg>
    </div>
  );
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="next-arrow" onClick={onClick}>
      <svg viewBox="0 0 15 24" width="100%" height="100%" fill="#fff">
        <path d="M0 21.16L9.16 12 0 2.82 2.82 0l12 12-12 12z" />
      </svg>
    </div>
  );
}

class GamePage extends Component {
  state = {
    lightboxIsOpen: false,
    imagePos: 0,
    lightboxImages: []
  };

  settingOne = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: false,
    autoplaySpeed: 3000,
    appendDots: dots => (
      <div
        style={{
          bottom: '-30px'
        }}
      >
        <ul className="game-page__slider-dots">{dots}</ul>
      </div>
    )
  };

  componentDidMount() {
    const gameTitle = this.props.match.params.title;
    this.props.dispatch(getGameDetail(gameTitle));
    if (gameTitle) {
      let lightboxImages = [];

      setTimeout(() => {
        this.props.gameInfo.gameDetail.screenshots.forEach(item => {
          lightboxImages.push({
            src: item.formatted_images[1].image_url
          });
        });

        this.setState({
          lightboxImages
        });
      }, 2000);
    }
  }

  handleLightBox = pos => {
    if (this.state.lightboxImages.length > 0) {
      this.setState({
        lightboxIsOpen: true,
        imagePos: pos
      });
    }
  };

  handleLightBoxClose = () => {
    this.setState({
      lightboxIsOpen: false
    });
  };

  gotoPrevious = () => {
    this.setState({
      imagePos: this.state.imagePos - 1
    });
  };

  gotoNext = () => {
    this.setState({
      imagePos: this.state.imagePos + 1
    });
  };

  generateImagesSlides = () =>
    this.props.gameInfo.gameDetail
      ? this.props.gameInfo.gameDetail.screenshots.map((game, i) => (
          <div key={i}>
            <img
              src={game.formatted_images[0].image_url}
              alt="screen"
              className="slider-images"
              onClick={() => this.handleLightBox(i)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        ))
      : null;

  render() {
    const game = this.props.gameInfo.gameDetail;

    return game ? (
      <React.Fragment>
        <div
          className="game-page"
          style={{
            background: `url(${game.images.background}) fixed`,
            backgroundPosition: 'top'
          }}
        >
          <div className="game-page__container">
            <img
              src={game.images.logo}
              alt="logo"
              className="game-page__logo"
            />
          </div>
        </div>

        <div className="game-page__layout">
          <img
            src={game.images.background}
            alt="bck"
            className="game-page__background"
          />
          <div className="game-page__title">
            {game.title}
            <div className="game-page__windows">
              <svg
                aria-hidden="true"
                data-prefix="fab"
                data-icon="windows"
                className="svg-inline--fa fa-windows fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="#545454"
                  d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"
                />
              </svg>
              <div className="game-page__separator" />
              <div className="game-page__languages">English & 6 more</div>
            </div>
            <ProductActions {...this.props} />
          </div>
          <Slider {...this.settingOne} className="game-page__slider-container">
            <Iframe
              url={game.videos[0].video_url}
              width="271px"
              height="152px"
              allowFullScreen
            />
            {this.generateImagesSlides()}
          </Slider>
          {this.state.lightboxIsOpen ? (
            <Lightbox
              currentImage={this.state.imagePos}
              images={this.state.lightboxImages}
              isOpen={this.state.lightboxIsOpen}
              onClickPrev={() => this.gotoPrevious()}
              onClickNext={() => this.gotoNext()}
              onClose={() => this.handleLightBoxClose()}
            />
          ) : null}
          <div className="game-page__description-tag">
            <p>Description</p>
          </div>
          <div
            className="game-page__description"
            dangerouslySetInnerHTML={{ __html: game.description.full }}
          />
        </div>
      </React.Fragment>
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    gameInfo: state.games
  };
};

export default connect(mapStateToProps)(GamePage);
