import React, { Component } from 'react';
import { connect } from 'react-redux';
import shuffle from 'shuffle-array';

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
  state = {
    firstNineGames: [],
    sixRandomGames: [],
    fiveRandomGames: [],
    fourRandomGames: []
  };

  componentDidMount() {
    this.props.dispatch(getGames()).then(() => {
      if (this.props.games.allGames) {
        this.setState({
          firstNineGames: this.props.games.allGames.slice(0, 9),
          sixRandomGames: shuffle.pick(this.props.games.allGames, { picks: 6 }),
          fiveRandomGames: shuffle.pick(this.props.games.allGames, {
            picks: 5
          }),
          fourRandomGames: shuffle.pick(this.props.games.allGames, { picks: 4 })
        });
      }
    });
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
          games={this.state.sixRandomGames}
          user={this.props.user}
        />
        <CardBlock
          list={this.state.fourRandomGames}
          gridView={true}
          fromHome={true}
        />
        <HomeSliders
          games={this.state.fiveRandomGames}
          discounted={this.props.games.discounted}
        />
        <ProductsList list={this.state.firstNineGames} />
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
