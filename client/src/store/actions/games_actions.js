import axios from 'axios';

import { GAMES_SERVER } from '../../components/utils/misc';
import {
  GET_GAMES,
  GET_GAME_DETAIL,
  GET_GAMES_TO_STORE,
  ADD_GAME,
  CLEAR_GAME,
  CLEAR_GAME_DETAIL,
  GET_GENRES
} from './types';

export const getGames = (limit = '') => {
  const request = limit
    ? axios
        .get(`${GAMES_SERVER}/get_games?limit=${limit}`)
        .then(res => res.data)
    : axios.get(`${GAMES_SERVER}/get_games`).then(res => res.data);

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

export const getGamesToStore = (price, languages) => {
  if (price.length === 0 && languages.length > 0) {
    const request = axios
      .post(`${GAMES_SERVER}/shop?language=${languages}`)
      .then(response => {
        return {
          articles: response.data.articles
        };
      });

    return {
      type: GET_GAMES_TO_STORE,
      payload: request
    };
  }

  if (price.length > 0 && languages.length === 0) {
    const request = axios
      .post(`${GAMES_SERVER}/shop?price=${price}`)
      .then(response => {
        return {
          articles: response.data.articles
        };
      });

    return {
      type: GET_GAMES_TO_STORE,
      payload: request
    };
  }

  if (price.length > 0 && languages.length > 0) {
    const request = axios
      .post(`${GAMES_SERVER}/shop?language=${languages}&price=${price}`)
      .then(response => {
        return {
          articles: response.data.articles
        };
      });

    return {
      type: GET_GAMES_TO_STORE,
      payload: request
    };
  }

  if (price.length === 0 && languages.length === 0) {
    const request = axios.post(`${GAMES_SERVER}/shop`).then(response => {
      return {
        articles: response.data.articles
      };
    });

    return {
      type: GET_GAMES_TO_STORE,
      payload: request
    };
  }
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
