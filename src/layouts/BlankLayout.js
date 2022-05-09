import React from 'react';
import {Routes,Route} from "react-router-dom";
import frontendRoutes from '../shared/routes/frontendRoutes';
//import Header from '../ui/header/Header';
//import Footer from '../ui/footer/Footer';
const BlankLayout=()=>{
    
    return (  <>
    {/*Header*/}
    <Routes>
        {/*Array.isArray(frontendRoutes) && frontendRoutes.map(({path,component,subMenu},i)=>(
            <Route key={path+i} path={`${subMenu?path+"/*":path}`} element={component}/>
        )  )*/}
       
    </Routes>
    {/*Footer */}
    </>);
}
export default BlankLayout;