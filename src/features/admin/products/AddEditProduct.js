import React from 'react';
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import {Button} from "@mui/material/Button"
import ProductForm from './ProductForm';
const AddEditProduct = ({open,handleClose,loadProducts,currentProduct,operation}) => {

    return (<>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Products</DialogTitle>
            <DialogContent><ProductForm operation = {operation} loadProducts={loadProducts}
            handleClose={handleClose} currentProduct={currentProduct}/></DialogContent>
       </Dialog></> );
}
 
export default AddEditProduct;