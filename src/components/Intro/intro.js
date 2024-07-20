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
                <div className='logoAC'><img src={logoAC} alt='asdasd'/></div>
                <span className='hello'>Hej där!</span><br />
                <span className='introText'>Vi är <span className='altText'>AeroCapture</span> <img className='logoText' src={ logoText } alt='logoText' />Productions
                <br /><i>Ek. för.</i></span>
                <p className='introPara'>Vi specialicerar oss i skapande av hemsidor till mindre föreningar & företag <br /> 
                samt erbjuder tjänster inom drönarfotografi. </p>
                <br />
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}><button className='btn'><img src={btnImg} className='btnImg' width={30} alt='Hire Us' />Anlita oss!</button></Link>
            </div>
        </section>
    );
}

export default Intro;