import { useState, useEffect } from "react";
import APIClient from "../../services/api-clients";
import { CanceledError } from "axios";

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

export interface FetchGameResponse {
    results: Game[];
    count: number;
}

export const Usegame = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        APIClient.get<FetchGameResponse>('/games', {signal: controller.signal}).then((res) => {
            setGames(res.data.results);
            setLoading(false);
        }).catch((err) => {
            if (err.isInstanceOf(CanceledError)) return;
            setError(err.message);
            setLoading(false);
        });

        return () => controller.abort();
    }, []);

    return {games, error, loading};
}