import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "./useGames";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug], // 'slug' will change and it will refetch the game..
    queryFn: () => apiClient.get(slug),
  });

export default useGame;
