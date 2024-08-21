import {Axios} from '../../../lib';
import {Game} from '../../../types/game-store.interface';

export const getGames = async () => {
  try {
    const games = await Axios.get(
      'https://mock-game-api-9a408f047f23.herokuapp.com/api/games',
    );

    return games.data as Game[];
  } catch (error) {
    return error.message as string;
  }
};
