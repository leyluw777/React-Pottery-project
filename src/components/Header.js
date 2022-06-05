import Logo from '../img/logo.png'
import React, { Component, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { motion } from "framer-motion";
import Slide1 from '../img/slider1.jpg'
import Slide2 from '../img/slider2.jpg'
import Slider from "react-slick";
import { useCart } from 'react-use-cart';




const btnVariants =  {
  initial: {
      opacity: 0,
      rotate: "0deg",
      scale:1,
  },

  visible: {
    scale: 1,
    opacity:1,
    rotate: "0deg",
    transition: {
      // delay: 0.5,
      duration: .5,
    
    }
  },

  hover : {
    scale: 1.3,
    rotate: ["-45deg", "45deg","-45deg", "45deg","-45deg", "45deg","-45deg", "45deg","-45deg", "45deg"],
    transition: {
     ease: 'linear',
     type: "spring",
     stiffness: "600",
     duration: 1,
     yoyo: Infinity
      

    }
  }
}


const sliderP = {
  hidden: {
    x: "-150vw",
    opacity: 0,
   
   
  },
  visible: {
    opacity: 1,
    x:0, 
    transition: {
      duration: 1,
      delay: 2
    },
  
  }
}


const sliderHead = {
  hidden: {
    x: "150vw",
    opacity: 0,
    skewX: "40deg"

  },
  visible: {
    opacity: 1,
    x:0, 
    skewX: "0deg",
    transition: {
      duration: 1.2,
      delay: 2,
      
    },

  }

}

const headerVariants = {
  initial: {
    x: "0",
    y:"0",
    opacity:0,
    overflowX: "hidden",
  },
  visible: {
    x: "0",
    y: "0",
    opacity:1,
    transition: {
      duration: 2
    }
  },
  exit: {
    x:"0",
    y: "-100vh",
    opacity: 0,
    overflowX: "hidden",
    transition: {
      duration: 1,
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

export  class Fade extends Component {
  
    render() {
      const settings = {
        
        fade: true,
        infinite: true,
        speed: 1000,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1, 
        dots: false,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false,
              }
            },
            {
              breakpoint: 768,
              settings: {
                dots: true,
                arrows: false,
              }
            },
            {
              breakpoint: 600,
              settings: {
                dots: true,
                arrows: false,
              }
            }
          ]
      };
      return (
        <div className= "head-slick">
          
          <Slider {...settings}>
            <motion.div className="slide-1">
                <motion.h4
                  variants ={sliderP}
                  initial = "hidden"
                  animate = "visible"
                >Most popular outdoor decoration</motion.h4>
                <motion.h1
                  variants ={sliderHead}
                  initial = "hidden"
                  animate = "visible"
                >The Best Art Of Pottery</motion.h1>
                <motion.button
                  variants = {btnVariants}
                  initial = "initial"
                  animate = "visible"
                 whileHover = "hover"
                >Shop now</motion.button>
            </motion.div>


            <motion.div className="slide-2">
            <motion.h4
                variants ={sliderP}
                initial = "hidden"
                animate = "visible"
            >Most popular outdoor decoration</motion.h4>
            <motion.h1
              variants ={sliderHead}
              initial = "hidden"
              animate = "visible"
            >The Best Ceramic Statue</motion.h1>
            <motion.button
                variants = {btnVariants}
                initial = "initial"
                animate = "visible"
               whileHover = "hover"
            >Shop now</motion.button>
            </motion.div>
           
          </Slider>
        </div>
      );
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

const  Header = () => {
    
      const [show, setShow] = useState(false);
      const [toggle, setToggle] = useState(false)

      const{totalItems} = useCart();

        return (
            <motion.header
              variants = {headerVariants}
              initial="initial"
              animate ="visible"
              exit ="exit"
            >
                <div className="container">
                    <div className="row align-items-center pb-3 pb-xl-0 " >
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
                        <Link to="/cards" href=""><FontAwesomeIcon icon={faShoppingCart} className="head-i shop-cart" /> </Link>
                        </div>
                    </div>


                    <div className="row ">
                        <motion.div
                        
                        className="menu-bar col-6 d-flex d-md-none d-lg-none d-xl-none">
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
                                    <span id="toggle-close" onClick={() => setShow (show => ! show) } >
                                    <FontAwesomeIcon icon={faTimes} />
                                    </span>
                                </div>
                              
                            <ul>
                                <li><a href="">Home</a></li>
                                <li> <Link to="/about"> About </Link> </li>
                                <li
                                onClick={() => setToggle(toggle => ! toggle)}
                                className="drop-menu" id="drop-down"><span>Shop
                                <FontAwesomeIcon icon={faCaretDown} />
                                 </span>
                                <motion.ul
                                   animate= {toggle ? "open" :"closed"}
                                   variants={toggleBar}
                                   transition={{duration: 0.5}}
                                id="drop-menu">
                                    <li><Link href="" to="/shop"> All products </Link></li>
                                    <li><Link href="" to="/shop"> Exclusive pieces</Link></li>
                                </motion.ul>
                                </li>
                               
                                <li><Link to="/delivery" > Delivery </Link></li>
                                <li><Link to="/blog"> Blog</Link></li>
                                <li><Link to="/contact"> Contact</Link></li>
                            </ul>
                            </div>
                            </motion.div>
                        </motion.div>
                        <nav className = "d-none d-md-flex d-lg-flex d-xl-flex"> 
                            <ul>
                                <li><a href="">Home</a></li>
                                <li><Link to="/about"> About </Link></li>
                                <li className="drop-menu"><Link to="/shop" href="" >Shop</Link>
                                <ul>
                                    <li><Link href="" to="/shop"> All products </Link></li>
                                    <li><Link href="" to="/shop"> Exclusive pieces</Link></li>
                                </ul>
                                </li>
                               
                                <li><Link to="/delivery" > Delivery </Link></li>
                                <li><Link to="/blog"> Blog</Link></li>
                                <li><Link to="/contact"> Contact</Link></li>
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




                </div>
                <div className="head-slider">
    <Fade />
</div>
            </motion.header>
        )

}



export default Header
