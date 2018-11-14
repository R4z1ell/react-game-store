import { GET_GAMES, GET_GAME_DETAIL } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_GAMES:
      return { ...state, allGames: action.payload };
    case GET_GAME_DETAIL:
      return { ...state, gameDetail: action.payload };
    default:
      return state;
  }
}
