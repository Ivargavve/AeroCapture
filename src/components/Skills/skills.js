import React from 'react';
import './skills.css';
import image1 from '../../assets/1.png';
import image2 from '../../assets/3.png';
import acimage from '../../assets/LogoACround.png';


const Skills = () => {
    return (
        <section id='skills'>
            <div className='bars'>
                <div className='bar'><span className='skillTitle'>About Us</span></div>
                <p className='informationText'>Welcome to AeroCapture Productions, where innovation takes flight and breathtaking 
                    moments are captured from new heights. Established in 2023, we are a dynamic and forward-thinking 
                    company that specializes in the art of drone videography, offering a fresh perspective on the world 
                    through our lens in the sky. <br /><br />
                    At AeroCapture, we are passionate about pushing the boundaries of visual storytelling. 
                    Our dedicated team of skilled drone pilots and creative minds work tirelessly to capture 
                    awe-inspiring aerial footage that brings a unique and cinematic quality to your projects. 
                    Whether you're a filmmaker, content creator, or business owner looking to elevate your visual content, 
                    we have the expertise and cutting-edge technology to deliver exceptional results.<br /><br/>
                    <div className='hideelement'>
                    What sets us apart is our commitment to excellence and our drive to exceed expectations. 
                    We understand the power of compelling visuals in today's digital landscape, and we harness the 
                    capabilities of drone technology to provide you with unparalleled perspectives that were once 
                    unimaginable. From sweeping landscapes and dynamic cityscapes to intricate details and close-ups, 
                    our drone stock videos showcase the world from a whole new angle.
                    </div>
                    </p>
                <img className='image' src={image2} alt="image2"/>
            </div>
            <div className='bars'>
                <img className='image' src={image1} alt="image1"/>
                <p className='informationText'>
                    <span className='hideText' >AeroCapture Productions is not just a company; we are a team of visionaries who believe 
                    in the transformative potential of drone videography. We take pride in staying at the 
                    forefront of technological advancements, ensuring that our clients benefit from the latest 
                    innovations in the industry. Our goal is to consistently deliver high-quality, captivating 
                    content that tells a story, evokes emotion, and leaves a lasting impression. <br /><br />
                    As a newly founded company, we are excited about the journey ahead and the opportunities 
                    to collaborate with creative minds, businesses, and organizations that share our passion 
                    for visual excellence. Explore the world from a new perspective with AeroCapture Productions –
                     where the sky is not the limit; it's just the beginning.</span></p>
                    <div className='center'><a href='https://ivargavve.github.io/AeroCapture/' ><img className='acimage' src={acimage} alt='logo' /></a></div>
                <div className='seeMoreBtn'>
                <strong>See More </strong>
                <span className='arrow'>&#709;</span>
            </div>
            </div>
           
        </section>
    );
}

export default Skills;