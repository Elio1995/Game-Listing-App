export interface GamesStore {
  games: Game[];
  favourites: Game[];
  getAllGames: () => Promise<void>;
  setFavourite: (game: Game) => void;
}

export interface Game {
  id: string;
  title: string;
  rating: number;
  iconUrl: string;
}
