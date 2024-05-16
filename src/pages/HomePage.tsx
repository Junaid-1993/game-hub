import { Show, GridItem, HStack, Box, Grid } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const MainPage = () => {
  return (
    // Redefining the 'Grid' only for main area.
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`, // 992px
      }}
      templateColumns={{
        base: "1fr", // 1 column
        lg: "250px 1fr", // 2 columns
      }}
    >
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={2}>
          <GameHeading />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default MainPage;
