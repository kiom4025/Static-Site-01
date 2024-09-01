import React from 'react';
import Link from '@mui/material/Link';
import { LinkedIn, YouTube, Instagram, X } from '@mui/icons-material';
import { ConfigProvider, Space, List } from 'antd';
import { Col, Row } from 'antd';
import content from '../data/content'

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
                    <Link href={content.footer.socialMedia.twitter} target='_blank'><X fontSize='large' /></Link>
                    <Link href={content.footer.socialMedia.instagram} target='_blank'><Instagram fontSize='large' /></Link>
                    <Link href={content.footer.socialMedia.youtube} target='_blank'><YouTube fontSize='large' /></Link>
                    <Link href={content.footer.socialMedia.linkedin} target='_blank'><LinkedIn fontSize='large' /></Link>
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
export default FooterContent2;