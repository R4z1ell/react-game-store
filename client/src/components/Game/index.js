import React, { Component } from 'react';
import { connect } from 'react-redux';
import Lightbox from 'react-images';
import Slider from 'react-slick';
import Iframe from 'react-iframe';
import moment from 'moment';

import './index.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faTimesCircle,
  faAngleDoubleDown
} from '@fortawesome/free-solid-svg-icons';
import { FaWindows } from 'react-icons/fa';

import ProductActions from '../utils/product_actions/product_actions';
import {
  getGameDetail,
  clearGameDetail
} from '../../store/actions/games_actions';

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
    lightboxImages: [],
    showLanguages: false
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
    window.scrollTo(0, 0);

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

  componentWillUnmount() {
    this.props.dispatch(clearGameDetail());
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
            {game.images.logo ? (
              <img
                src={game.images.logo}
                alt="logo"
                className="game-page__logo"
              />
            ) : null}
          </div>
        </div>

        <div className="game-page__layout">
          <div
            className="game-page__background"
            style={{
              background: `url(${game.images.background})`
            }}
          />
          <div className="game-page__title">
            {game.title}
            <div className="game-page__windows">
              <FaWindows fill="#545454" size="0.4em" />
              <div className="game-page__separator" />
              <div className="game-page__Languages">
                {game.languages.length === 1
                  ? 'English'
                  : `English & ${game.languages.length - 1} more`}
              </div>
            </div>
            <ProductActions {...this.props} />
          </div>
          <Slider {...this.settingOne} className="game-page__slider-container">
            {game.videos[0].video_url ? (
              <Iframe
                url={game.videos[0].video_url}
                width="271px"
                height="152px"
                allowFullScreen
              />
            ) : null}
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
          <div className="game-page__layout flex">
            <div className="game-page__main-col">
              <div className="game-page__description-tag">
                <p>Description</p>
              </div>
              <div
                className="game-page__description"
                dangerouslySetInnerHTML={{ __html: game.description.full }}
              />
              {game.description.whats_cool_about_it.length > 0 ? (
                <div
                  className="game-page__about-it"
                  dangerouslySetInnerHTML={{
                    __html: game.description.whats_cool_about_it
                  }}
                />
              ) : null}
              <div className="game-page__system-requirements">
                <div className="game-page__system-tag">
                  <div className="game-page__underline-text">
                    System requirements
                  </div>
                </div>
                <div className="system-requirements table">
                  <div className="table-header">
                    <div className="system-requirements__minimum-header">
                      Minimum system requirements:
                    </div>
                  </div>
                  {game.system_requirements
                    ? Object.keys(game.system_requirements[0]).map((key, i) => {
                        const item = game.system_requirements[0][key];
                        return i > 0 && key !== '_id' ? (
                          key === 'directX' && item === '' ? null : (
                            <div key={i} className="table__row">
                              <div className="table__row-label system-requirements__label">
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                              </div>
                              <div className="table__row-content system-requirements__minimum">
                                {item}
                              </div>
                            </div>
                          )
                        ) : null;
                      })
                    : null}
                </div>
              </div>
            </div>
            <div className="game-page__side-col">
              <div className="game-page__game-details">
                <div className="game-page__game-details-title">
                  <p>Game details</p>
                </div>
                <div className="details table">
                  <div className="table__row">
                    <div className="details__category table__row-label">
                      Genre:
                    </div>
                    <div className="details__content table__row-content">
                      {game.genres
                        ? game.genres.map((genre, i) => (
                            <React.Fragment key={i}>
                              <div style={{ marginRight: '5px' }}>
                                {genre.name}
                              </div>
                              <span style={{ marginRight: '5px' }}>
                                {i === game.genres.length - 1 ? '' : '-'}
                              </span>
                            </React.Fragment>
                          ))
                        : null}
                    </div>
                  </div>
                  <div className="table__row">
                    <div className="details__category table__row-label">
                      Works on:
                    </div>
                    <div className="details__content table__row-content">
                      Windows (7, 8, 10)
                    </div>
                  </div>
                  <div className="table__row">
                    <div className="details__category table__row-label">
                      Released:
                    </div>
                    <div className="details__content table__row-content">
                      {moment(game.release_date).format('ll')}
                    </div>
                  </div>
                  <div className="table__row">
                    <div className="details__category table__row-label">
                      Company:
                    </div>
                    <div className="details__content table__row-content">
                      <div style={{ marginRight: '5px' }}>{game.developer}</div>
                      {game.publisher ? '/' : null}
                      <div style={{ marginLeft: '5px' }}>
                        {game.publisher ? game.publisher : null}
                      </div>
                    </div>
                  </div>
                  <div className="table__row">
                    <div className="details__category table__row-label">
                      Size:
                    </div>
                    <div className="details__content table__row-content">
                      {parseInt((game.total_size / 1000000000).toFixed(2), 10) >
                      0
                        ? `${Number(game.total_size / 1000000000).toFixed(
                            1
                          )} GB`
                        : `${Number(game.total_size / 1000000).toFixed(0)} MB`}
                    </div>
                  </div>
                </div>
              </div>
              <div className="game-page__languages">
                <div className="game-page__languages-title">Languages</div>
              </div>
              <div className="languages">
                <div className="languages__row languages__row--labels">
                  <div className="languages__row--cell languages__row--language-name" />
                  <div className="languages__row--cell languages__row--audio-support">
                    Audio
                  </div>
                  <div className="languages__row--cell languages__row--text-support">
                    Text
                  </div>
                </div>
                {game.languages.map((item, i) =>
                  item.language_name === 'English' ? (
                    <div className="languages__row" key={i}>
                      <div className="languages__row--cell languages__row--language-name">
                        {item.language_name}
                      </div>
                      <div className="languages__row--cell languages__row--audio-support">
                        {item.audio ? (
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            style={{ opacity: '1' }}
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faTimesCircle}
                            style={{ opacity: '0.2' }}
                          />
                        )}
                      </div>
                      <div className="languages__row--cell languages__row--text-support">
                        {item.text ? (
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            style={{ opacity: '1' }}
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faTimesCircle}
                            style={{ opacity: '0.2' }}
                          />
                        )}
                      </div>
                    </div>
                  ) : null
                )}
                <div className="languages__more-languages">
                  <div
                    className={
                      this.state.showLanguages
                        ? 'languages__more-languages--content is-open'
                        : 'languages__more-languages--content '
                    }
                  >
                    {game.languages.map((item, i) =>
                      i > 0 ? (
                        this.state.showLanguages === false ? null : (
                          <div className="languages__row" key={i}>
                            <div className="languages__row--cell languages__row--language-name">
                              {item.language_name}
                            </div>
                            <div className="languages__row--cell languages__row--audio-support">
                              {item.audio ? (
                                <FontAwesomeIcon
                                  icon={faCheckCircle}
                                  style={{ opacity: '1' }}
                                />
                              ) : (
                                <FontAwesomeIcon
                                  icon={faTimesCircle}
                                  style={{ opacity: '0.2' }}
                                />
                              )}
                            </div>
                            <div className="languages__row--cell languages__row--text-support">
                              {item.text ? (
                                <FontAwesomeIcon
                                  icon={faCheckCircle}
                                  style={{ opacity: '1' }}
                                />
                              ) : (
                                <FontAwesomeIcon
                                  icon={faTimesCircle}
                                  style={{ opacity: '0.2' }}
                                />
                              )}
                            </div>
                          </div>
                        )
                      ) : null
                    )}
                  </div>
                  {game.languages.length > 1 ? (
                    this.state.showLanguages ? (
                      <span
                        className={
                          this.state.showLanguages
                            ? 'languages__more-languages--button is-open'
                            : 'languages__more-languages--button '
                        }
                        onClick={() =>
                          this.setState({
                            showLanguages: !this.state.showLanguages
                          })
                        }
                      >
                        Hide {game.languages.length - 1} languages
                        <FontAwesomeIcon icon={faAngleDoubleDown} />
                      </span>
                    ) : (
                      <span
                        className={
                          this.state.showLanguages
                            ? 'languages__more-languages--button is-open'
                            : 'languages__more-languages--button '
                        }
                        onClick={() =>
                          this.setState({
                            showLanguages: !this.state.showLanguages
                          })
                        }
                      >
                        Show {game.languages.length - 1} more languages
                        <FontAwesomeIcon icon={faAngleDoubleDown} />
                      </span>
                    )
                  ) : null}
                </div>
              </div>
            </div>
          </div>
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
