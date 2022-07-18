import axios from "axios";

const API_URL = "http://localhost:5000/api/";


export const publicRequest = axios.create({
    apiURL:API_URL,
});

export const userRequest = axios.create({
    apiURL:API_URL,
    header:{token:`Bearer $`}
});