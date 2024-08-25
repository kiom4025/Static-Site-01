import React from 'react';
import { Carousel } from 'antd';
import SliderImg_1 from '../assets/Slider_img_1.jpg'
import SliderImg_2 from '../assets/Slider_img_2.jpg'
import SliderImg_3 from '../assets/Slider_img_3.jpg'
import SliderImg_4 from '../assets/Slider_img_4.jpg'

const ImageSlider = () => (
  <Carousel autoplay arrows infinite={true} dots={true} adaptiveHeight={true}>
    <img src={SliderImg_1} alt='Slider 1'></img>
    <img src={SliderImg_2} alt='Slider 2'></img>
    <img src={SliderImg_3} alt='Slider 3'></img>
    <img src={SliderImg_4} alt='Slider 4'></img>
  </Carousel>
);
export default ImageSlider;