import axios from 'axios';

import { GAMES_SERVER } from '../../components/utils/misc';
import {
  GET_GAMES,
  GET_GAME_DETAIL,
  ADD_GAME,
  CLEAR_GAME,
  CLEAR_GAME_DETAIL,
  GET_GENRES
} from './types';

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

export const addGame = dataToSubmit => {
  const request = axios
    .post(`${GAMES_SERVER}/add_game`, dataToSubmit)
    .then(response => response.data);

  return {
    type: ADD_GAME,
    payload: request
  };
};

export const clearGame = () => {
  return {
    type: CLEAR_GAME,
    payload: ''
  };
};

export function clearGameDetail() {
  return {
    type: CLEAR_GAME_DETAIL,
    payload: ''
  };
}

//==============================
//           GENRES
//==============================

export const getGenres = () => {
  const request = axios
    .get(`${GAMES_SERVER}/get_genres`)
    .then(response => response.data);

  return {
    type: GET_GENRES,
    payload: request
  };
};
