import axios from 'axios';
import config from "../api/apiconfig.json"; 
const localserverInstance = axios.create({
    baseURL:config.localServerurl,
});

export default localserverInstance;