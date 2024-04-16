import React, { useState } from 'react'
import Slider from 'react-slick'
import './style.css'
const CatSlider = () => {

  const[itemBg, setItemBg] = useState([
    '#fffceb',
    '#ecffec',
    '#feefea',
    '#fff3eb',
    '#fff3ff',
    '#f2fce4',
    '#feefea',
    '#fffceb',
    '#feefea',
    '#ecffec',
    '#feefea',
    '#fff3eb',
    '#fff3ff',
    '#f2fce4',
    '#feefea',
    '#fffceb',
    '#feefea',
    '#ecffec'
  ])

        var settings = {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 10,
                slidesToScroll: 1,
                fade: false,
                arrows: true
        };
  return (
    <>
    <div className="catSliderSection">
        <div className='container-fluid'>
        <h2 className='hd'>Featured Categories</h2>
        <Slider {...settings} className='cat_slider_Main' id= "cat_slider_Main">
        {
          itemBg.length!==0 && itemBg.map((item, index)=>{
            return(
              <div className='item'>
              <div className="info" style={{background: item}}>
                <img src="https://nest.apexcode.info/media/categories/main/imgs/cat-12_SwJb7aF.png"/>
                <h5>Oganic Kiwi</h5>
                <p>20 items</p>
              </div>
            </div>
            )
          })
        }
                
        </Slider>
        </div>
    </div>

    </>
  )
}

export default CatSlider