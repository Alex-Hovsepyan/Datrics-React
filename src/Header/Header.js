import './Header.scss';
import logo_white from '../Images/logo-white.png'
import { faBars, faSortDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header(){
    const [burgerState, SetburgerState] = useState(true)
    
    window.onscroll = function(){
        if(document.querySelector('.header')) {
            const header = document.querySelector('.header')
            if(window.scrollY > 50){
                header.style.background = 'linear-gradient(75deg, #1351a8 5%, #162e66)'
            }
            else {
                header.style.background = 'transparent'
            }
        }
    }

    function burgerMenu(){
        const header = document.querySelector('.header')
        switch(burgerState){
            case true:
                header.classList.add('header_open')
                SetburgerState(false)
                break
            case false:
                header.classList.remove('header_open')
                SetburgerState(true)
                break
            }
        }

    return (
        <header className='header'>
            <div className='header_container'>
                <img src={logo_white} alt="" />
                <nav>
                    <ul className='list'>
                        <li className='dropdown'><Link to="/">Home</Link></li>
                        <li><Link to="/about/">About Us</Link></li>
                        <li><Link to="/services/">Services</Link></li>
                        <li className='dropdown'>
                            <Link>Pages <FontAwesomeIcon icon={faSortDown} /></Link>
                            <nav>
                                <ul>
                                    <li><Link to="/members/">Our Team Members</Link></li>
                                    <li><Link to="/login/">Login Page</Link></li>
                                    <li><Link to="/signup/">Signup Page</Link></li>
                                    <li><Link to="/reviews/">Review Page</Link></li>
                                    <li><Link to="/FAQ/">FAQ Page</Link></li>
                                    <li><Link to="/thanks/">Thank You Page</Link></li>
                                    <li><Link to="/error">404 Page</Link></li>
                                </ul>
                            </nav>
                        </li>
                        <li><Link to="/project/">Project</Link></li>
                        <li><Link to="/blog/">Blog</Link></li>
                        <li><Link to="/contact/">Contact Us</Link></li>
                    </ul>
                </nav>
                <div onClick={burgerMenu} className='burger_menu'>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
        </header>
    )
}

export default Header