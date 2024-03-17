import React from 'react';
import './Footer.css'
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
  return (
    <div class="footer">
      <div class="heading">
        {/* <h2>Faraz<sup>™</sup></h2> */}
      </div>
      <div class="content">
        <div class="services">
          <h4>Services</h4>
          <p><a href="#">Frams Print</a></p>
          <p><a href="#">Anniversary Frames</a></p>
          <p><a href="#">Valentine Frames</a></p>
          <p><a href="#">Birthday  Frames</a></p>
          <p><a href="#">More....</a></p>
        </div>
        <div class="social-media">
          <h4>Social</h4>
          <p>
            <a href="#"
              ><i class="fab fa-linkedin"></i> Linkedin</a
            >
          </p>
          <p>
            <a href="#"
              ><i class="fab fa-twitter"></i> Twitter</a
            >
          </p>
          <p>
            <a href="https://github.com/farazc60"
              ><i class="fab fa-github"></i> Github</a
            >
          </p>
          <p>
            <a href="https://www.facebook.com/codewithfaraz"
              ><i class="fab fa-facebook"></i> Facebook</a
            >
          </p>
          <p>
            <a href="https://www.instagram.com/codewithfaraz"
              ><i class="fab fa-instagram"></i> Instagram</a
            >
          </p>
        </div>
        <div class="links">
          <h4>Quick links</h4>
          <p><a href="#">Home</a></p>
          <p><a href="#">About</a></p>
          <p><a href="#">Blogs</a></p>
          <p><a href="#">Contact</a></p>
        </div>
        <div class="details">
          <h4 class="address">Address</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit. Cupiditate, qui!
          </p>
          <h4 class="mobile">Mobile</h4>
          <p><a href="#">+91-12225*****</a></p>
          <h4 class="mail">Email</h4>
          <p><a href="#">farazc60@gmail.com</a></p>
        </div>
      </div>
      <footer>
        <hr />
        © 2022 codewithRajat.
      </footer>
    </div>
  );
};

export default Footer;
