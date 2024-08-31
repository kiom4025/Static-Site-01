import React from 'react';
import { Button, Carousel } from 'antd';
import SliderImg_1 from '../assets/Slider_img_1.jpg'
import SliderImg_2 from '../assets/Slider_img_2.jpg'
import SliderImg_3 from '../assets/Slider_img_3.jpg'
import SliderImg_4 from '../assets/Slider_img_4.jpg'
function handleClick(id) {
  const anchor = document.querySelector(`#${id}`);
  if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
      console.error(`Element with id ${id} not found.`);
  }
}
const ImageSlider = () => (
  <Carousel 
  // autoplay 
  arrows 
  infinite={true} 
  dots={true} 
  adaptiveHeight={true}>
    {/* <img src={SliderImg_1} alt='Slider 1'></img>
    <img src={SliderImg_2} alt='Slider 2'></img>
    <img src={SliderImg_3} alt='Slider 3'></img>
    <img src={SliderImg_4} alt='Slider 4'></img> */}

    <div className="slider-item">
      <img src={SliderImg_1} alt="Slider 1" />
      <div className="overlay"></div>
      <div className="content">
      <h1><b> LAW PRACTICE & EXPERTISE</b></h1>
        <p>Corporate & Commercial Law | Real Estate & Property Law | Labour Law | Criminal Law | Arbitration, Litigation & Mediation |Matrimonial & Family Law | Debt Recovery | Shipping & Maritime Laws</p>
      </div>
    </div>
     {/*
    <div className="slider-item">
      <img src={SliderImg_2} alt="Slider 2" />
      <div className="overlay"></div>
      <div className="content">
        <p>Your text here</p>
      </div>
    </div>
    <div className="slider-item">
      <img src={SliderImg_3} alt="Slider 3" />
      <div className="overlay"></div>
      <div className="content">
        <p>Your text here</p>
      </div>
    </div> */}
    <div className="slider-item">
      <img src={SliderImg_4} alt="Slider 4" />
      <div className="overlay"></div>
      <div className="content">
        <h1><b> Get in touch with us</b></h1>
        <p>We are here to help</p><br/><br/>
        <Button type='primary' onClick={() => handleClick('contactFormSection')}>Contact US</Button>
      </div>
    </div>
  </Carousel>
);
export default ImageSlider;