import React from 'react';
import { ConfigProvider, Divider } from 'antd';
import ConsultForm from './ContactForm';
import Consulting from '../assets/Consult a lawyer.jpg'
import { Col, Row } from 'antd';
import content from '../data/content';

const ContactForm = () => (
    <div style={{ textAlign: 'center' }} id='contactFormSection'>
        <ConfigProvider
            theme={{
                token: {
                    /* here is your global tokens */
                    fontSize: 20,
                },
            }}>
            <Divider style={{ paddingTop: '2%' }}>{content.contactForm.title}</Divider>
        </ConfigProvider>
        <Row style={{ alignItems: 'center' }}>
            <Col
                xs={{
                    span: 24,
                }}
                lg={{
                    span: 7,
                    offset: 2
                }}
            >
                <img src={Consulting} style={{ height: '220px' }} alt='' />
            </Col>
            <Col
                xs={{
                    span: 24,
                }}
                lg={{
                    span: 12,
                }}
            >
                <ConsultForm />
            </Col>
        </Row>

    </div>
);
export default ContactForm;