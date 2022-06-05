import React from 'react';
import { useCart } from 'react-use-cart';
import { BrowserRouter, Route, Link } from "react-router-dom";




const CartItem = (props) => {
    const {addItem} = useCart();
    return (

        <div  className="col-5 col-md-6 col-lg-3 mx-0 mb-5 card-item ">
          
          
            <div className="card p-0 overflow-hidden h-100 shadow" >
        <Link to="/card" className="card-img">
          <div className="hover-img"> </div>
        
        <img src={props.img} className="card-img-top" alt="err" />
        
        </Link>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-title">{props.price}$</h6>
          <p className="card-text">{props.desc}</p>
          <button className="button" onClick={()=>addItem(props.item)}>Add to card</button>
        </div>
      </div>

        </div>
 
    )
}

export default CartItem