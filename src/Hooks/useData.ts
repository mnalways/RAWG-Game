import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import APIClient from "../services/api-clients"

interface FetchResponse <T> {
    results: T[];
}

export const UseData = <T>({endPoint}: {endPoint: string}) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        APIClient.get<FetchResponse<T>>(endPoint, {signal: controller.signal}).then((res) => {
            setData(res.data.results);
            setLoading(false);
        }).catch((err) => {
            if (err.isInstanceOf(CanceledError)) return;
            setError(err.message);
            setLoading(false);
        });

        return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {data, error, loading};
}