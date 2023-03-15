import axios from "axios";

export const api = axios.create({
    baseURL: "https://back-ebook.herokuapp.com/"
})