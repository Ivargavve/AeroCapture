import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../assets/LogoSmallAC.png';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    // Handle scroll event
   // Handle scroll event
   useEffect(() => {
    const handleScroll = () => {
        const currentScrollTop = window.scrollY;

        // Check if scrolling down
        if (currentScrollTop > lastScrollTop && currentScrollTop > 20) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, [lastScrollTop]);

    return (
        <nav className='navbar'>
            <a href="https://ivargavve.github.io/AeroCapture/"><img src={logo} alt='Logo' className='logo' /></a>
            <div className={`desktopMenu ${isScrolled ? 'scrolled' : ''}`}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Hem</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={0} duration={500} className='desktopMenuListItem'>Om oss</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={0} duration={500} className='desktopMenuListItem'>Portfolio</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={0} duration={500} className='desktopMenuListItem'>Kunder</Link>
            </div>
            <button className='desktopMenuBtn' onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactImg} className='desktopMenuImg' alt='contact'></img>Kontakta Oss
            </button>
            <img src={menu} alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
            <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Hem</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={0} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Om oss</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={0} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={0} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Kunder</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-140} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Kontakt</Link>
            </div>
        </nav>
    )
}

export default Navbar;