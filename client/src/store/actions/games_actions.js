import axios from 'axios';

import { GAMES_SERVER } from '../../components/utils/misc';
import { GET_GAMES } from './types';

export const getGames = () => {
  const request = axios.get(`${GAMES_SERVER}/get_games`).then(res => res.data);

  return {
    type: GET_GAMES,
    payload: request
  };
};
