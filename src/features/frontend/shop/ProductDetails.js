import React from 'react';
import { Link } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Paper } from '@mui/material';
const ProductDetails = ({id,title,price,description,image,category}) => {
    console.log(category);
    return ( <>
         <Paper elevation={8} style={{height:"350px"}}>
         <div style={{display:"flex",height:"50px"}}><strong>{(title.length > 50)? title.substring(0,50):title}...</strong></div>
                    <img src={image} style={{width:"150px",height:"25%"}} />
                    <div style={{display:"flex",height:"100px"}}> 
                    <p> {(description.length > 120)? description.substring(0,120):description}...</p></div>
                      <h5>price : {price}</h5>
                      <div style={{display:"flex"}}>
                    <Button
                    style={{width:"200px"}}
                    onClick={() => {}}
                    variant="contained"
                    component={Link}
                    to={{
                      pathname: `/shop/${category}/${id}`,
                      
                    }}
                    >
                    View Detail
                    </Button>
                    &nbsp;&nbsp;
                    <Button
                    onClick={() => {}}
                    variant="contained"
                    component={Link}
                    to={{
                      pathname: `/`,
                      
                    }}
                    style={{width:"200px"}}
                    >
                    Add To Cart
                    </Button>
            </div>
        </Paper>
     </> );
}
 
export default ProductDetails;