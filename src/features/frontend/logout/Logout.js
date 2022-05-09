import {React,useEffect} from 'react';
import {useNavigate} from "react-router-dom";
const Logout = () => {
    const navigateuser = useNavigate();
    useEffect(()=>{
        console.log(sessionStorage.getItem("token"));
        sessionStorage.removeItem("token");
        navigateuser("/login");
        },[])
    
    return ( <>
    </> );
}
 
export default Logout;