import React from 'react';
import './works.css';
import asset1 from '../../assets/asset1.jpg';
import asset2 from '../../assets/asset2.jpg';
import asset3 from '../../assets/asset3.jpg';
import asset4 from '../../assets/asset4.jpg';
import asset5 from '../../assets/asset5.jpg';
import asset6 from '../../assets/asset6.jpg';
import asset7 from '../../assets/asset7.jpg';
import asset8 from '../../assets/asset8.jpg';
import asset9 from '../../assets/asset9.jpg';
import asset10 from '../../assets/asset10.jpg';
import asset11 from '../../assets/asset11.jpg';
import asset12 from '../../assets/asset12.jpg';
import asset13 from '../../assets/asset13.jpg';
import asset14 from '../../assets/asset14.jpg';
import asset15 from '../../assets/asset15.jpg';
import asset16 from '../../assets/asset16.jpg';

const Works = () => {
    return (
        <div id='works'>
            <div className='gallery'>
                <div className='main-scroll-div'>
                    <div className='cover'>
                        <div className='scroll-images'>
                            <div className='image'>
                                <img src={asset1} alt='asset1' />
                            </div>
                            <div className='image'>
                                <img src={asset2} alt='asset2' />
                            </div>
                            <div className='image'>
                                <img src={asset3} alt='asset3' />
                            </div>
                            <div className='image'>
                                <img src={asset4} alt='asset4' />
                            </div>
                            <div className='image'>
                                <img src={asset5} alt='asset5' />
                            </div>
                            <div className='image'>
                                <img src={asset6} alt='asset6' />
                            </div>
                            <div className='image'>
                                <img src={asset7} alt='asset7' />
                            </div>
                            <div className='image'>
                                <img src={asset8} alt='asset8' />
                            </div>
                            <div className='image'>
                                <img src={asset9} alt='asset9' />
                            </div>
                            <div className='image'>
                                <img src={asset10} alt='asset10' />
                            </div>
                            <div className='image'>
                                <img src={asset11} alt='asset11' />
                            </div>
                            <div className='image'>
                                <img src={asset12} alt='asset12' />
                            </div>
                            <div className='image'>
                                <img src={asset13} alt='asset13' />
                            </div>
                            <div className='image'>
                                <img src={asset14} alt='asset14' />
                            </div>
                            <div className='image'>
                                <img src={asset15} alt='asset15' />
                            </div>
                            <div className='image'>
                                <img src={asset16} alt='asset16' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works;