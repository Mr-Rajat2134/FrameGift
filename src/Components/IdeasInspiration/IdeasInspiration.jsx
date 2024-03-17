import React from 'react';
import './IdeasInspiration.css';
import   InspirationIMG1 from '../images/InspirationIMG1.jpg'

const IdeasInspiration = () => {
  return (
    <div id='IdeasInspiration' className='IdeasInspirationContainer'>
      <div className='IdeasInspiration_Text'>
        <h1>Ideas and Inspiration</h1>
        <p>Explore specially curated personalized Gifts, tasteful Décor and meaningful keepsakes with us. Let our range of specially curated personalized goodies tell your life’s story and elevate your art of gifting. Now capture life’s fondest memories & make them live forever. Experience the Zoomin promise today!</p>

<div className='IdeasInspiration_list'  >
<ul    >
    <li>Art Frames</li>
    <li>Art Cards</li>
    <li>Frame,Family Photos</li>
    <li>Personalised led wooden frame</li>
    <li>Map Frams</li>
    <li>Personalized Baby Frams</li>
    
    </ul>
    </div>


      </div>
      <div className='IdeasInspiration_Image'>
        <img src={InspirationIMG1} alt='Ideas and Inspiration' />
      </div>
    </div>
  );
};

export default IdeasInspiration;
