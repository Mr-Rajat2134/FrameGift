// import React from 'react'
// import './Framersprints.css'
// import img from '../images/cardIMG.webp'
// import { Divider } from '@mui/material'
// import { data } from '../../Data'
// import { Button } from 'react-scroll'
// import gif from '../images/gif.gif'

// const Framersprints = () => {
//   return (
//     <div id='Framesprints'  >
//         <div className='Framesprints_Text'>   
//         <h1>Framed Prints</h1>
//         <p>Display your memories in stunning Framed Prints.</p>
//         </div>
// {/* <img src={gif} alt="" className='gifIMG' /> */}


//         <div   className='Frams_Cards'  >

//             {
//                 data.map((item)=>(
//                     <div key={item.id}  className='F_Card' >
//                     <img src={item.Image} alt="" className='F_Img' />
//                     <Divider/>

                   
//                     <p>{item.title}</p>
//                     <h4>Rs. {item.price}</h4>



  
// <button className='F_btn'   >  Order Now</button>
                    


                    
//                                </div>
//                 ))
//             }
          
           




//         </div>
      
//     </div>
//   )
// }

// export default Framersprints



import React from 'react';
import './Framersprints.css';
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Box, Divider, Chip } from '@mui/material';
import { data } from '../../Data';

const Framersprints = () => {
  const itemsToShow = data.slice(0, 4); 
  return (
    <div id='Framesprints'>
      <div className='Framesprints_Text'>   
        <h1>Framed Prints</h1>
        <p>Display your memories in stunning Framed Prints.</p>
      </div>
      <Box sx={{
        display: 'flex',
        justifyContent:'center',
        // flex:'rap',
        flexDirection: { xs: 'column', sm: 'row' }, // Column layout on small screens, row layout on larger screens
        paddingLeft: { xs: '5rem', sm: '1rem' }, // No left padding on small screens, 5rem left padding on larger screens
        gap: '2rem'
      }}>
        {itemsToShow.map((item) => (
          <Card key={item.id} sx={{ maxWidth: 245, bgcolor: 'none', marginBottom: '1rem',borderRadius:"0.5rem" }}>
            <CardMedia
              component="img"
              alt={item.title}
              height="240"
              image={item.Image}
            />
            <Divider />
            <CardContent sx={{ bgcolor: '#FFD1DA', padding: '16px' }}> {/* Adjusted background color and padding */}
              <Typography sx={{ fontSize: '16px', fontWeight: '500' }} gutterBottom component="div">
                {item.title} 
              </Typography>
              {/* <Chip    label= {item.unicid} /> */}
              <Typography variant="body2" color="text.secondary">
            From   <Typography sx={{color:'black'}}>  ₹{item.price}</Typography>  
              </Typography>
            </CardContent>
            <CardActions sx={{ bgcolor: '#FFD1DA', padding: '16px', justifyContent: 'space-between' }}> {/* Adjusted background color, padding, and alignment */}
              <Button  sx={{color:'red'}}  size="small">Order Now</Button>
              {/* <Button size="small">Share</Button> */}
            </CardActions>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default Framersprints;
