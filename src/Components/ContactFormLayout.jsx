import React from 'react';
import { ConfigProvider, Divider } from 'antd';
import ConsultForm from './ContactForm';


const ContactForm = () => (
    <div >
        <ConfigProvider
            theme={{
                token: {
                    /* here is your global tokens */
                    fontSize: 20,
                },
            }}>
        <Divider style={{paddingTop:'2%'}}>Consult a lawyer</Divider>
        </ConfigProvider>
            <ConsultForm />
    </div>
);
export default ContactForm;