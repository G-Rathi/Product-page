import React from 'react'
import '../styles/StorePoster.css'
import SVGOpenCicle from '../svg/SVGOpenCicle'
import SVGDistance from '../svg/SVGDistance'
import SVGMap from '../svg/SVGMap'
import SVGShare from '../svg/SVGShare'
import Shop from '../images/Shop.jpg'

const StorePoster = () => {
    return (
        <div className='poster_container'>
            <div className='image'>
                <img src={Shop} alt='#' width='250px' height='180px' />
            </div>
            <div className='store_image_details_container'>
                <div className='store_details'>
                    <div className='store_name'>Chamundeshwari Chamarajan Kirana and sweet Store
                    </div>
                    <div className='street'>Street Food | Sweets | Tea/Coffee</div>
                    <div className='last_detail'>
                        <span className='open'><SVGOpenCicle /> Open</span>
                        <span className='distance'><SVGDistance /> 2.3 km</span>
                        <span><SVGMap /> </span>
                    </div>
                </div>
                <div className='share'><SVGShare /> </div>
            </div>
        </div>
    )
}

export default StorePoster