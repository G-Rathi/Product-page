import React from 'react'
import '../styles/CartItem.css'
import { useDispatch } from 'react-redux';
import { addtocart } from '../Redux/CartAction'


const CartItem = ({ item }) => {
    const dispatch = useDispatch()
    let priceofone = item.price
    let quantity = item.quantity
    // const [value, setValue] = useState(quantity)
    // let fprice = priceofone * value
    let fprice = priceofone * quantity


    const mvalue = () => {
        let negativevalue = quantity - 1
        return negativevalue
    }
    const handleMinus = () => {
        // if (quantity === 0 || value < 1) {
        //     let value = 0
        //     dispatch(addtocart(value))
        //     // setValue(0)
        // } else
        if (quantity > 0) {
            mvalue()
            // quantity - 1
            // dispatch(addtocart(item))
            // setValue(value - 1)
        }

    }
    const addvalue = () => {
        let plusvalue = quantity + 1
        return plusvalue
    }
    const handlePlus = () => {
        // quantity + 1
        addvalue()
        dispatch(addtocart(item))

        // setValue(value + 1)
    }


    return (
        <div className='cartItem_wrapper'>
            <span className='cartItem_name'>{item.name}</span>
            <div className='buttons_input'>
                <button className='minus_btn btn' onClick={handleMinus}>-</button>
                <div className='cartItem_input' > {quantity}</div>
                <button className='plus_btn btn' onClick={handlePlus}>+</button>
            </div>
            <span className='cartItem_price'>₹{fprice}</span>
        </div>
    )
}

export default CartItem