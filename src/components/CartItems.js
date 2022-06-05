import React, {useState} from 'react'
import data from './Data';
import CartItem from './CartItem';
import Fade from 'react-reveal/Fade';



function CartItems() {

    return (
        <Fade top >
            <div className="row mb-3 justify-content-center">
            {data.productData.map((item,index)=>{
                    return(
                        <CartItem
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        price={item.price}
                        item={item}
                        key={index}
                        color = {item.color}
                        />
                    ) 
                })}

            </div>


              
              

     
    </Fade>
    )
}

export default CartItems
