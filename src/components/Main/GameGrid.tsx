import { SimpleGrid } from "@chakra-ui/react";
import { GameCard } from "./GameCard";
import { Usegame } from "./UseGame";
import { GameCardSkeleton } from "./gameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";
import { GameQuery } from "../../App";

interface props {
  gameQuery: GameQuery;
}

export const GameGrid = ({ gameQuery }: props) => {
  const skeletonArray = [1, 2, 3, 4, 5, 6];
  const { data, error, loading } = Usegame(gameQuery);
  if (error) return <div>{error}</div>;

  return (
    <div>
      <SimpleGrid
        columns={{ sm: 1, md: 2, xl: 3 }}
        spacing={"30px"}
        padding={10}
      >
        {loading &&
          skeletonArray.map((skull) => (
            <GameCardContainer key={skull}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => {
          return (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          );
        })}
      </SimpleGrid>
    </div>
  );
};
