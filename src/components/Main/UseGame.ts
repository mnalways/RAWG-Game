import { GameQuery } from "../../App";
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
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export const Usegame = (gameQuery: GameQuery) =>
  UseData<Game>({
    endPoint: "/games",
    reqConfigObj: {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery?.sortOrder,
        search: gameQuery?.searchString,
      },
    },
    dep: [gameQuery],
  });
