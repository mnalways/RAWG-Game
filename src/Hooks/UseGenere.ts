import { UseData } from "./useData";

interface Genre {
    id: number;
    name: string;
    image_background: string
}

export const UseGenre = () => UseData<Genre>({endPoint: "/genres"});