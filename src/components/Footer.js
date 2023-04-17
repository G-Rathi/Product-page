import React from 'react'
import '../styles/Footer.css'
import SVGFooterLogo from '../svg/SVGFooterLogo'
import SVGEmail from '../svg/SVGEmail'
import SVGPhone from '../svg/SVGPhone'
import SVGLocation from '../svg/SVGLocation'
import SVGWebsite from '../svg/SVGWebsite'
import SVGInstagram from '../svg/SVGInstagram'
import SVGLinkedIn from '../svg/SVGLinkedIn'
import SVGFB from '../svg/SVGFB'


const Footer = () => {

    return (
        <div className='outer_Container'>
            <div className='main_container'>
                <div className='left_container'>
                    <div className='footerLogo'><SVGFooterLogo /></div>
                    <p className='p'>
                        Boni is an app-based platform designed to help small local businesses grow.
                    </p>
                </div>
                <div className='right_container'>
                    <div className='products_container' >
                        <h3 className='product_heading'>PRODUCT</h3>
                        <span className='product_content'>Sell on Boni</span>
                        <span className='product_content'>Buy on Bino</span>
                    </div>
                    <div className='useful_Links_container' >
                        <h3 className='useful_Links_heading'>USEFUL LINKS</h3>
                        <span className='useful_Links_content'>Terms & Conditions</span>
                        <span className='useful_Links_content'>Privacy Policy</span>
                    </div>
                    <div className='contact_container' >
                        <h3 className='contact_heading'>CONTACT</h3>
                        <span className='contact_content'>
                            <SVGEmail /><span> contact@boni.co.in</span></span>
                        <span className='contact_content'><SVGPhone /> <span> 9019516735</span></span>
                        <span className='contact_content'><SVGLocation /> <span> Boni, 183 G Block, First Floor, East Side, Sahakarnagar Main Road, Sahakara Nagar, Bangalore, 560092</span></span>
                        <span className='contact_content'><SVGWebsite /><span> www.boni.co.in</span></span>
                    </div>
                </div>
            </div>
            <hr className='hr' />
            <div className='bottom_container'>
                <span className='bottom_text'>Bohni Tech Private Limited</span>
                <div className='social_links'>
                    <SVGInstagram />
                    <SVGLinkedIn />
                    <SVGFB />
                </div>
            </div>
        </div>
    )
}

export default Footer