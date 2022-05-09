import React from 'react';
import { useSelector } from "react-redux";
import { selectAuthUser } from "../../../app/Slices/AuthSlice";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const Checkout = () => {
    const loginUser = useSelector(selectAuthUser);
    console.log(loginUser[0]);
    return ( <>     
            <Box sx={{ flexGrow: 1 }} style={{alignItems:"center",
        paddingLeft: "263px"}}>
                <Grid container spacing={4} style={{alignItems:"left", justify:"left",
                marginTop:"10px",paddingLeft:"40px",border:"1px solid red",width:"800px"}}>
                    <Grid item xs={6} style={{alignItems:"left"}}>
                         <Item><strong>Shipping Address</strong></Item>
                         <Item>User Name  :   {loginUser[0]?.name?.first} {loginUser[0]?.name?.last}</Item>
                         <Item>User Email  :  {loginUser[0]?.email}  </Item>
                         <Item>User Mobile  :  {loginUser[0]?.mobile}  </Item>
                    </Grid>
                    <Grid item xs={6}>
                    <Item></Item>
                    </Grid>
                </Grid>
            </Box></> );
}
 export default Checkout;