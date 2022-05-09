import React, { useEffect,useState } from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch,useSelector } from "react-redux";
import { addProduct, removeProduct,selectCart } from "../../../app/Slices/CartSlice";
import { allProducts } from "../../../app/Slices/ProductSlice";
const Product = (addFunc)=> {
  console.log("Inside Product");
  const dispatch = useDispatch();
    const {Category} = useParams();
    const {pid} = useParams();
    const productsData = useSelector(allProducts);
    const [productData,setProductData] = useState({});
    
    const loadProductById = (pid) => {
        console.log(productsData);
        const products = (Array.isArray(productsData))&&productsData.filter(productsDataItem=>(productsDataItem.id==pid));
        //console.log(products[0]);
        setProductData(products[0]);
      };
      useEffect(() => {
        loadProductById(pid);
      }, [pid]);
   

      const handleAddFunc=({ id,
        title,
        price,
        image,
        category,
        description,})=>{
       // console.log(cartData);
      
       // console.log(cartData);
        dispatch(addProduct( {id:id,
          title:title,
          price:price,
        image:image,
        category:category,
        description:description,
          qty:1,
        }));
        
      }
      
    
    return ( <>
    <div style={{display:'flex', height:"100%"}}>
       <div style={{flex: "auto",marginRight: "10px"}}>
         <img src={productData.image} style={{width:"150px",height:"80%"}} />
        </div>
        <div style={{display:'flex-wrap', margin:'15px'}}>
            <strong>{productData.title}</strong> <br/><br/>
             {productData.description}
        
            <p> <strong>Price</strong>: {productData.price}</p>
         <Button
          onClick={()=>handleAddFunc(productData)}
          variant="outlined"
         >
          Add To Cart 
        </Button>
       
        </div>
    </div>
    </> );
}
 
export default Product;