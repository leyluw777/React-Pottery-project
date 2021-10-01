import React, {useState} from 'react'
import { motion } from "framer-motion";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Logo from "../img/logo.png";
import Discount from "../img/shop-discount.jpg";
import SideDis from "../img/side-dis.jpg";
import CartItem from './CartItem';
import data from './Data';
import CartItems from './CartItems'
import Footer from './Footer'
import {useCart} from 'react-use-cart';


const headerVariants = {
    initial: {
      y: "-50vh",
      opacity:0,
    },
    visible: {
      opacity:1,
      y:"0vh",
      transition: {
        duration: 2,
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
  

const headVariants = {
    initial: {
      y:"-50vh",
      opacity:0
    },
    visible: {
      opacity:1,
      y: "0vh",
      transition: {
        delay:2.2,
        duration:2,
        type:"spring",
        stiffness: "200"
      }
    }
}

const pageVariants = {
    initial: {
      y: "200vh",
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
      x:"-50vw",
      y: "0",
      opacity:0,
      transition: {
        ease: 'easeInOut',
        duration: 0.78,
        
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



function ShopPage() {
    const [show, setShow] = useState(false);
    const [toggle, setToggle] = useState(false);
    const{totalItems} = useCart();

    return (
        <motion.div
        variants = {pageVariants} 
        initial = "initial"
        animate = "visible"
        exit = "exit"
        className="shopPage">
             <motion.header 
          variants={headerVariants}
          initial="initial"
          animate="visible"
        >
          <div className="container header-c">
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
                <Link to="/cards" href="">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="head-i shop-cart"
                  />{" "}
                  <sup>{totalItems}</sup>{" "}
                </Link>
              </div>
            </div>

            <div className="row ">
              <div className="menu-bar col-6 d-flex d-md-none d-lg-none d-xl-none">
                <span href="" id="toggle-open" onClick={() => setShow(show => ! show) }>
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
                      <span id="toggle-close" onClick={() => setShow(show => ! show) }>
                        <FontAwesomeIcon icon={faTimes} />
                      </span>
                    </div>

                    <ul>
                      <li>
                        <Link to="/"> Home </Link>
                      </li>
                      <li>
                        {" "}
                        <Link to="/about"> About </Link>{" "}
                      </li>


                      <motion.li onClick={() => setToggle(toggle => ! toggle) }
                       
                      className="drop-menu" id="drop-down"  >
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
                      </motion.li>



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
                  </div>
                </motion.div>
              </div>
            

              <div className="menu-right col-6 d-flex d-md-none d-lg-none d-xl-none">
                <a href="">
                  <FontAwesomeIcon icon={faUser} />
                </a>
                <Link to="/cards">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </Link>
              </div>
            </div>

            <div className="row align-items-center justify-content-center flex-column head-txt">
              <motion.h2
                variants={headVariants}
                initial="initial"
                animate="visible"
              > Shop  </motion.h2>
            </div>

            <div className="row flex-row align-items-center justify-content-between">
              <div className="links-content col-12">
                <Link to="/" className="aboutLink">
                  
                  Home
                </Link>
                <span>/</span>
                <Link to="/shop" className="aboutLink">
                  
                  Shop
                  
                </Link>
              </div>
            </div>
          </div>
        </motion.header>

      <section>
        <div className="container">
         
          <div className="row mt-5 mb-5">
    
            <aside className="d-none d-md-flex d-lg-flex d-xl-flex col-md-2 col-lg-2 col-xl-2">
           <h4>Filter</h4>
           <p className="p-head">Colors </p>

           <p>
             <span><div className="color-idenf-1"></div>  White</span>
             <span>(14)</span>
           </p>
           <p>
             <span><div className="color-idenf-2"></div>  Black</span>
             <span>(10)</span>
           </p>
           <p>
             <span><div className="color-idenf-3"></div>  Pink</span>
             <span>(7)</span>
           </p>
           <p>
             <span><div className="color-idenf-4"></div>  Blue</span>
             <span>(17)</span>
           </p>
           <p>
             <span><div className="color-idenf-5"></div>  Brown</span>
             <span>(20)</span>
           </p>
           <p>
             <span><div className="color-idenf-6"></div>  Green</span>
             <span>(5)</span>
           </p>
           
        <img src={SideDis} alt="" />
           
          
            </aside>


            <div className="cards col-12 col-md-10 col-lg-10 col-xl-10">
            <div className="sectionHead col-12 col-md-12 col-lg-12 col-xl-12">
              <img src={Discount} alt="" />
              <h2>Our products </h2>
              <hr />
              <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable that it has a more-or-less normal distribution of letters.</p>
            </div>
            <CartItems />
            </div>


          </div>
        </div>
      </section>
 

<Footer />
        </motion.div>
    )
}

export default ShopPage
