import {create} from 'zustand';
import {
  createJSONStorage,
  persist,
  subscribeWithSelector,
} from 'zustand/middleware';
import {getGames} from '../features/games/api';
import {Game, GamesStore} from '../types/game-store.interface';

const initialState = {
  games: [],
  favourites: [],
};

const useGamesStore = create<GamesStore>()((set, get) => ({
  ...initialState,
  getAllGames: async () => {
    const games = await getGames();

    if (typeof games !== 'string') {
      set({games});
    }
  },
  setFavourite: game => {
    const favourites = get().favourites;
    const index = favourites.findIndex(favourite => favourite.id === game.id);
    if (index === -1) {
      favourites.push(game);
    } else {
      favourites.splice(index, 1);
    }

    set({favourites});
  },
}));

export default useGamesStore;
