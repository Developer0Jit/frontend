import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { useDispatch,useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
import { addProduct, removeProduct,selectCart,DeleteCart,IncreaseQuantity,DecreaseQuantity} from "../../../app/Slices/CartSlice";

const CartDetails = ({cart}) => {
  const navigateuser = useNavigate();
  const dispatch = useDispatch();
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const rows = cart;
  let totalPrice = 0;
  let TotalCart=0;
  const handleClearFunc = () => {
    dispatch(removeProduct());
  };
  function TotalPrice(price,tonggia){
    return Number(price * tonggia).toLocaleString('en-US');
  }

  const processedToCheckout= ()=>{
    const token =sessionStorage.getItem("token");
    if(token){
        navigateuser("/checkout");
    }else {
        navigateuser("/login");
    }
  }

    return ( <>
       <Box sx={style}>
       <div className="row">
            <div className="col-md-12">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                {
                   Array.isArray(cart) && cart.map((item,key)=>{
                      TotalCart+=Number(TotalPrice(item.price,item.qty));
                        return(
                            <tr key={item.id}>    
                            <td><i className="badge badge-danger" style={{color:"red"}} onClick={()=>dispatch(DeleteCart(item.id))}>X</i></td>
                            <td>{item.title}</td>
                            <td><img src={item.image} style={{width:'70px',height:'70px'}}/></td>
                            <td>{item.price}$</td>
                            <td>
                                    <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>dispatch(DecreaseQuantity(item))}>-</span>
                                    <span className="btn btn-info">{item.qty}</span>
                                    <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>dispatch(IncreaseQuantity(item))}>+</span>
                            </td>
                           
                            <td>{TotalPrice(item.price,item.qty)}$</td>
                        </tr>
                        )
                    })
                        
                }
                {(Array.isArray(cart)&& cart.length>0)? <tr><td colSpan="5">Total Carts</td><td>{TotalCart}$</td>
               </tr>
                :<tr> <td colSpan="6">No Data found</td></tr> }
                     {(Array.isArray(cart)&& cart.length>0)? <tr> <td colSpan="4"></td><td colSpan="2">
                            <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>processedToCheckout()}>Procced To Checkout</span>
                     </td></tr>
                :<tr> <td colSpan="6"></td></tr> }
                </tbody>
              
            </table>
            </div>
        </div>
        </Box>
    </> );
}
 
export default CartDetails;