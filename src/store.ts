import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  // When user changes the 'genre' then we will 'retain' other filters when setting the 'genreId' property in the next state.
  setGenreId: (genreId) => set((state) => ({ gameQuery: { ...state.gameQuery, genreId } })),
  // When user changes the 'platform' then we will 'retain' other filters when setting the 'platformId' property in the next state.
  setPlatformId: (platformId) => set((state) => ({ gameQuery: { ...state.gameQuery, platformId } })),
  // When user changes the 'sortOrder' then we will 'retain' other filters when setting the 'sortOrder' property in the next state.
  setSortOrder: (sortOrder) => set((state) => ({ gameQuery: { ...state.gameQuery, sortOrder } })),
  // When user searches for a game we will 'clear' all the other filters/properties and only set the 'searchText' property in the next
  // state.
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
}));

if (process.env.NODE_ENV === "development") mountStoreDevtool("Game Query Store", useGameQueryStore);

export default useGameQueryStore;
