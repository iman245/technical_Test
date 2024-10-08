import React from 'react'
import './footer.css'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faSnapchat } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


function Footer () {
  return (
    <div className='FooterContainer'>
        <div className='FooterContent1'>
            <div className='FooterSection1'>
                <h2><img src={logo} alt='logo' className='logoImg'/></h2>
                <Link to='#' className='footer-item'>Home Delivery</Link>
                <Link to='#' className='footer-item'><FontAwesomeIcon icon={faLocationDot} className='footerIcon'/>Lerabaa - Blida</Link>
                <Link to='#' className='footer-item'><FontAwesomeIcon icon={faLocationDot} className='footerIcon'/>Bab Zouar - Alger</Link>
            </div>
            <div className='FooterSection1'>
                <h2 className='footerTitre'>Shop By</h2>
                <Link to='#' className='footer-item'>Rings</Link>
                <Link to='#' className='footer-item'>Earrings</Link>
                <Link to='#' className='footer-item'>Necklaces</Link>
            </div>
            <div className='FooterSection1'>
                <h2 className='footerTitre'>Browse</h2>
                <Link to='#' className='footer-item'>Trends Now</Link>
                <Link to='#' className='footer-item'>New Arrivals</Link>
                <Link to='#' className='footer-item'>Custom Pieces</Link>
            </div>
            <div className='FooterSection1'>
                <h2 className='footerTitre'>Follow Us</h2>
                <Link to='#' className='footer-item'><FontAwesomeIcon icon={faFacebook} className='footerIcon'/>Facebook</Link>
                <Link to='#' className='footer-item'><FontAwesomeIcon icon={faInstagram} className='footerIcon'/>Instagram</Link>
                <Link to='#' className='footer-item'><FontAwesomeIcon icon={faSnapchat} className='footerIcon'/>Snapchat</Link>
            </div>
        </div>
        <div className='FooterContent2'>
            <div>
                2023 &copy; all rights reserved.
            </div>
            <div className='FooterSousCont'>
                <div>terms & conditions</div>
                <div>privacy policy</div>
            </div>
        </div>
    </div>
  )
}

export default Footer