// SliderComponent.js
import React from 'react';
import { Button, Carousel, Image } from 'antd';
import './Carousel.css'; // Import your CSS file
import SliderImage from '../assets/Slider_img_1.jpg'
import SliderImg_2 from '../assets/Slider_img_2.jpg'
import SliderImg_3 from '../assets/Slider_img_3.jpg'
import SliderImg_4 from '../assets/Slider_img_4.jpg'

const MyImage = require('../assets/Slider_img_2.jpg'); // Adjust the path


const slides = [
      {
          title: 'Your Trusted Legal Advocates',
          subtitle: 'Fighting for Justice, One Case at a Time',
          ctaText: 'Learn More',
          image: '../assets/Slider_img_1.jpg',
      },
      {
          title: 'Get in Touch With Us',
          subtitle: 'We are here to help',
          ctaText: 'Call Us',
          image: MyImage,
      },
    ];

const SliderComponent = () => {
    // const onChange = (currentSlide) => {
    //     console.log(`Current slide: ${currentSlide}`);
    // };

    return (
        <Carousel 
        swipe={true} arrows={true} 
        // afterChange={onChange}
        >
            {slides.map((slide, index) => (
                
                <div key={index} className={"carouselPage"+index}>
                    <h1 className="carouselTitle">{slide.title}</h1>
                    <p className="carouselSubtitle">{slide.subtitle}</p>
                    {index==1?<Button type="primary" size="large">
                        {slide.ctaText}
                    </Button>  : null}
                    
                </div>
            ))}
        </Carousel>
    );
};

export default SliderComponent;