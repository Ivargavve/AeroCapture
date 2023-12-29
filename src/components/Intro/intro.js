import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';
import btnImg from '../../assets/mail.webp';
import logoText from '../../assets/textSmall.png';
import logoAC from '../../assets/LogoAC.png';

const Intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <div className='logoAC'><img src={logoAC} /></div>
                <span className='hello'>Welcome!</span>
                <span className='introText'>We are <span className='altText'>AeroCapture</span> <img className='logoText' src={ logoText } alt='logoText' />Productions
                <br /><i>Video Production company</i></span>
                <p className='introPara'>We specialize in drone stock footage. Hire us to get great photos of your
                <br /> property.</p>
                <br />
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}><button className='btn'><img src={btnImg} className='btnImg' width={30} alt='Hire Us' />Hire Us</button></Link>
            </div>
        </section>
    );
}

export default Intro;