import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeCarousel from './home_carousel/home_carousel';
import FeaturedSlider from './featured_slider/featured_slider';
import { getGames } from '../../store/actions/games_actions';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getGames());
  }

  render() {
    return (
      <div>
        <HomeCarousel games={this.props.games.allGames} />
        <FeaturedSlider games={this.props.games.allGames} />
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
