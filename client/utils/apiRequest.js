import axios from "axios";

const apiRequest = axios.create({
    baseURL: import.meta.env.VITE_API_ENDPOINT,
    withCredentials: true, // This ensures cookies are sent with requests
})

export default apiRequest;