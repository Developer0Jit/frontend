import React from 'react';
import {Link} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
const CategoriesListing = (items) => {
    const objArr =   Object.values(items)[0];
    return ( <>
        <nav style={{display:"block",paddingTop:"18px"}}>
        <Typography marginLeft={4}><h3>Categories</h3></Typography>
        <hr></hr>
        <List>
            {Array.isArray(objArr) && objArr.map((ele,i)=>{
                return <ListItem>
                             <Link to={`/shop/${ele}`} style={{textDecoration:"none", color:"#000"}}>
                                <ListItemText  style={{width:"178px"}} primary={ele.toUpperCase()} />
                             </Link>
                     </ListItem>
            })}
       </List>
       </nav>
    </> );
}
 
export default CategoriesListing;