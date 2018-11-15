import React, { Component } from 'react';
import { connect } from 'react-redux';
//import Lightbox from 'react-images';

import './index.scss';

import { getGameDetail } from '../../store/actions/games_actions';

class GamePage extends Component {
  state = {
    lightboxIsOpen: true
  };

  componentDidMount() {
    const gameTitle = this.props.match.params.title;
    this.props.dispatch(getGameDetail(gameTitle));
  }

  // handleLightBox = () => {
  //   this.setState({
  //     lightboxIsOpen: true
  //   });
  // };

  // handleLightBoxClose = () => {
  //   this.setState({
  //     lightboxIsOpen: false
  //   });
  // };

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
          </div>
          {/* <Lightbox
            images={[
              {
                src:
                  'https://images-1.gog.com/d2ef2d05c4082ff76817576a2c2de0a8a49c92a6f35118ef54c413022757be20_ggvgm.jpg'
              },
              {
                src:
                  'https://images-2.gog.com/64d92ea59812e00539291e2c97533e7092c27776e500978484eb40a789972229_ggvgm.jpg'
              }
            ]}
            isOpen={this.state.lightboxIsOpen}
            // onClickPrev={this.gotoPrevious}
            // onClickNext={this.gotoNext}
            onClose={this.handleLightBoxClose}
          /> */}
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
