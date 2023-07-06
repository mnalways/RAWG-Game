import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import APIClient from "../services/api-clients"

interface FetchResponse <T> {
    results: T[];
}

interface props {
    endPoint: string;
    reqConfigObj?: AxiosRequestConfig;
    dep?: any[];
}

export const UseData = <T>({endPoint, reqConfigObj={}, dep}: props) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        APIClient.get<FetchResponse<T>>(endPoint, {signal: controller.signal, ...reqConfigObj}).then((res) => {
            setData(res.data.results);
            setLoading(false);
        }).catch((err) => {
            if (err.isInstanceOf(CanceledError)) return;
            setError(err.message);
            setLoading(false);
        });

        return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dep ? dep : []);

    return {data, error, loading};
}