import axios from 'axios';

import { GAMES_SERVER } from '../../components/utils/misc';
import { GET_GAMES, GET_GAME_DETAIL, CLEAR_GAME_DETAIL } from './types';

export const getGames = limit => {
  const request = axios
    .get(`${GAMES_SERVER}/get_games?limit=${limit}`)
    .then(res => res.data);

  return {
    type: GET_GAMES,
    payload: request
  };
};

export function getGameDetail(gameTitle) {
  const request = axios
    .get(`${GAMES_SERVER}/get_game_by_title/${gameTitle}`)
    .then(res => res.data[0]);

  return {
    type: GET_GAME_DETAIL,
    payload: request
  };
}

export function clearGameDetail() {
  return {
    type: CLEAR_GAME_DETAIL,
    payload: ''
  };
}
