import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeCarousel from './home_carousel/home_carousel';
import HomeSliders from './home_sliders/home_sliders';
import CardBlock from '../utils/card_block';
import ProductsList from './products_list/products_list';
import {
  getGames,
  getDiscountedGames
} from '../../store/actions/games_actions';
import { getOverlayStatus } from '../../store/actions/site_actions';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getGames(9));
    this.props.dispatch(getDiscountedGames());

    window.scrollTo(0, 0);
    if (this.props.match.path === '/reset_password/:token') {
      this.props.dispatch(getOverlayStatus(true, null, true));
    }
  }

  render() {
    return (
      <div>
        <HomeCarousel
          games={this.props.games.allGames}
          user={this.props.user}
        />
        <CardBlock
          list={this.props.games.allGames}
          gridView={true}
          fromHome={true}
        />
        <HomeSliders
          games={this.props.games.allGames}
          discounted={this.props.games.discounted}
        />
        <ProductsList list={this.props.games.allGames} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.games,
    user: state.user
  };
};

export default connect(mapStateToProps)(Home);
