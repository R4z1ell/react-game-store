import axios from 'axios';

import { GAMES_SERVER } from '../../components/utils/misc';
import { GET_GAMES } from './types';

export const getGames = limit => {
  const request = axios
    .get(`${GAMES_SERVER}/get_games?limit=${limit}`)
    .then(res => res.data);

  return {
    type: GET_GAMES,
    payload: request
  };
};
