import { SimpleGrid } from "@chakra-ui/react";
import { GameCard } from "./GameCard";
import { Usegame } from "./UseGame";

export const GameGrid = () => {
   
    const {games, error} = Usegame();
    if(error) return <div>{error}</div>

    return (
        <div>
            <SimpleGrid columns={{sm:1, md:2, xl:3}}>
                {games.map((game) => {
                    return (
                        <GameCard game={game}/>
                    );
                })}
            </SimpleGrid>
        </div>
    );
}