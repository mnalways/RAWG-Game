import { SimpleGrid } from "@chakra-ui/react";
import { GameCard } from "./GameCard";
import { Usegame } from "./UseGame";
import { GameCardSkeleton } from "./gameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";

export const GameGrid = () => {
   
    const skeletonArray = [1, 2, 3, 4, 5, 6];
    const {games, error, loading} = Usegame();
    if(error) return <div>{error}</div>

    return (
        <div>
            <SimpleGrid columns={{sm:1, md:2, xl:3}} spacing={"30px"} padding={10}>
                {loading && skeletonArray.map(() => <GameCardContainer>
                    <GameCardSkeleton />
                        </GameCardContainer>)}
                {games.map((game) => {
                    return (
                        <GameCardContainer>
                            <GameCard game={game}/>
                        </GameCardContainer>
                    );
                })}
            </SimpleGrid>
        </div>
    );
}