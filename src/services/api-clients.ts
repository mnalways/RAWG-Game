import axios from "axios";

const service = axios.create({
    params: {key: "6c757f2448604ec78ab6b036074a884b",},
    baseURL: "https://api.rawg.io/api",
});

export default service;