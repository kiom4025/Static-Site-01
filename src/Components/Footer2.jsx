import React from 'react';
import Link from '@mui/material/Link';
import { LinkedIn, YouTube, Instagram, X } from '@mui/icons-material';
import { ConfigProvider, Space, List } from 'antd';
import { Col, Row } from 'antd';


const data2 = [
    'Mobile: +91 987654321',
    'Mobile: +56 968435219',
    'Telephone: 044-87654321',
    '\n ',
    'help@justicewarrior.in',
];

function FooterContent2() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    /* here is your global tokens */
                    colorText: 'white',
                    // lineHeight: '0.7',
                    fontSize: '1rem',
                },
            }}
        >
            <Row>
                <Col
                    xs={{
                        span: 24,
                        offset: 1,
                    }}
                    lg={{
                        span: 12,
                        // offset: 2,
                    }}
                >
                    <Space size={'large'} style={{ padding: "7% 0%" }}>
                    <Link href="https://twitter.com/"><X fontSize='large' /></Link>
                    <Link href="https://www.instagram.com/"><Instagram fontSize='large' /></Link>
                    <Link href="https://www.youtube.com/" 
                    // color={'error'}
                    ><YouTube fontSize='large' /></Link>
                    <Link href="https://in.linkedin.com/"><LinkedIn fontSize='large' /></Link>
                    </Space>
                </Col>
                
                <Col
                    xs={{
                        span: 24,
                        offset: 1,
                    }}
                    lg={{
                        span: 6,
                        offset: 1,
                    }}
                >
                    <List
                        size="small"
                        header={<>Contact :</>}
                        // footer={<div>Footer</div>}
                        // bordered
                        dataSource={data2}
                        renderItem={(item) => <List.Item>{item}</List.Item>}
                        style={{ width: "fit-content", textAlign: 'start' }}
                    />
                </Col>
            </Row>

            <div>
                <br />
                <p style={{ fontSize: '1rem' }}>
                    Copyright @{new Date().getFullYear()}, Justice Warriors law firm.
                </p>
            </div>

        </ConfigProvider>
    );
}
export default FooterContent2;