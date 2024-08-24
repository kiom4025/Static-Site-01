import React from 'react';
import { LinkedIn, YouTube, Instagram, X } from '@mui/icons-material';
import { ConfigProvider, Flex, Space } from 'antd';
import { List, Typography } from 'antd';
const data = [
    '5423,Saket Court,New Delhi',
    '568,Patiala House Court,New Delhi',
    '247,Block A, Rajasthan High Court,Jaipur',
    '265,Sikandrabad,Bulandshahr,Uttar Pradesh',
    '102,Bhavya Sree Arcade,Erragada,Hyderabad',
];
const data2 = [
    'Mobile: +91 802156651354',
    'Mobile: +56968435219',
    'Telephone: 044-235161354',
    '\n ',
    'help@justicewarrior.in',
];

function FooterContent() {
    return (
        <>
        <Flex justify={'space-around'} align={'center'}>
            <Space size={'middle'}>
                <X fontSize='large'/>
                <Instagram fontSize='large'/>
                <YouTube fontSize='large'/>
                <LinkedIn fontSize='large'/>
            </Space>

            <ConfigProvider
                theme={{
                    token: {
                        /* here is your global tokens */
                        colorText: 'white',
                        lineHeight: '0.7',
                        fontSize: '1.2rem',
                    },
                }}
            >
                <div style={{textAlign:'left'}}>
                <List
                    size="small"
                    header={<>Our Offices:</>}
                    // footer={<div>Footer</div>}
                    // bordered
                    dataSource={data}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                />
                </div>
                <div style={{textAlign:'left'}}>
                <List
                    size="small"
                    header={<>Contact:</>}
                    // footer={<div>Footer</div>}
                    // bordered
                    dataSource={data2}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                />
                </div>
            </ConfigProvider>
            </Flex>
            <br />
            <p style={{fontSize:'1rem'}}>
            Copyright @{new Date().getFullYear()}, Justice Warriors law firm.
            </p>
            </>
    );
}
export default FooterContent;