import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  // Array of objects and each object has a property called 'platform' which is of type 'Platform'.
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (selectedGenre: Genre | null) => useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [selectedGenre?.id]);

export default useGames;
