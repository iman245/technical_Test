import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import panier from '../../assets/images/panier.png'
import identity from '../../assets/images/photo.jfif'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

function Navbar () {
    const items = [
        {
            label : 'Shop',
            link : '/Shop'
        },{
            label : 'Custom',
            link : '/Custom'
        },{
            label : 'About',
            link : '/About'
        },{
            label : 'ContactUs',
            link : '/ContactUs'
        }
    ]
    const [navSmallSize, setNavSmallSize] = useState(false);
    const [openMenuSmallNav, setOpenMenuSmallNav] = useState(false);
    useEffect(() => {
        const handleResize = () => {
          setNavSmallSize(window.innerWidth < 600);
          console.log(window.innerWidth)
        };
    
        handleResize();
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);
  return (
    <div className='NavbarContainer'>
            {!navSmallSize ? (
            <div className='NavbarContent'>
                <img className='logo' src={logo} alt='logo'/>
                <div>
                        {items.map((item, index) => (
                            <Link key={index} to={item.link} className='nav-items'>{item.label}</Link>
                        ))}
                </div>
                <div className='navbar-sepcialSection'>
                    <div className='nav-panier'>
                        <span className='nbProducts'>2</span>
                        <img src={panier} alt='panier' className='panierImg'/>
                    </div>
                    <div>
                        <img src={identity} alt='identityImg' className='identityImg'/>
                    </div>
                </div>
            </div>
        ):(
            <div className='NavbarResponsContent'>
                <div className='navbarRespHead'>
                    <img className='logo' src={logo} alt='logo'/>
                    {!openMenuSmallNav ? (
                                <div className='toggleIocnDiv'
                                onClick={() => setOpenMenuSmallNav(!openMenuSmallNav)}
                                >
                                    <FontAwesomeIcon
                                        icon={faBars}
                                        className="toggleIcon"/>MENU
                                </div>
                                
                                ) : (
                                <div className='toggleIocnDiv'
                                onClick={() => setOpenMenuSmallNav(!openMenuSmallNav)}>
                                    <FontAwesomeIcon
                                    icon={faXmark}
                                    alt="icon"
                                    className="toggleIcon"
                                />CLOSE
                                </div>
                                )}
                </div>
                {openMenuSmallNav && (
                        <div className='navCollapseList'>
                                <div className='navbar-sepcialSection'>
                                    <div>
                                        <img src={identity} alt='identityImg' className='identityImg'/>
                                    </div>
                                    <div className='nav-panier'>
                                        <span className='nbProducts'>2</span>
                                        <img src={panier} alt='panier' className='panierImg'/>
                                    </div>
                                </div>
                                <ul>
                                    <li className='Nav-coll'>
                                    </li>
                                    {items.map((item, index) => (
                                        <li className='Nav-coll'><Link key={index} href={item.link} className='nav-items'>{item.label}</Link></li>
                                    ))}
                                </ul>
                        </div>
                        )}
            </div>
        )
    }
    </div>
  )
}

export default Navbar