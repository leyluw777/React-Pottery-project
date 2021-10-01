import React from 'react'
import { useCart } from 'react-use-cart';
import data from './Data';


function AddBtn(props) {
    const {addItem, item, index} = useCart();
    return (
        <div>
        {data.productData.map((item)=>{
            return(
                <button className="btn" onClick={()=>addItem(props.item)} item={item} key={index} >Add to card</button>
            ) 
        })}
        </div>
    )
}

export default AddBtn
