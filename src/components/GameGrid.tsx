import { Usegame } from "./UseGame";

export interface Game {
    name: string;
    id: string;
}

export interface FetchGameResponse {
    results: Game[];
    count: number;
}

export const GameGrid = () => {
   
    const {games, error} = Usegame();
    if(error) return <div>{error}</div>

    return (
        <div>
            <ul>
                {games.map((game) => <li key={game.id}>{game.name}</li>)}
            </ul>
        </div>
    );
}