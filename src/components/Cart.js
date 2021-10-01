import React, {useState} from 'react';
import {useCart} from 'react-use-cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Logo from '../img/logo.png'
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { motion } from "framer-motion";

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


const Cart = () => {
    const [show, setShow] = useState(false);
    const [toggle, setToggle] = useState(false);
    const{
        isEmpty,
        totalUniqueItems,
        items,totalItems,
        cartTotal,updateItemQuantity,
        removeItem,
        emptyCart,} = useCart();
    
if(isEmpty) return <h1>Your cart is empty</h1>



    return (
        <motion.div
        variants = {pageVariants} 
            initial = "initial"
            animate = "visible"
            exit = "exit"
        >
      <header className="bag-header">
                <div className="container-fluid">
                    <div className="row align-items-center ">
                        <div className="head-logo col-12 col-md-2 col-lg-3 col-xl-3 d-flex justify-content-center justify-content-md-start justify-content-lg-start justify-content-xl-start">
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
                        <nav className = "d-none d-md-flex d-lg-flex d-xl-flex col-5 col-md-7 col-lg-7 xol-xl-7 bag-nav"> 
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


                <section className="bag-section">
                <div className=" container">
                    <div className="row mt-5 ">
                        
                    <div className="col-auto ms-auto d-flex w-100 bag-head align-items-center col-md-8-col-lg-8 col-xl-8">
                       <h1>My shopping bag</h1>
                       <span>({totalItems} items) </span>
                      
                       
     
                    </div>

                    <div className="row justify-content-center">
                          <hr />
                        <div className="col-12 col-md-8 col-lg-8 col-xl-8 bag-items">
                          
                          
                            <table className="col-12  table table-light  ">
                                <tbody>
                                    {items.map((item,index)=>{
                                        return(
                                            <tr key={index} className="bag-item">
                                                <td>
                                                    <img src={item.img} alt="err" style={{height:'6rem'}} />
                                                </td>
                                                <td className="item-title">{item.title}</td>
                                                <td>{item.price}</td>
                                                <td className="update-item">
                                                <td>
                                                    <button className=" add-btn" onClick={()=>
                                                        updateItemQuantity(item.id, item.quantity + 1)
                                                    }>+</button>

                                                </td>
                                                <td>{item.quantity}</td>
                                                <td>
                                                    <button className=" dlt-btn" onClick={()=>
                                                        updateItemQuantity(item.id, item.quantity - 1)
                                                    }>-</button>
</td>
</td>


<td>
<button className="remove-btn" onClick={()=>
                                                        removeItem(item.id)
                                                    }>
                                                        <FontAwesomeIcon  icon={faTimes} />
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        {/* <div className="col-auto ms-auto d-flex align-items-center justify-content-center w-100 ">
                        <button className="btn btn-danger m-2" onClick={()=>emptyCart()}>Clear Cart</button>
                            <button className="btn btn-success m-2" >Buy Now</button>
                        </div> */}

                        <div className="col-12 col-md-4 col-lg-4 col-xl-4 bag-order d-none d-md-none d-lg-none d-xl-flex">
                                <div className="order-sum">
                                    <p>By placing your order, yo agree to the <a href="">Delivery terms</a></p>
                                    <h4>Order Summary:</h4>
                                    <div className="order-price">
                                    <p>{totalItems}</p>
                                    <p>Product total: <span>{cartTotal}</span></p>
                                    <p className="total-p">Total: <span>{cartTotal}</span></p>
                                    </div>
                                    <div className="order-btns">
                                    <button className="clear-btn" onClick={()=>emptyCart()}>Clear Cart</button>
                                    <button className="buy-btn" >Buy Now</button>
                                    </div>
                                </div>
                        </div>
                    </div>

                    
               


                    </div>

                  

                </div>

                    <div className="container-fluid">
                        <div className="row">
                             
                                  <div className="container">
                                      <div className="row">
                                      <div className="bag-order-sm d-flex d-md-flex d-lg-flex d-xl-none col-12">
                                          <div className="order-price-sm">
                                            <p>Total</p>
                                            <p>{cartTotal}</p>
                                            </div>
    
                                    <button className="btn buy-btn" >Buy Now</button>
                                      </div>
                                  </div>
                                   

                    </div>
                        </div>
                    </div>
              

                </section> 
        </motion.div>
    )
}

export default Cart