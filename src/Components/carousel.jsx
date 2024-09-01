import React from 'react';
import { Button, Carousel } from 'antd';
import Title from 'antd/es/typography/Title';
import './Carousel.css';
import getGelp from '../assets/Slider_img_1.jpg';
const SliderComponent = ({ title, subtitle, ctaText }) => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <Carousel swipe={true} arrows={true} afterChange={onChange}>
            {/* 1 */}
            <div>
                <div className="carouselPage">
                    <div>
                        <Title style={{ color: "white", textShadow: "2px 2px 4px #000000", WebkitTextStroke: "1px black" }}>{title}</Title>
                        <h2 style={{ textShadow: "2px 2px 4px #000000", WebkitTextStroke: "1px black" }}>{subtitle}</h2>
                    </div>
                </div>
            </div>

            {/* 2 */}
            <div>
                <div className="carouselPage" style={{ backgroundImage: `url(${getGelp})` }}>
                    <Title style={{ color: "white", textShadow: "2px 2px 4px #000000", WebkitTextStroke: "1px white" }}>Get in Touch With Us</Title>
                    <h2>we are here to help</h2>
                    <Button type="primary" size="large">Call Us</Button>
                </div>
            </div>
        </Carousel>
    );
};
export default SliderComponent;