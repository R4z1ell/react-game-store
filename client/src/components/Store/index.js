import React, { Component } from 'react';
//import { connect } from 'react-redux';

import StoreContainer from './store_container/store_container';
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
        <StoreContainer />
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
