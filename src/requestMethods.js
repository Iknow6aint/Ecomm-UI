import axios from "axios";

const API_URL = "http://localhost:5000/api/";

const API = axios.create({
    baseURL: API_URL
})

API.interceptors.request.use((req) => {
    if(localStorage.getItem("persist:root")){
        req.headers.authorization = ""
    }

    return req
})

export const publicRequest = () => API.get("/")
export const userRequest = () => API.get("/")


// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";
// export const publicRequest = axios.create({
//     apiURL:API_URL,
// });

// export const userRequest = axios.create({
//     apiURL:API_URL,
//     header:{token:`Bearer ${TOKEN}`}
// });