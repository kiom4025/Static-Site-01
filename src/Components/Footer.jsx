import React from 'react';
import { LinkedIn, YouTube, Instagram, X } from '@mui/icons-material';
import { ConfigProvider, Space, List } from 'antd';
import { Col, Row } from 'antd';

const data = [
    '5423, Saket Court, New Delhi',
    '568, Patiala House Court, New Delhi',
    '247, Block A, Rajasthan High Court,Jaipur',
    '265, Sikandrabad, Bulandshahr, Uttar Pradesh',
    '102, Bhavya Sree Arcade, Erragada, Hyderabad',
];
const data2 = [
    'Mobile: +91 987654321',
    'Mobile: +56 968435219',
    'Telephone: 044-87654321',
    '\n ',
    'help@justicewarrior.in',
];

function FooterContent() {
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
                        span: 3,
                        // offset: 2,
                    }}
                >
                    <Space size={'large'} style={{ padding: "7% 0%" }}>
                        <X fontSize='large' />
                        <Instagram fontSize='large' />
                        <YouTube fontSize='large' />
                        <LinkedIn fontSize='large' />
                    </Space>
                </Col>
                <Col
                    xs={{
                        span: 24,
                        offset: 1,
                    }}
                    lg={{
                        span: 9,
                        offset: 4,

                    }}
                >
                    <List
                        size="small"
                        header={<> Our Offices :</>}
                        // footer={<div>Footer</div>}
                        // bordered
                        dataSource={data}
                        renderItem={(item) => <List.Item>{item}</List.Item>}
                        style={{ width: "fit-content", textAlign: 'start', textWrap: 'balance' }}
                    />
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
export default FooterContent;