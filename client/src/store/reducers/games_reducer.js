import {
  GET_GAMES,
  GET_GAME_DETAIL,
  GET_GAMES_TO_STORE,
  ADD_GAME,
  CLEAR_GAME,
  CLEAR_GAME_DETAIL,
  GET_GENRES
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_GAMES:
      return { ...state, allGames: action.payload };
    case GET_GAME_DETAIL:
      return { ...state, gameDetail: action.payload };
    case GET_GAMES_TO_STORE:
      return { ...state, toStore: action.payload.articles };
    case ADD_GAME:
      return { ...state, addGame: action.payload };
    case CLEAR_GAME:
      return { ...state, addGame: action.payload };
    case CLEAR_GAME_DETAIL:
      return { ...state, gameDetail: action.payload };
    case GET_GENRES:
      return { ...state, genres: action.payload };
    default:
      return state;
  }
}
