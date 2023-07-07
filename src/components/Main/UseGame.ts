import { Genre } from "../../Hooks/UseGenere";
import { UseData } from "../../Hooks/useData";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    name: string;
    id: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
}

export const Usegame = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => UseData<Game>({endPoint: "/games", reqConfigObj:{params: {genres: selectedGenre?.id, platforms: selectedPlatform?.id}}, dep: [selectedGenre?.id, selectedPlatform?.id]});