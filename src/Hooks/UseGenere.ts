import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clients";
import { FetchResponse } from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export const UseGenre = () => {
  const endPoint = "/genres";
  return useQuery({
    queryFn: () =>
      APIClient.get<FetchResponse<Genre>>(endPoint).then((res) => res.data),
    queryKey: ["genres"],
    staleTime: 1000 * 60 * 60 * 24,
  });
};
