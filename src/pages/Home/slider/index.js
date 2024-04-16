import React from 'react'
import Slider from 'react-slick'
import './index.css'
import Slide1 from '../../../assets/images/slider-1.png'
import Slide2 from '../../../assets/images/slider-2.png'
import Button from '@mui/material/Button';
import SendSharpIcon from '@mui/icons-material/SendSharp';
const HomeSlider = () => {

        var settings = {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                arrows: true
        };
        return (
                <section className='homeSlider'>
                        <div className='container-fluid position-relative'>
                                <Slider {...settings} className='home_slider_Main'>
                                     <div className='item'>
                                        <img src={Slide1} className='w-100' />
                                        <div className='info'>
                                                <h3 className='display-2 mb-4'>
                                                Don’t miss amazing <br />Grocery Deals
                                                </h3>
                                                <p>Sign up for the daily newsletter</p>
                                        </div>
                                     </div>  
                                     <div className='item'>
                                        <img src={Slide2} className='w-100' />
                                        <div className='info'>
                                                <h3 className='display-2 mb-4'>
                                                Fresh Vegetables<br />Big discount
                                                </h3>
                                                <p>Sign up for the daily newsletter</p>
                                        </div>
                                     </div>  
                                </Slider>

                                <div className="newsLetterBanner">
                                <SendSharpIcon/>
                                        <input type="text" placeholder='Your email address' />
                                        <Button className='bg-g'>Subscribe</Button>

                                </div>
                        </div>
                </section>

        )
}

export default HomeSlider