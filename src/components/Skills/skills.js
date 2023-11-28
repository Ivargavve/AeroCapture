import React from 'react';
import './skills.css';
import image1 from '../../assets/1.png';
import image2 from '../../assets/3.png';


const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>About Us</span>
            <span className='skillDesc'>We work with our clients to achieve the best result possible in a proffesional way. 
            <br />Here are some examples of our previous work with clients all over Sweden.</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <div className='skillBarText'>
                        <h2><img src={image1} alt="image1" className='imgInDiv'/></h2>
                        <p>text</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <div className='skillBarText'>
                        <h2><img src={image2} alt="image2" className='imgInDiv'/></h2>
                        <p>text</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <div className='skillBarText'>
                        <h2>3</h2>
                        <p>text</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;