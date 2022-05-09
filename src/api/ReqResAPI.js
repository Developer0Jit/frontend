import axios from 'axios';
import config from "../api/apiconfig.json"; 
const reqResInstance = axios.create({
    baseURL:config.reqresurl,
});

reqResInstance.interceptors.request.use((request)=>{
    const token =sessionStorage.getItem("token");
    if(token){
    request.headers["authorization"]=token;
    }
    return request;
})
export default reqResInstance;