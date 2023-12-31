import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/LogoSmallAC.png';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className='navbar'>
            <a href="http://localhost:3000/"><img src={logo} alt='Logo' className='logo' /></a>
            <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={0} duration={500} className='desktopMenuListItem'>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={0} duration={500} className='desktopMenuListItem'>Portfolio</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={0} duration={500} className='desktopMenuListItem'>Client</Link>
            </div>
            <button className='desktopMenuBtn' onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactImg} className='desktopMenuImg' alt='contact'></img>Contact Us
            </button>
            <img src={menu} alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
            <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={0} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={0} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={0} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Client</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;