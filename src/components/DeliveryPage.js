import React, { Component, useState } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import Footer from './Footer'
import Logo from '../img/logo.png'
import DeliveryImg from '../img/delivery.png'
import {useCart} from 'react-use-cart';


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
        when: "beforeChildren",
        transition: {
          duration:2,
        }
      }, 
      exit: {
        x:"-50vw",
        y: "0",
        opacity:0,
        overflow: "hidden",
        transition: {
          ease: 'easeInOut',
          duration: 1,
          
        }
      }
}


const imgVariants = {
    initial: {
        x: "0",
        y:0,
        skewX: "20deg",
    },
    visible: {
        x: "0",
        y:0,
        skewX: "0deg",
        transition: {
            duration: 0.2,
            delay: 2,
            type: "spring",
            stiffness: "150",
        }
    }
}


const locVariants = {
    initial: {
        scale: 1,
        originy: 0,
        rotate: ["30deg", "-30deg"],
    },
    visible: {
        scale: 0.5,
        opacity:1,
        rotate: "0deg",
        transition: {
            duration: 0.8,
            delay: 2.5,
            yoyo: 5,
        }
    }
}

const offerVariants = {
    initial: {
        opacity: 0,
        y: "-20vh"
    },
    visible: {
        opacity: 1,
        y: "0vh",
        transition: {
            duration: 1,
            delay: 3
        }
    }
}

const headerVariants =  {
    initial: {
        x: "-100vw",
        y:0,
        skewX: "-40deg",
    },
    visible: {
        x: "0",
        y:0,
        skewX: "0",
        transition: {
            duration: 0.5,
            delay: 2,
            type: "spring",
            stiffness: "80",
        }
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


const Offers = (props) => {
    return(
        <motion.div
        variants = {offerVariants}
        initial ="initial"
        animate="visible"
        className="offer col-12 col-md-12 col-lg-6 col-xl-6">
            <span> &#10003; </span>
            <div className="offer-txt">
                <h5>{props.head}</h5>
                <p>{props.content}</p>
            </div>
        </motion.div>
    )
}


const DeliveryPage = () => {
    const [show, setShow] = useState(false);
    const [toggle, setToggle] = useState(false);
    const{totalItems} = useCart();
        return (
            <motion.div
            variants = {pageVariants} 
            initial = "initial"
            animate = "visible"
            exit = "exit"
            className = "deliveryPage">
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
                        <a href=""><FontAwesomeIcon icon={faUser} className="head-i" /> </a>
                        <Link to="/cards"><FontAwesomeIcon icon={faShoppingCart} className="head-i shop-cart" />  </Link>
                        </div>
                    </div>


                    <div className="row mb-5">
                        <div className="menu-bar col-6 d-flex d-md-none d-lg-none d-xl-none">
                            <span href="" id="toggle-open" onClick={() => setShow(show => ! show) }>
                            <FontAwesomeIcon icon={faBars}  />
                            </span>
                            <motion.div
                             animate= {show ? "open" :"closed"}
                             variants={navBar}
                             transition={{duration: 0.5}}
                            id="toggle-menu" className="toggle-menu">
                                <div className="toggle-content">
                                <div className="toggle-head">
                                    <h5>Menu</h5>
                                    <span id="toggle-close" onClick={() => setShow(show => ! show) }>
                                    <FontAwesomeIcon icon={faTimes} />
                                    </span>
                                </div>
                              
                            <ul>
                                <li><Link to="/"> Home</Link></li>
                                <li> <Link to="/about"> About </Link> </li>
                                <li onClick={() => setToggle(toggle => ! toggle) } className="drop-menu" id="drop-down"><span >Shop
                                <FontAwesomeIcon icon={faCaretDown} />
                                 </span>
                                <motion.ul
                                animate= {toggle ? "open" :"closed"}
                                variants={toggleBar}
                                transition={{duration: 0.5}}
                                 id="drop-menu">
                                    <li><Link to="/shop"> All products </Link></li>
                                    <li><Link to="/shop"> Exclusive pieces</Link></li>
                                </motion.ul>
                                </li>
                               
                                <li><Link to="/delivery" > Delivery </Link></li>
                                <li><Link to="/blog"> Blog</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                            </div>
                            </motion.div>
                        </div>
                        <nav className = "d-none d-md-flex d-lg-flex d-xl-flex"> 
                            <ul>
                                <li><Link to="/"> Home</Link></li>
                                <li><Link to="/about"> About </Link></li>
                                <li className="drop-menu"><Link to="/shop" href="" >Shop</Link>
                                <ul>
                                    <li><a href=""> All products </a></li>
                                    <li><a href=""> Exclusive pieces</a></li>
                                </ul>
                                </li>
                               
                                <li><Link to="/delivery" > Delivery </Link></li>
                                <li><Link to="/blog"> Blog</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>

                        <div className="menu-right col-6 d-flex d-md-none d-lg-none d-xl-none">
                            <a href="" >
                            <FontAwesomeIcon icon={faUser} />
                            </a>
                            <Link to="/cards">
                            <FontAwesomeIcon icon={faShoppingCart} />
                            </Link>
                        </div>
                    </div>

                <div className="row">
                    
                    <div className="col-12"> 
                    <Link to="/" className = "delivery-links"> Home</Link>
                    <span>/</span>
                    <Link to="/delivery" className = "delivery-links"> Delivery</Link>
                    </div>
                </div>


                </div>
                </header>

                <section>
                    <div className="container">
                        <div className="row  mt-5 align-items-center ">
                            <div className="txt-col col-12 col-md-12 col-lg-7 col-xl-7 ">
                                <motion.h2 
                                variants = {headerVariants}
                                initial = "initial"
                                animate= "visible"
                                >Our express delivery system</motion.h2>
                                <div className="row">
                                    <Offers head="Fast delivery" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error id corrupti dolore recusandae ab omnis architecto voluptates molestiae possimus harum?"  />
                                    <Offers head="Online delivery" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias sint id molestias esse dicta velit vitae temporibus voluptate repellendus, ipsa perspiciatis praesentium eos, itaque quod nulla delectus deserunt dignissimos incidunt." />
                                    <Offers head="Select items" content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatibus suscipit quo incidunt, rem laborum." />
                                    <Offers head="Carriage" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error id corrupti dolore recusandae ab omnis architecto voluptates molestiae possimus harum?" />
                                </div>

                              
                            </div>
                            <div className="icon-col col-12 col-md-12 col-lg-5 col-xl-5 mt-3">
                                <motion.div
                                 variants = {locVariants}
                                 initial = "initial"
                                 animate = "visible"
                                className="location-i">
                                <FontAwesomeIcon
                               
                                icon={faMapMarkerAlt} className="deliveryLoc " />
                                </motion.div>
                           
                             
                               
                                <motion.img
                                 variants = {imgVariants}
                                 initial ="initial"
                                 animate = "visible" 
                                src={DeliveryImg} alt="" />




                            </div>

                        </div>

                        <div className="row mb-5">
                           <Marquee className="marq-txt" direction="right" speed="100" >  We will deliver faster  </Marquee>
                        </div>
                    </div>
                </section>
                <Footer  />
            </motion.div>
        )
    }


export default DeliveryPage
