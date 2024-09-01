// SliderComponent.js
import React from 'react';
import { Button, Carousel } from 'antd';
import './Carousel.css'; // Import your CSS file
import SliderImg_1 from '../assets/Slider_img_1.jpg'
import SliderImg_2 from '../assets/Slider_img_2.jpg'
import SliderImg_3 from '../assets/Slider_img_3.jpg'
import SliderImg_4 from '../assets/Slider_img_4.jpg'

const MyImage = require('../assets/Slider_img_2.jpg'); // Adjust the path


const slides = [
      {
          title: 'Welcome to Our Website',
          subtitle: 'Discover amazing things!',
          ctaText: 'Learn More',
          image: SliderImg_1,
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
        swipe 
        arrows 
        // afterChange={onChange}
        >
            {slides.map((slide, index) => (
                <div key={index} className="carouselPage" style={{ backgroundImage: `url(${slide.image})` }}>
                    <h1 className="carouselTitle">{slide.title}</h1>
                    <p className="carouselSubtitle">{slide.subtitle}</p>
                    <Button type="primary" size="large">
                        {slide.ctaText}
                    </Button>
                </div>
            ))}
        </Carousel>
    );
};

export default SliderComponent;