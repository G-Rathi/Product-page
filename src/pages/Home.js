import React, { Fragment } from 'react'
import '../styles/Home.css'
import Navbar from '../components/Navbar'
import StorePoster from '../components/StorePoster'
import SVGSearch from '../svg/SVGSearch'
import Item from '../components/Item'
import data from '../Data'
import ShoppingCart from '../components/ShoppingCart'
import ADD from '../components/ADD'
import Footer from '../components/Footer'
// import Searchbar from '../components/Searchbar'
// import { useEffect } from 'react'
import { useState } from 'react'
// import { useSelector } from 'react-redux'

const Home = () => {
    const [filtered, setFiltered] = useState()

    const handleSearch = (e) => {
        const temp = [...data]
        const result = temp?.filter(item => item?.name?.toLowerCase()?.includes(((e.target.value)?.toLowerCase())))
        setFiltered(result)
    }
    // const Cart = useSelector(state => state.cart)
    return (
        <Fragment>
            <Navbar />
            <StorePoster />
            <div className='items_about_btn_container'>
                <div className='items_about_btn_wrapper'>
                    <div className='items'><span className='items_text'>ITEMS</span></div>
                    <div className='about'><span className='about_text'>ABOUT</span></div>
                </div>
                {/*<div><b>Cart Items: {Cart.cart.length}  </b></div> */}
            </div>
            <div className='searchbar_container'>
                <div className='searchbar_wrapper'>
                    <input type='search' className='searchbar_text' placeholder='Search for Products or Services' onChange={handleSearch}></input>
                    <div><SVGSearch /></div>
                </div>
            </div>
            <div className='items_add_cart_container'>
                <div className='add_section_container'>
                    <ADD />
                </div>
                <div className='items_section_container'>
                    {(filtered || data)?.map((item, index) => {
                        return <Item item={item} key={index} />
                    })}
                </div>
                <div className='cart_section_container'>
                    <ShoppingCart />
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Home