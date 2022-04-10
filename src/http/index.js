import axios from "axios";

const $host = axios.create({
    baseURL:"http://10.17.64.60:8000"
})

export {$host}
