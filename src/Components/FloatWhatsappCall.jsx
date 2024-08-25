import React from 'react';
import { PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { ConfigProvider, FloatButton } from 'antd';
const FloatWhatsappCall = () => (
    <>
        <FloatButton.Group
            shape="circle"

            style={{
                insetInlineEnd: 24,
                marginInlineEnd: 10
            }}
        >
            <ConfigProvider
                theme={{
                    token: {
                        /* here is your global tokens */
                        colorPrimary: "#2196f3"
                    },
                }}
            >
                <FloatButton icon={<PhoneOutlined />} type='primary' tooltip={<div>Call</div>} href='tel:919344063559' />
            </ConfigProvider>

            <ConfigProvider
                theme={{
                    token: {
                        /* here is your global tokens */
                        colorPrimary: "#25D366"
                    },
                }}
            >
                <FloatButton icon={<WhatsAppOutlined />} type='primary' tooltip={<div>Chat</div>} href='https://wa.me/919344063559?text=I%20would%20appreciate%20your%20legal%20guidance.%20Could%20we%20schedule%20an%20appointment%3F' target="_blank" />
            </ConfigProvider>

            <FloatButton.BackTop visibilityHeight={0} tooltip={<div>Scroll Top</div>} />
        </FloatButton.Group>
    </>
);
export default FloatWhatsappCall;


/* 
Credits:
whatsapp Link: https://faq.whatsapp.com/5913398998672934/?helpref=hc_fnav
*/