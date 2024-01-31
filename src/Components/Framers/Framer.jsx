import React from 'react'
import './Framer.css'
import poster from '../images/Poster.webp'

export default function Framer() {
  return (
    <div  id='Framed'>
        <div  className='Texts'>
            <h1>Share your life, one frame <br /> at a time!</h1>
            <p>Pick from 100+ beautiful Framed Prints. Perfect keepsake gifts for house-warming, birthdays, anniversary & more.</p>

            <h2  className='MRP'>  Starts at Rs. <span>250</span></h2>


</div>


<div className="Framed_IMG"   >
    <img src={poster} alt=""   className='poster'  />
</div>

       
      
    </div>
  )
}
