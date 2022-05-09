import Login from "../../features/frontend/login/Login";
import Home from "../../features/frontend/home/Home";
import About from "../../features/frontend/about/About";
import Contact from "../../features/frontend/contact/Contact";
import Shop from "../../features/frontend/shop/Shop";
import Checkout from "../../features/frontend/shop/Checkout";
import Logout from "../../features/frontend/logout/Logout";
import UpdateAddress from "../../features/frontend/shop/UpdateAddress";
const token =sessionStorage.getItem("token");
    
export default [
    {
        title:"Home",
        path:"",
        showInMenu:true,
        subMenu:false,
        component:<Home />
    },
    {
        title:"About",
        path:"about",
        showInMenu:true,
        subMenu:false,
        component:<About />
    },
    {
        title:"Contact",
        path:"contact",
        showInMenu:true,
        subMenu:false,
        component:<Contact />
    },
    {
        title:(token)?"Logout":"Login",
        path:(token)?"logout":"login",
        showInMenu:true,
        subMenu:false,
       // component:(token)?<Logout/>:<Login />
       component:""
    } ,
    {
        title:"Shop",
        path:"shop",
        subMenu:true,
        showInMenu:true,
        component:<Shop />
    },
    {
        title:"Checkout",
        path:"checkout",
        subMenu:false,
        showInMenu:false,
        component:<Checkout />
    }
    ,
    {
        title:"UpdateAddress",
        path:"updateaddress",
        subMenu:false,
        showInMenu:false,
        component:<UpdateAddress />
    }
]
