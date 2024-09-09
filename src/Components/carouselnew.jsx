import React from 'react';
import { Button, Carousel, Image } from 'antd';
import Title from 'antd/es/typography/Title';
import './carouselnew.css';
import getGelp from '../assets/Slider_img_1.jpg';
import content from '../data/content'
const call_href = 'tel:' + content.floatButtons.call_chat;
const SliderComponent = ({slides}) => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <Carousel swipe={true} arrows={true} afterChange={onChange}>
            <div>
                <div className="carouselPage1">
                    <div>
                        <Title style={{ color: "white", textShadow: "2px 2px 4px #000000", WebkitTextStroke: "1px black" }}>Your Trusted Legal Advocates</Title>
                        <h2 style={{ textShadow: "2px 2px 4px #000000", WebkitTextStroke: "1px black" }}>Fighting for justice, one case at a time</h2>
                    </div>
                </div>
            </div>
            <div>
                <div className="carouselPage2">
                <Title style={{ color:"white",textShadow: "2px 2px 4px #000000", WebkitTextStroke: "1px white" }}>Get in Touch With Us</Title>
                <h2>we are here to help</h2>
                <Button type="primary" size="large"><a href={call_href}>Call us</a></Button>    
                </div>
            </div>
        </Carousel>
    );
};
export default SliderComponent;