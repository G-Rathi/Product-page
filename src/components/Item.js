import React from 'react'
import '../styles/Item.css'
import { useDispatch } from 'react-redux';
import { addtocart } from '../Redux/CartAction'

const Item = ({ item }) => {
    const dispatch = useDispatch()
    return (
        <div className='item_wrapper'>
            <div className='item_image_container'><img src={item.image} alt='#' /></div>
            <div className='item_name_quantity_container'>
                <span className='item_name'>{item.name}</span>
                {item.quantity ? <span className='item_quantity'>{item.quantity}</span> : ''}
            </div>
            <div className='item_price_btn'>
                <div className='item_prices'>
                    <span className='item_price'>₹{item.price}</span>
                    {item.mrp ? <span className='item_linethrough_price'>{item.mrp}</span> : ''}
                </div>
                <span onClick={() => { dispatch(addtocart(item)) }} className='item_add_btn'>ADD</span>
            </div>
        </div>
    )
}

export default Item