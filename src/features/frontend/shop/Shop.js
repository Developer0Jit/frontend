import React, { useEffect,useState } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes,Route,useParams} from 'react-router-dom'
import axios from "axios";
import CategoriesListing from "../../frontend/shop/CategoriesListing";
import ProductListing from '../../frontend/shop/ProductListing';
import ProductDetails from '../../frontend/shop/ProductDetails';
import Product from '../../frontend/shop/Product';
import CartIcon from './CartIcon';
import { useDispatch,useSelector } from "react-redux";
//import { selectCart } from "../../../app/Slices/CartSlice";

const Shop = () => {
  
    const [cat,setCat] = useState([]);
    const cartItems = useSelector(selectCart);
    const loadCat = () => {
        axios
          .get(`https://fakestoreapi.com/products/categories`)
          .then((response) => {
            //  console.log(response.data);
            setCat(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    useEffect(() => {
        loadCat();
      }, []);
 
  
    return ( <>
     <div style={{display:'flex'}}>

     {<CartIcon cart={cartItems}/> }
       <div style={{flex: "auto"}}>
            <CategoriesListing items={cat}/>
       </div>
        <div style={{display:'flex-wrap', margin:'5px'}}>
              <Routes>
                <Route path="/" element={<ProductListing/>}/>
                <Route path="/:Category" element={<ProductListing/>}/>
                <Route path="/:Category/:pid" element={<Product/>}/>
              </Routes>
         </div>
    </div>
        
    </> );
}
 
export default Shop;