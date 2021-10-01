import React, { Component,  useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import Logo from "../img/logo.png";
import Footer from './Footer'
import Fade from 'react-reveal/Fade';
import { motion } from "framer-motion";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";



const pageVariants = {
  initial: {
    y: "200vh",
    x:'0',
    opacity: 0
  },
  visible: {
    opacity: 1,
    y:"0",
    x:'0',
    transition: {
      duration:2,
    }
  }, 
  exit: {
    x:"0",
    y: "0",
    opacity:0,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
      
    }
  }
}




const navBar = {
  open: {
    opacity: 1,
    x:0,
  },
  closed: {
    opacity:0,
    x:'-100%'
  }
}


const toggleBar = {
  open: {
    opacity:1,
    y:0,
    height: "auto",
    display: "block"
  },
  closed: {
    opacity:0,
    y:'-10px',
    height: "0px",
    display: "none"
  }
}


const NavBarFunction = () => {
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <div className="menu-bar col-6 d-flex d-md-none d-lg-none d-xl-none">
    <span href="" id="toggle-open"  onClick={() => setShow(show => ! show) }>
      <FontAwesomeIcon icon={faBars} />
    </span>
    <motion.div
    animate= {show ? "open" :"closed"}
    variants={navBar}
    transition={{duration: 0.5}}
    id="toggle-menu" className="toggle-menu">
      <div className="toggle-content">
        <div className="toggle-head">
          <h5>Menu</h5>
          <span id="toggle-close"  onClick={() => setShow(show => ! show) }>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>

        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about"> About </Link>{" "}
          </li>
          <li onClick={() => setToggle(toggle => ! toggle) } className="drop-menu" id="drop-down">
            <span>
              Shop
              <FontAwesomeIcon icon={faCaretDown} />
            </span>
            <motion.ul
             animate= {toggle ? "open" :"closed"}
             variants={toggleBar}
             transition={{duration: 0.5}}
            id="drop-menu">
              <li>
                <Link to="/shop"> All products </Link>
              </li>
              <li>
                <Link to="/shop"> Exclusive pieces</Link>
              </li>
            </motion.ul>
          </li>

          <li>
            <Link to="/delivery"> Delivery </Link>
          </li>
          <li>
          <Link to="/blog"> Blog</Link>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </motion.div>
  </div>
  )
}



export class ContactPage extends Component  {
  render(){  
    return (

      <motion.div
      variants = {pageVariants} 
          initial = "initial"
          animate = "visible"
          exit = "exit"
      className="contactPage">
        <header>
          <div className="container">
            <div className="row align-items-center ">
              <div className="head-search col-6 d-none d-md-flex d-lg-flex d-xl-flex col-md-4 col-lg-3 col-xl-3">
                <form action="">
                  <input type="text" placeholder="Search for product..." />
                  <button>
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </form>
              </div>
              <div className="head-logo col-12 col-md-4 col-lg-7 col-xl-7 d-flex justify-content-center">
                <a href="">
                  <img src={Logo} alt="" />
                </a>
              </div>
              <div className="head-icons d-none d-md-flex d-lg-flex d-xl-flex col-6 col-md-4 col-lg-2 col-xl-2 ">
                <a href="">
                  <FontAwesomeIcon icon={faUser} className="head-i" />{" "}
                </a>
                <Link to="/cards">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="head-i shop-cart"
                  />{" "}
                </Link>
              </div>
            </div>

            <div className="row mb-5">
             
             <NavBarFunction />



              <nav className="d-none d-md-flex d-lg-flex d-xl-flex">
                <ul>
                  <li>
                    <Link to="/"> Home</Link>
                  </li>
                  <li>
                    <Link to="/about"> About </Link>
                  </li>
                  <li className="drop-menu">
                    <Link to="/shop">Shop</Link>
                    <ul>
                      <li>
                        <Link to="/shop"> All products </Link>
                      </li>
                      <li>
                        <Link to="/shop"> Exclusive pieces</Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link to="/delivery"> Delivery </Link>
                  </li>
                  <li>
                  <Link to="/blog"> Blog</Link>
                  </li>
                  <li>
                  <Link to="/contact"> Contact</Link>
                  </li>
                </ul>
              </nav>

              <div className="menu-right col-6 d-flex d-md-none d-lg-none d-xl-none">
                <a href="">
                  <FontAwesomeIcon icon={faUser} />
                </a>
                <Link to="/cards">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </Link>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <Link to="/" className="delivery-links">
                  {" "}
                  Home
                </Link>
                <span>/</span>
                <Link to="/contact" className="delivery-links">
                  {" "}
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </header>

        <section>
          <div className="container">
            <div className="row mt-5 align-items-center f-column justify-content-center">
                <div className="map-part col-12 ">
              <Map google={this.props.google} zoom={14} className="map"
               initialCenter={{
                lat: 40.3777,
                lng: 49.8920
              }}
              >
                <Marker
                  onClick={this.onMarkerClick}
                  name={"Current location"}
                />

                <InfoWindow onClose={this.onInfoWindowClose}>
                  
                </InfoWindow>
              </Map>
              </div>

              <Fade top>
              <div className="contact-part col-10 col-md-12 col-lg-7 col-xl-8 pr-auto pl-auto">
              <div className="row align-items-center justify-content-center">
                <div className="contact-i col-12 col-md-6 col-lg-6 col-xl-6 mb-4 ">
                  <motion.div className="drag-icon"
                 whileHover={{ opacity: 1 }}
                 whileTap={{
                     opacity: 1,
                     scale: 1.05,
                     boxShadow: "0px 5px 8px #222",
                 }}
                 drag
                 dragConstraints={{
                     top: -150,
                     right: 100,
                     bottom: 150,
                     left: -100,
                 }}
                 dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                 dragElastic={0.5}
                 whileTap={{ cursor: "grabbing" }}
                  className="icon">
                  <FontAwesomeIcon icon={faEnvelopeOpenText} className="message-i"  />
                  </motion.div>
                
                </div>
                <div className="contact-txt col-12 col-md-6 col-lg-6 col-xl-6">
                      <h5>
                        Get in touch
                      </h5>
                      <h2>Have some questions ?</h2>
                      <form action="">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                        <input type="text" placeholder="What is your e-mail?" />
                        <textarea type="text" placeholder="Send a message..." rows="7" />
                        <button>Send a message</button>
                        
                      </form>
                </div>
              </div>

            </div>
            </Fade>

            </div>
          </div>
        </section>


        <Footer />
      </motion.div>
    );
  }
}

// export default ContactPage;


export  default GoogleApiWrapper({
    apiKey: ("AIzaSyCq_SPXo0t0r5V-5mtp-yKkaMGXzCJuuZM")
  })(ContactPage)