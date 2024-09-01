import React from 'react';
import { LinkedIn, YouTube, Instagram, X } from '@mui/icons-material';
import { ConfigProvider, Space, List } from 'antd';
import { Col, Row } from 'antd';
import content from '../data/content'

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
                        header={<> {content.footer.offices.title} :</>}
                        // footer={<div>Footer</div>}
                        // bordered
                        dataSource={content.footer.offices.locations}
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
                        header={<>{content.footer.contact.title} :</>}
                        // footer={<div>Footer</div>}
                        // bordered
                        dataSource={content.footer.contact.list}
                        renderItem={(item) => <List.Item>{item}</List.Item>}
                        style={{ width: "fit-content", textAlign: 'start' }}
                    />
                </Col>
            </Row>

            <div>
                <br />
                <p style={{ fontSize: '1rem' }}>
                &#169;{content.footer.copyright}
                </p>
            </div>

        </ConfigProvider>
    );
}
export default FooterContent;