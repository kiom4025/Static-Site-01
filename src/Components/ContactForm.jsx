import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import {
    Button,
    Form,
    Input,
    Select,
    message,
    Result,
} from 'antd';
const { Option } = Select;

const ConsultForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const formSubmitted = Cookies.get('formSubmitted');
        if (formSubmitted) {
            setIsSubmitted(true);
        }
    }, []);

    const [form] = Form.useForm();

    const onReset = () => {
        form.resetFields();
    }

    const onFinish = (values) => {
        // console.log('Received values of form: ', values);
        // Add any additional logic here
        // For example, sending the data to a server
        fetch('https://script.google.com/macros/s/AKfycbzqFS74KxW7AL9uFqacIGBqe35_4Q_tXIbLL0HHRLiiv-kAZlSloiUvveOYgzZahQRa/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
            mode: 'no-cors', // Set no-cors mode
        })
            .then(response => {
                // Note: You won't be able to access the response data here
                // console.log('Success:', response);
                Cookies.set('formSubmitted', 'true', { expires: 1 / 24 }); // Set cookie to expire in 1 hour
                setIsSubmitted(true);
                message.info('Submission Success!');
            })
            .catch((error) => {
                console.error('Error:', error);
                message.error('Submission Failed!');
            });
        onReset();
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="91">+91</Option>
            </Select>
        </Form.Item>
    );

    if (isSubmitted) {
        return (
            <Result
                title="Enquiry received. We will reach out to you shortly."
            />
        );
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Form
                form={form}
                name="register"
                onFinish={onFinish}
                style={{
                    width: 450,
                }}
                scrollToFirstError
            >
                <Form.Item
                    name="Name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Name!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="Email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="Phone"
                    label="Phone Number"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input
                        addonBefore={prefixSelector}
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>

                <Form.Item
                    name="Message"
                    label="Message"
                    rules={[
                        {
                            required: true,
                            message: 'Please input a Message',
                        },
                    ]}
                >
                    <Input.TextArea showCount maxLength={100} />
                </Form.Item>

                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Book Appointment
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default ConsultForm;