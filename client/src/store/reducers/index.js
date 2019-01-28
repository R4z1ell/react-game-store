import { combineReducers } from 'redux';
import user from './user_reducer';
import games from './games_reducer';

const rootReducer = combineReducers({
  user,
  games
});

export default rootReducer;
