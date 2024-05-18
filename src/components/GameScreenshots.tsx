import { Box, Grid, Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface GameScreenshotsProps {
  gameId: number;
}
const GameScreenshots = ({ gameId }: GameScreenshotsProps) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((screenshot) => (
        <Box key={screenshot.id}>
          <Image src={screenshot.image} />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
