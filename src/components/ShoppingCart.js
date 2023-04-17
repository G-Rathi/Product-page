import React, { Fragment } from 'react'
import '../styles/Cart.css'
import CartItem from './CartItem'
import SVGWhatsapp from '../svg/SVGWhatsapp'
import SVGArrow from '../svg/SVGArrow'
// import CartData from '../CartData'
import { useSelector } from 'react-redux'
import { getTotal } from '../Redux/CartReducer'

const ShoppingCart = () => {
    const Cart = useSelector(state => state.cart)
    return (
        <Fragment>
            <div className='cart_wrapper'>
                <div className='your_cart'>Your Cart</div>
                <div className='added_items_wrapper'>
                    {/*{CartData.map((item, index) => {
                        return <CartItem item={item} key={index} />
                    })} */}
                    {
                        Cart?.cart?.map((item, index) => {
                            return <CartItem item={item} key={index} />
                        })
                    }

                </div>
            </div>
            <div className='subtotal_wrapper'>
                <span className='subtotal_text'>Subtotal</span>
                <span className='total_price'>₹{getTotal(Cart?.cart)}</span>
            </div>
            <div className='whatsapp_btn_container'>
                <div className='whatsapp_btn'>
                    <span className='whatsapp_text'>CHECKOUT WITH</span>
                    <SVGWhatsapp />
                    <SVGArrow />
                </div>
            </div>
        </Fragment>
    )
}

export default ShoppingCart