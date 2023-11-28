import React from 'react';
import './works.css';

const Works = () => {
    return (
        <section id='works'>
            <h2 className='worksTitle'>Portfolio</h2>
            <span className='worksDesc'>We take pride in paying attention to the smallest details in our work.</span>
            <div className='worksImg'>
                1 <br />
                2 <br />
                3 <br />
                4 <br />
                5 <br />
                6 <br />
            </div>
            <a href='https://wirestock.io/norrk%C3%B6ping.aerocapture' alt='wirestock'><button className='worksBtn'>See More</button></a> 
        </section>
    )
}

export default Works;