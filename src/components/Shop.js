import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Exc1 from './../img/exc1.jpg'
import Exc2 from './../img/exc2.jpg'
import Exc3 from './../img/exc7.jpg'
import Exc4 from './../img/exc4.jpg'
import CartItems from './CartItems'
import { BrowserRouter, Route, Link } from "react-router-dom";


const Piece = (props) => {
    return(
        <div className="piece col-5 col-md-5 col-lg-2 col-xl-2 mb-5">
            <img src={props.image} alt="" />
            <h4>{props.name}</h4>
        </div>
    )
}

export class Shop extends Component {
    render() {
        return (
            <div className="shop">
                <div className="container">
                    <h5 className="p-shop">Specials from us</h5>
                    <h1>Our products</h1>
                     <Fade top>
                <div className="all">
                   
                <CartItems />
           
                <Link to="/shop" className="loadMore" >Load more </Link>
    

                </div>
 </Fade>
                
                <div className="exclusive">

<Fade top>
                    <div className="pieces">
                 <div className="row justify-content-evenly">
                            <Piece image = {Exc1} name= "Western" />
                            <Piece image = {Exc2} name= "Best Seller" />
                            <Piece image = {Exc3} name= "Western" />
                            <Piece image = {Exc4} name= "Best Seller" />
                 </div>
                 
                 </div>
</Fade>

                   <div className="row">
                        <div className="exc-bg col-12">
                        <h1>Get the exclusive piece!</h1>
                            
                            <Fade top>
                            
                            <button>Show more</button>
                            </Fade>
                          

                        </div>

                   </div>

                </div>
                </div>
            </div>
        )
    }
}

export default Shop
