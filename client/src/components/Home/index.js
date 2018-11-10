import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeCarousel from './home_carousel/home_carousel';
import HomeSliders from './home_sliders/home_sliders';
import { getGames } from '../../store/actions/games_actions';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getGames());
  }

  render() {
    return (
      <div>
        <HomeCarousel games={this.props.games.allGames} />
        <HomeSliders games={this.props.games.allGames} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.games
  };
};

export default connect(mapStateToProps)(Home);
