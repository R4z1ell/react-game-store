import { combineReducers } from 'redux';
import games from './games_reducer';

const rootReducer = combineReducers({
  games
});

export default rootReducer;
