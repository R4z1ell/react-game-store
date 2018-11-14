import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getGameDetail } from '../../store/actions/games_actions';

class GamePage extends Component {
  componentDidMount() {
    const gameTitle = this.props.match.params.title;
    this.props.dispatch(getGameDetail(gameTitle));
  }

  render() {
    return (
      <div style={{ width: '100%', height: '1000px', background: '#ccc' }}>
        {this.props.gameInfo.gameDetail ? (
          <div>{this.props.gameInfo.gameDetail.title}</div>
        ) : null}
        <div>bho</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    gameInfo: state.games
  };
};

export default connect(mapStateToProps)(GamePage);
