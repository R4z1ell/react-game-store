import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeCarousel from './home_carousel/home_carousel';
import HomeSliders from './home_sliders/home_sliders';
import CardBlock from '../utils/card_block';
import ProductsList from './products_list/products_list';
import { getGames } from '../../store/actions/games_actions';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getGames(9));
  }

  render() {
    return (
      <div>
        <HomeCarousel games={this.props.games.allGames} />
        <CardBlock list={this.props.games.allGames} />
        <HomeSliders games={this.props.games.allGames} />
        <ProductsList list={this.props.games.allGames} />
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
