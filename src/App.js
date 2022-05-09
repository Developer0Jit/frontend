import React from 'react';
import {Routes,Route, Navigate} from "react-router-dom";
import BlankLayout from './layouts/BlankLayout';
import SecuredLayout from './layouts/SecuredLayout';
import store from  './app/Store'
import { Provider } from 'react-redux';
function App() {
  const ProtectedRoute =(children)=>{
    return sessionStorage.getItem("token") ?
    (children):(
      <Navigate to="/login" />
    )
  }
  
  
  return (
    <> 
      <Provider store={store}>
       <Routes>
        <Route path="/secured/*" element={<SecuredLayout/>}/>
        <Route path="/*" element={<BlankLayout/>}/>
      </Routes>
      </Provider>
      </>
  );
}

export default App;
