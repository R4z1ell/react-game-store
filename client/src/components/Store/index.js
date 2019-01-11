import React, { Component } from 'react';
//import { connect } from 'react-redux';

import StoreSearch from './store_search/store_search';
//import { getGames } from '../../store/actions/games_actions';

class StorePage extends Component {
  // componentDidMount() {
  //   this.props.dispatch(getGames());
  //   window.scrollTo(0, 0);
  // }

  render() {
    return (
      <div>
        {/* <StoreSearch games={this.props.games.allGames} /> */}
        <StoreSearch />
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     games: state.games
//   };
// };

// export default connect(mapStateToProps)(StorePage);
export default StorePage;
