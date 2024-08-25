import React from 'react';
import { Button } from 'antd';
import { Col, Row } from 'antd';
import Logo from '../assets/Logo.png'

function handleClick(id) {
    const anchor = document.querySelector(`#${id}`);
    if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        console.error(`Element with id ${id} not found.`);
    }
}


function HeaderContent() {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <div
                    style={{
                        display: 'inline-flex',
                        // justifyContent:'space-between'
                    }}>
                    <img src={Logo} alt='Logo' height={60} style={{ margin: '1%' }} />
                    <b id='Logo'>Justice&nbsp;Warriors</b>
                </div>
                <Row
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        paddingRight: '2%',
                    }}
                    gutter={10}
                >
                    <Col>
                        <Button type='text' size='large' onClick={() => handleClick('aboutUsSection')}>About us</Button>
                    </Col>
                    <Col>
                        <Button type='text' size='large' onClick={() => handleClick('practiceAreaSection')}>Our Practice</Button>
                    </Col>
                    <Col>
                        <Button size='large' onClick={() => handleClick('contactFormSection')}>Contact</Button>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default HeaderContent;

/* 
Credits:
1. https://stackoverflow.com/questions/54715462/react-scroll-how-to-scroll-to-a-specific-targeted-component-when-clicking-on-n
*/