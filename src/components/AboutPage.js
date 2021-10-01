import React, { Component, useState } from "react";
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
import Footer from './Footer'
import { motion } from "framer-motion";
import { useCart } from 'react-use-cart';




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


const contentHead = {
  initial: {
    scale:0,
  
  },
  visible: {
    scale:1,
    rotate: "360deg",
    
    transition: {
      duration: 2,
      delay:2,
      
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

const AboutPage = () => {
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(false);
  const{totalItems} = useCart();
    return (
      <motion.div className="aboutPage" 
          variants = {pageVariants} 
          initial = "initial"
          animate = "visible"
          exit = "exit"
      >
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
                <Link to="/cards">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="head-i shop-cart"
                  />{" "}
                 
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
                        <span className="dropdownMenu">
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



                      <li >
                      <Link to="/delivery"  > Delivery </Link>
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
              > About  </motion.h2>
            </div>

            <div className="row flex-row align-items-center justify-content-between">
              <div className="links-content col-12">
                <Link to="/" className="aboutLink">
                  
                  Home
                </Link>
                <span>/</span>
                <Link to="/about" className="aboutLink">
                  
                  About
                  
                </Link>
              </div>
            </div>
          </div>
        </motion.header>

        <section>
          <div className="container">
            <div className="row">
              <div className="section-head">
                <h5>Our history</h5>
                <motion.h2
                  variants={contentHead}
                  initial="initial"
                  animate="visible"
                > What do you know about  us? </motion.h2>
              </div>
             
            </div>

            <div className="row align-items-center">
                <div className="right-txt col-12 col-md-5 col-lg-5 col-xl-5 mb-3">
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque commodi fuga aperiam laudantium. Soluta ab aliquam hic doloremque error itaque totam autem tempore nam! Vero, adipisci. Minima quis quaerat, debitis magni modi itaque provident nisi ipsam corporis ab earum unde dicta, nesciunt ea adipisci doloribus neque maxime porro nemo saepe.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis quam, ullam reprehenderit, aperiam dignissimos sapiente maxime iusto totam soluta voluptas maiores facere delectus quia expedita id asperiores tempore molestiae ducimus fugit placeat! Rem eius culpa magnam odit quaerat eveniet tenetur velit placeat! Consequuntur illum, nesciunt exercitationem dolor dicta in, omnis nobis blanditiis aliquam, velit alias officia voluptatibus saepe? Reiciendis voluptatibus debitis, dolorum doloremque aperiam nostrum. Repudiandae quaerat quas sapiente.</p>
                </div>
                <div className="mid-i col-12 col-md-2 col-lg-2 col-xl-2 mb-3">
                        <FontAwesomeIcon icon={faInfoCircle} className="faa-tada animated" />
                </div>
                <div className="left-txt col-12 col-md-5 col-lg-5 col-xl-5 mb-3">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, asperiores ipsam ratione officia, at inventore nostrum, eaque quisquam quae voluptatibus perferendis provident sequi labore non velit corrupti doloremque cumque aperiam?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolore magni eveniet error. Voluptatibus assumenda dolores voluptas facere eum veritatis id consequuntur minus quo tenetur, iste, quam qui, quibusdam aliquid reprehenderit. Exercitationem, quo fugit. Praesentium, voluptas minima est, nobis quae vel temporibus enim culpa nam doloribus architecto optio non, amet nemo? Nostrum beatae repellendus nam temporibus nesciunt tempora atque totam ullam! Ab amet officiis eligendi at tempore dolore aliquam facere, quis hic odit soluta aliquid nihil quam voluptate in maxime sit porro. Nam voluptatibus illum ut iste! Aliquid laudantium adipisci nam explicabo, molestias animi dignissimos sed fugit suscipit quisquam? Id?</p>
                </div>
            </div>
          </div>
        </section>

        <Footer />
      </motion.div>
    );
  }


export default AboutPage;
