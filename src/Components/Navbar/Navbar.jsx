// Navbar.jsx
import React, { useState, useEffect } from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import "./Navbar.css";
import Logo from "../images/LogoF.png";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={`navbar ${scrolling ? "scrolling" : ""}`}>
      <div className="Gift">
        <Link
          to="Home"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <img src={Logo} alt="" width="" className="logo" />
        </Link>

        {/* <h6 className="texth6">FramerGIft</h6> */}
      </div>

      {/* Desktop Menu */}
      <div className={`desktopMenu ${isOpen ? "open" : ""}`}>
        <Link
          to="Home"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
          onClick={() => setOpen(false)}
        >
          All
        </Link>
        <Link
          to="Framesprints"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
          onClick={() => setOpen(false)}
        >
          Framed Prints
          {/* Birthday Framers */}
        </Link>
        <Link
          to="AnniversaryFramers"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
          onClick={() => setOpen(false)}
        >
          Anniversary Framers
        </Link>
        <Link
          to="ValentineFramers"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
          onClick={() => setOpen(false)}
        >
          Valentine Framers
        </Link>
        <Link
          to="IdeasInspiration"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
          onClick={() => setOpen(false)}
        >
          Ideas Inspiration
        </Link>
        <Link
        id="Hide"
          to="Contact"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
          onClick={() => setOpen(false)}
        >
       LOGIN
        </Link>
      </div>

    

      {/* Mobile Menu */}
      <div className={`menu ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <MenuIcon />
                   </div>

           
     



      <div className="icons">
        <ul>
          <li       >
            <ShoppingCartIcon />
          </li>
          <li>    
            <PersonIcon />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
