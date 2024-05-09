import useGenres from "./useGenres";

const useGenreLookup = (id?: number) => {
  const { data: genres } = useGenres();
  return genres.results.find((g) => g.id === id);
};

export default useGenreLookup;
