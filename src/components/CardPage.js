import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Logo from '../img/logo.png'
import Item from '../img/item1.png'
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { motion, useMotionValue, useTransform } from "framer-motion";
import { CartProvider, useCart } from 'react-use-cart';
import data from './Data';
import AddBtn from './AddBtn'



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
  
  }

const Button = (props) => {
    const {addItem} = useCart();
    return(
        <div className="div" >
            <button className="button" onClick={()=>addItem(props.item)} >Add to card</button>
        </div> 
    )
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


function Tracking_the_cursor() {
    const x = useMotionValue(200)
    const y = useMotionValue(200)

    const rotateX = useTransform(y, [0, 400], [15, -15])
    const rotateY = useTransform(x, [0, 400], [-15, 15])

    function handleMouse(event) {
        const rect = event.currentTarget.getBoundingClientRect();

        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    }

    return (
        <motion.div className="productImg col-12 col-md-5 col-lg-5 col-xl-5 mb-5 mb-lg-0 mb-xl-0 mb-md-0" style={{
            
            
            display: "flex",
            placeItems: "center",
            placeContent: "center",
            perspective: 400,
            }} onMouseMove={handleMouse}>


        <motion.img src={Item} alt="" 
        style=
        {{ rotateX: rotateX,
        rotateY: rotateY}} />
        
    </motion.div>
    )
}

const CardPage = (props) => {
    const [show, setShow] = useState(false);
    const {totalItems, item} = useCart();
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);
    return (
       
        <motion.div
        variants = {pageVariants} 
        initial = "initial"
        animate = "visible"
        
        className="cardPage">
             <header>
                <div className="container-fluid">
                    <div className="row align-items-center ">
                        <div className="head-logo col-12 col-md-2 col-lg-5 col-xl-5 d-flex justify-content-center justify-content-md-start justify-content-lg-start justify-content-xl-start">
                            <a href="">
                            <img src={Logo} alt="" />
                            </a>
                        </div>
      

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
                                <li onClick={() => setToggle(toggle => ! toggle) }
                                className="drop-menu" id="drop-down"><span >Shop
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
                        <nav className = "d-none d-md-flex d-lg-flex d-xl-flex col-5 col-md-7 col-lg-5 xol-xl-5"> 
                            <ul>
                                <li><Link to="/"> Home</Link></li>
                                <li><Link to="/about"> About </Link></li>
                                <li className="drop-menu"><Link to="/shop" href="" >Shop</Link>
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
                            <a href="">
                            <FontAwesomeIcon icon={faShoppingCart} />
                            </a>
                        </div>

                        <div className="head-icons d-none d-md-flex d-lg-flex d-xl-flex col-6 col-md-3 col-lg-2 col-xl-2 ">
                        <a href=""><FontAwesomeIcon icon={faUser} className="head-i" /> </a>
                        <Link to="/cards" href=""><FontAwesomeIcon icon={faShoppingCart} className="head-i shop-cart" /> <sup>{totalItems}</sup> </Link>
                        </div>

                    </div>



                </div>
                </header>

                <section>
                
                 
                        
                            <div className="container-fluid">
                            <div className="row align-items-center justify-content-center ">
                               <Tracking_the_cursor  />
                                    
                                <div className="productTxt col-12 col-md-7 col-lg-7 col-xl-7 mr-4 mb-5 mb-lg-0 mb-xl-0 mb-md-0">
                                    <h5>Pottery art</h5>
                                        <h1>Samian Ware <span>2021</span></h1>
                                        <p>  $50
                                        </p>
                                        <p>
                                        Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead. Taking the revolutionary full-length Nike Air unit that shook up the running world and adding fresh colors and crisp details, it lets you ride in first-class comfort.
                                        </p>
                                        {data.productData.filter((item,index)=> index==1).map((item,index)=>{
                                            return(
                                       <Button item={item}  />
                                       )

           


     

                              


                            
                                    })}
                  
                     
                                </div>
                              
    
                            </div>
                        </div>
                      
                </section>
        </motion.div>
    )
}

export default CardPage
