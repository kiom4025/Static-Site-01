import React from 'react';
import { Button, Drawer } from 'antd';
import { Col, Row } from 'antd';
import Logo from '../assets/Logo.png'
import { MenuOutlined } from '@ant-design/icons';
import './Header.css';
import content from '../data/content';


function HeaderContent() {
    const [openDrawer, setOpenDrawer] = React.useState(false);
    function handleClick(id) {
        const anchor = document.querySelector(`#${id}`);
        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            console.error(`Element with id ${id} not found.`);
        }
        setOpenDrawer(false);
    }
    const onClose = () => {
        setOpenDrawer(false);
    }
    const showDrawer = () => {
        setOpenDrawer(true);
    }

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
                <div className='mobile-menu'>
                    <Button type="primary" style={{ background: "#e7a937" }} onClick={showDrawer}>
                        <MenuOutlined />
                    </Button>
                    <Drawer width="250px" closable={true} placement='right' open={openDrawer} onClose={onClose}>
                        <Button type='text' size='large' onClick={() => handleClick(content.menuItems[0].link)}>{content.menuItems[0].label}</Button>
                        <Button type='text' size='large' onClick={() => handleClick(content.menuItems[1].link)}>{content.menuItems[1].label}</Button>
                        <Button size='large' onClick={() => handleClick(content.menuItems[2].link)}>{content.menuItems[2].label}</Button>
                    </Drawer>

                </div>
                <div className='desktop-menu'>
                    <Row
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            paddingRight: '2%',
                        }}
                        gutter={10}
                    >
                        <Col>
                            <Button type='text' size='large' onClick={() => handleClick(content.menuItems[0].link)}>{content.menuItems[0].label}</Button>
                        </Col>
                        <Col>
                            <Button type='text' size='large' onClick={() => handleClick(content.menuItems[1].link)}>{content.menuItems[1].label}</Button>
                        </Col>
                        <Col>
                            <Button size='large' onClick={() => handleClick(content.menuItems[2].link)}>{content.menuItems[2].label}</Button>
                        </Col>
                    </Row>

                </div>

            </div>
        </>
    )
}

export default HeaderContent;

/* 
Credits:
1. https://stackoverflow.com/questions/54715462/react-scroll-how-to-scroll-to-a-specific-targeted-component-when-clicking-on-n
*/