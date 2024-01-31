


import React from 'react';
import './Footer.css';

// import { Link } from 'react-router-dom';
import logo from '../images/LogoF.png'
import logo2 from '../images/Logo2.png'
import { Divider } from '@mui/material';
import { Link } from 'react-scroll';
import { Parallax } from 'react-parallax';
import BG from '../images/Footerbg.png'


function App() {
  return (
    <div className="Ap">
     <Parallax blur={10} bgImage={BG} bgImageAlt="the cat" strength={200}>

  
      {/* Your main content goes here */}

      <footer>
        <Divider/>
        <div className="footer-container">
          <div className="footer-content">
            <Link   to='/'>
            <img src={logo} alt="Logo" id="logo" />
            </Link>
            <h2>Contact Us</h2>
            <p>Email: info@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>

          <div className="footer-content">
            <img src={logo2} alt="Image 2"     className="image2" />
            <h2>Quick Links</h2>
            <ul   className='Lists'  >
              {/* <li className='list'    ><a href="#">All</a></li>
              <li  className='list'   ><a href="#">Framed Prints</a></li>
              <li className='list'   ><a href="#">Anniversary Framers</a></li>
              <li className='list'   ><a href="#">Valentine Framers</a></li>
              <li className='list'   ><a href="#">Framer by Typs</a></li> */}
              <li className='list'    ><a href="#">All</a></li>
              <li  className='list'   ><a href="#">Framed Prints</a></li>
              <li className='list'   ><a href="#">Anniversary Framers</a></li>
              <li className='list'   ><a href="#">Valentine Framers</a></li>
              <li className='list'   ><a href="#">Framer by Typs</a></li>
            </ul>
          </div>
        </div>
      </footer>
      </Parallax>
    </div>
  );
}

export default App;

