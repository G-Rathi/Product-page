import React from 'react'
import Mobile from '../images/Mobile.png'
import '../styles/ADD.css'

const ADD = () => {
    return (
        <div className='add_wrapper'>
            <span className='add_text'>For exciting offers and cashbacks, Download Bino app!</span>
            <div className='mobile_image'>
                <img src={Mobile} alt='#' />
            </div>
        </div>
    )
}

export default ADD