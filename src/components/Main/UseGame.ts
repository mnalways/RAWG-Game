import { useState, useEffect } from "react";
import APIClient from "../../services/api-clients";
import { CanceledError } from "axios";

export interface Game {
    name: string;
    id: string;
    background_image: string;
}

export interface FetchGameResponse {
    results: Game[];
    count: number;
}

export const Usegame = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        APIClient.get<FetchGameResponse>('/games', {signal: controller.signal}).then((res) => {
            setGames(res.data.results);
        }).catch((err) => {
            if (err.isInstanceOf(CanceledError)) return;
            setError(err.message);
        });
        return () => controller.abort();
    }, []);

    return {games, error};
}