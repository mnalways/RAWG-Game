import { UseData } from "./useData";

interface Genre {
    id: number;
    name: string;
}

export const UseGenre = () => UseData<Genre>({endPoint: "/genres"});