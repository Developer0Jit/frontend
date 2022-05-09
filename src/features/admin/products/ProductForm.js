import { React,useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ProductService from "../../../services/ProductService";
const ProductForm = ({operation,loadProducts,handleClose,currentProduct}) => {
    console.log(operation);
    const [product,setProduct]=useState({});
   
    const handleChange=(e)=>{
        const [name,value] = e.target;
        setProduct({...product,[name]:value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (operation == "edit") {
            ProductService.updateProduct(product.id, product)
            .then((response) => {

                loadProducts();
              handleClose();
              alert("Product updated");
            })
            .catch((err) => {
              alert("Could not updated the product");
            });
        } else {
            ProductService.createProduct(product)
            .then((response) => {
                loadProducts();
              handleClose();
    
              alert("Product created");
            })
            .catch((err) => {
              alert("Could not created the product");
            });
        }
      };
      useEffect(() => {
          console.log(currentProduct);
        if (currentProduct) setProduct({ ...currentProduct });
      }, [currentProduct]);
    return ( <>
    <Grid container spacing={4}>
        <Grid item xs={12} md={12}>
            <TextField 
            varient="outlined"
            fullWidth
            label="Product Name"
            name='ProductName'
            value={product?.productName}
            onChange={handleChange}
         />
        </Grid>
        <Grid item xs={12} md={12}>
            <TextField 
            variant="outlined"
            fullWidth
            name="brand"
            label="Brand"
            value={product?.brand}
            onChange={handleChange}
            />
        </Grid>
        <Grid item xs={12} md={12}>
            <TextField 
            variant="outlined"
            fullWidth
            name="quentity"
            label="Quantity"
            value={product?.quentity}
            onChange={handleChange}
            />
        </Grid>
        <Grid item xs={12} md={12}>
            <TextField 
            varient="outlined"
            fullWidth
            name="price"
            label="Price"
            value={product?.price}
            onChange={handleChange}
            />
          </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            {operation == "edit" ? "Update" : "Create"}
          </Button>
        </Grid>
    </Grid>
    </> );
}
 
export default ProductForm;