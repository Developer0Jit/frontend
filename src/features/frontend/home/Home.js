import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
const Home = () => {
    return (  <>
     <div class="site">
    <div class="site-content">
    <div class="container">
    <div class="row">
    <div class="content-column col-lg-12">
    <div class="content-area">
    <header class="post-header">
    
        <img src="/asset/images/Header1.jpg" style={{width:"100%",height:"250px"}}alt="codetea"></img>
    
    </header>
    <hr style={{border:"1px solid #222"}}></hr>
    <div style={{ margin: "auto",
  width: "100%",
  /*border: "3px solid green",*/
  padding: "10px",}}>
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
      <Paper elevation={8} >
      Lorem ipsum is placeholder text commonly 
      used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
      </Paper>
      <Paper elevation={8}>
      Lorem ipsum is placeholder text commonly 
      used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
      </Paper>
      <Paper elevation={8} >
      Lorem ipsum is placeholder text commonly 
      used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
      </Paper>
    </Box>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>);
}
 
export default Home;