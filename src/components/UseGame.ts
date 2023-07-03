import { useState, useEffect } from "react";
import { Game, FetchGameResponse } from "./GameGrid";
import APIClient from "../services/api-clients";
import { CanceledError } from "axios";

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