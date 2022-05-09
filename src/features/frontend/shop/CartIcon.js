import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch,useSelector } from "react-redux";
import { addProduct, removeProduct,selectCart } from "../../../app/Slices/CartSlice";
import CartDetails from '../../frontend/shop/CartDetails';
import React from 'react';
const CartIcon = ({cart}) => {
    const dispatch = useDispatch();
    
let count=0;
//reduce
console.log(cart.length+"CartLength");

 const [open, setOpen] = React.useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);

 const rows = cart;
 let totalPrice = 0;
    return ( <>
    <div style={{top: "96px",right: "38px",position: "absolute",color: "yellow"}}>
      <button  onClick={handleOpen}><ShoppingCart></ShoppingCart>{cart.length}</button>
     </div> 
     <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       <CartDetails cart={cart}/>
      </Modal>
     
    </> );
}
 
export default CartIcon;