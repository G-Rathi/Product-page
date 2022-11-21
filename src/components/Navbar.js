import React from 'react'
import SVGLogo from '../svg/SVGLogo'
import SVGPoweredBy from '../svg/SVGPoweredBy'
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <div className='nav_container'>
            <div className='nav_wrapper'>
                <SVGLogo />
                <SVGPoweredBy />
            </div>
        </div>
    )
}

export default Navbar

