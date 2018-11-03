import { GET_GAMES } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_GAMES:
      return { ...state, allGames: action.payload };
    default:
      return state;
  }
}
