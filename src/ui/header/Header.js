import {React,useEffect,useState} from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { NavLink } from "react-router-dom";
import frontendRoutes from "../../shared/routes/frontendRoutes";
//import { selectAuthUser } from "../../../app/Slices/AuthSlice";
import { useSelector } from "react-redux";
//const loginUser = useSelector(selectAuthUser);

const Header = () => {
  const [token,setToken] = useState("");
  useEffect(()=>{
  //  const token =sessionStorage.getItem("token");
    setToken(sessionStorage.getItem("token"));
    //console.log("Header"+sessionStorage.getItem("token"));
  },[])
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" style={{backgroundColor:"#222"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img
              style={{ width: 100, height: 100 }}
              alt="Art Hub"
              src="/asset/images/arthubimage.png"
            />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontStyle:"italic" }}>
          Art Hub
          </Typography>

          {Array.isArray(frontendRoutes) &&
            frontendRoutes
              .filter(({ showInMenu }) => showInMenu)
              .map(({ path, title }, i) => (
               // (token)
                <NavLink
                  style={({ isActive }) => {
                    return {
                      display: "block",
                      margin: "1rem .5rem",
                      color: isActive ? "#aaa" : "#fff",
                      textDecoration: "none",
                    };
                  }}
                  to={(token&&title=="Login")?"/logout":path}
                  key={path + i}
                >
                  {(token&&title=="Login")?"Logout":title}
                </NavLink>
              ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;