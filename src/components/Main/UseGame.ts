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

export const Usegame = () => UseData<Game>({endPoint: "/games"});