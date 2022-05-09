import React, { useEffect,useState } from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import ProductDetails from '../shop/ProductDetails';
import Grid from "@mui/material/Grid";
import {useDispatch,useSelector} from "react-redux";
import { AddAllProduct,allProducts } from '../../../app/Slices/ProductSlice';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
const ProductListing = () => {
    const {Category} = useParams();
    const dispatch = useDispatch();
    const productsData = useSelector(allProducts);
    console.log(productsData);
    const loadProductByCat = (Category) => {
    if(typeof(Category)=="undefined"){
         axios
            .get('https://fakestoreapi.com/products/')
            .then((response) => {
            console.log(response.data);
            dispatch(AddAllProduct(response.data));
            })
            .catch((err) => {
              console.log(err);
            })
        }
      };
      useEffect(() => {
        loadProductByCat(Category);
      }, [Category]);
    
    return ( <>
       <div class="container">
            <div class="row">
            <div class="content-column col-lg-12">
            <div class="content-area">
              <div style={{ margin: "auto",
              width: "100%",
              /*border: "3px solid green",*/
              padding: "10px",}}>
                  <h3>Products</h3> 
                  <hr></hr>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                      m: 1,
                      width: 300,
                      height: 100,
                      alignContent:"center",
                      p:1,
                      border:"1pd solid grey"
                    },
                  }}
                >
               
                {(typeof(Category)!="undefined")? Array.isArray(productsData)&& productsData.filter(productsDataItem => productsDataItem.category == Category).map((prod,i)=>{ console.log(prod.id);
                    return <ProductDetails key={prod.id} {...prod}/> 
                  }): (Array.isArray(productsData)&& productsData.map((prod,i)=>{ console.log(prod.id);
                     return <ProductDetails key={prod.id} {...prod}/> }))}
                </Box>
                </div>
                </div>
                </div>
                </div>
          </div> 
 </> );
}
 
export default ProductListing;