import { Platform } from "../components/Main/UseGame";
import { UseData } from "./useData"

export const usePlatforms = () => {
    return UseData<Platform>({endPoint: '/platforms/lists/parents'});
}