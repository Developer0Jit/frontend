import axios from 'axios';
import config from "../api/apiconfig.json"; 
const typicodeInstance = axios.create({
    baseURL:config.typicodeurl,
});

export default typicodeInstance;