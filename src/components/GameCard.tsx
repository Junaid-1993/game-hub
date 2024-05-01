import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconList";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        {/* Passing an array of 'Platform' objects with this map. */}
        <PlatformIconsList platforms={game.parent_platforms.map((obj) => obj.platform)} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
