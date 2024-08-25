import React from 'react';
import { ConfigProvider, List } from 'antd';
import AboutUS_img from '../assets/AboutUS.png'
import { Col, Row } from 'antd';

const data = [
  {
    title: 'About us',
    description: "At Justice Warrior Law Firm, we are dedicated to providing exceptional legal services with a personal touch. Founded in 2024, our firm has become a trusted advocate for individuals and businesses seeking justice and fairness. Our experienced team of advocates brings a wealth of knowledge and a relentless commitment to achieving the best possible outcomes for our clients.",
  },
];
const AboutUs = () => (

  <div style={{ textAlign: 'center', paddingTop: '4%' }} id='aboutUsSection'>
    <Row style={{ alignItems: 'center' }}>
      <Col
        xs={{
          span: 24,
          // offset: 2,
        }}
        lg={{
          span: 3,
          offset: 4,
        }}
      >
        <img src={AboutUS_img} alt='About us' height={230} />
      </Col>
      <Col
        xs={{
          span: 24,
          // offset: 1,
        }}
        lg={{
          span: 9,
          offset: 4,

        }}
      >
        <ConfigProvider
          theme={{
            token: {
              /* here is your global tokens */
              fontSize: '1.1rem',
            },
          }}
        >
          <List
            header={<b style={{ fontSize: '1.5rem' }}>{data[0].title}</b>}
            dataSource={data}
            renderItem={(item) => <List.Item>{item.description}</List.Item>}
          />
        </ConfigProvider>
      </Col>
    </Row>
  </div>

);
export default AboutUs;