import React from 'react'
import './Framersprints.css'
import img from '../images/cardIMG.webp'
import { Divider } from '@mui/material'
import { data } from '../../Data'
import { Button } from 'react-scroll'
import gif from '../images/gif.gif'

const Framersprints = () => {
  return (
    <div id='Framesprints'  >
        <div className='Framesprints_Text'>   
        <h1>Framed Prints</h1>
        <p>Display your memories in stunning Framed Prints.</p>
        </div>
{/* <img src={gif} alt="" className='gifIMG' /> */}


        <div   className='Frams_Cards'  >

            {
                data.map((item)=>(
                    <div key={item.id}  className='F_Card' >
                    <img src={item.Image} alt="" className='F_Img' />
                    <Divider/>

                   
                    <p>{item.title}</p>
                    <h4>Rs. {item.price}</h4>



  
<button className='F_btn'   >  Order Now</button>
                    


                    
                               </div>
                ))
            }
          
           




        </div>
      
    </div>
  )
}

export default Framersprints
