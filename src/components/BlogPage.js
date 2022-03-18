import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { motion, useMotionValue, useTransform } from "framer-motion";
import Fade from "react-reveal/Fade";
import Footer from './Footer'
import Logo from '../img/logo.png'
import Blog1 from '../img/blog1.jpg'
import Blog2 from '../img/blog2.jpg'
import Blog3 from '../img/blog3.jpg'
import Blog4 from '../img/blog4.jpg'
import Blog5 from '../img/blog5.jpg'
import Blog6 from '../img/blog6.jpg'
import Blog7 from '../img/blog7.jpg'
import Blog8 from '../img/blog8.jpg'
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
      y: "0vh",
      x:'0',
      opacity: 0
    },
    visible: {
      opacity: 1,
      y:"0",
      x: "0",
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


  const BlogBox = (props) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const rotateX = useTransform(y, [-100, 100], [60, -60])
    const rotateY = useTransform(x, [-100, 100], [-60, 60])
    return (
      <div
      variants = {pageVariants}
      initial ="initial"
      animate="visible"
      exit="exit"
      
      className="blog-box mb-5" >
       
        <img src={props.bgImage} alt="" className="bg-img" style={{perspective: "800"}} />
      
    
          <motion.div
          style={{
            x: x,
            y: y,
            rotateX: rotateX,
            rotateY: rotateY,
            cursor: "grab",
        }}
        drag
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        dragElastic={0.4}
        whileTap={{ cursor: "grabbing" }}
          className="box-info">
            <div className="date-box">
              <p>{props.date}</p>
            </div>
            <h5>{props.head}</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              ratione.
            </p>
           
          </motion.div>
  
      </div>
    );
  };

function BlogPage() {
    const [show, setShow] = useState(false);
    const [toggle, setToggle] = useState(false);
    const{totalItems} = useCart();
    return (
        <motion.div
        variants = {pageVariants} 
        initial = "initial"
        animate = "visible"
        exit = "exit"
        className="blogPage">
            <header>
            <div className="container">


            <div className="row align-items-center " >
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

                <div className="row pb-5">
                    
  
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
                                <li><Link to="/"> Home</Link></li>
                                <li> <Link to="/about"> About </Link> </li>
                                <li onClick={() => setToggle(toggle => ! toggle) } className="drop-menu" id="drop-down"><span  >Shop
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
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/contact"> Contact</Link></li>
                            </ul>
                            </div>
                            </motion.div>
                        </motion.div>
                        <nav className = "d-none d-md-flex d-lg-flex d-xl-flex"> 
                            <ul>
                                <li><Link to="/React-Pottery-project"> Home</Link></li>
                                <li><Link to="/about"> About </Link></li>
                                <li className="drop-menu"><Link to="/shop" href="" >Shop</Link>
                                <ul>
                                    <li><a href=""> All products </a></li>
                                    <li><a href=""> Exclusive pieces</a></li>
                                </ul>
                                </li>
                               
                                <li><Link to="/delivery" > Delivery </Link></li>
                                <li><Link to="/blog">Blog</Link></li>
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

                <div className="row flex-row align-items-center justify-content-between ">
              <div className="links-content col-12">
                <Link to="/React-Pottery-project" className="aboutLink">
                  
                  Home
                </Link>
                <span>/</span>
                <Link to="/blog" className="aboutLink">
                  
                  Blog
                  
                </Link>
              </div>
            </div>


            </div>
            </header>

            <section>
                <div className="container">
                    <div className="row align-items-center justify-content-between mb-5">
                        <Fade left>
                        <div className="img-blog col-12 col-md-6 col-lg-6 col-xl-6 mb-4">
                        </div>
                        </Fade>
                        

                        <Fade top>
                        <div className="txt-blog col-12 col-md-5 col-lg-5 col-xl-5">
                            <div className="txt-line">
                                <p>
                                    <FontAwesomeIcon icon={faUser}  className="txt-i" />
                                    Admin
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faCalendarAlt} className="txt-i" />
                                    20 Jan. 2020
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faComment} className="txt-i" />
                                    0 comments
                                </p>
                            </div>
                            <h1>Writing A Novel with A Heart</h1>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <button>Read more</button>
                        </div>
                        </Fade>
                    </div>
                    


                    <div className="row mt-3 mb-5">
                        <div className="blog-card col-12 col-md-4 col-lg-4 col-xl-4 mb-5">
                        <BlogBox
              bgImage={Blog2}
              date="22 Aug"
              head="Donec tellus Nulla lorem"
            />
                        </div>
                        <div className="blog-card col-12 col-md-4 col-lg-4 col-xl-4 mb-5">
                        <BlogBox
              bgImage={Blog3}
              date="22 Aug"
              head="Donec tellus Nulla lorem"
            />
                        </div>
                        <div className="blog-card col-12 col-md-4 col-lg-4 col-xl-4 mb-5">
                        <BlogBox
              bgImage={Blog4}
              date="22 Aug"
              head="Donec tellus Nulla lorem"
            />
                        </div>
                    </div>

                    <div className="row align-items-center justify-content-between mb-5 mt-5">
                    

                    <Fade top>
                        <div className="txt-blog col-12 col-md-5 col-lg-5 col-xl-5 mb-3">
                            <div className="txt-line">
                                <p>
                                    <FontAwesomeIcon icon={faUser}  className="txt-i" />
                                    Admin
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faCalendarAlt} className="txt-i" />
                                    15 Oct. 2021
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faComment} className="txt-i" />
                                    3 comments
                                </p>
                            </div>
                            <h1>Writing A Novel with A Heart</h1>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <button>Read more</button>
                        </div>
</Fade>
                  
                        <div className="img-blog-2 col-12 col-md-6 col-lg-6 col-xl-6 mb-4">

</div>

                    </div>



                    <div className="row mt-3 mb-5">
                        <div className="blog-card col-12 col-md-4 col-lg-4 col-xl-4 mb-5">
                        <BlogBox
              bgImage={Blog6}
              date="22 Aug"
              head="Donec tellus Nulla lorem"
            />
                        </div>
                        <div className="blog-card col-12 col-md-4 col-lg-4 col-xl-4 mb-5">
                        <BlogBox
              bgImage={Blog7}
              date="22 Aug"
              head="Donec tellus Nulla lorem"
            />
                        </div>
                        <div className="blog-card col-12 col-md-4 col-lg-4 col-xl-4 mb-5">
                        <BlogBox
              bgImage={Blog8}
              date="22 Aug"
              head="Donec tellus Nulla lorem"
            />
                        </div>
                    </div>





                </div>
            </section>

        <Footer />

        </motion.div>
    )
}

export default BlogPage
