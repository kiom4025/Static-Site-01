import React from 'react';
import { ConfigProvider, List } from 'antd';
import AboutUS_img from '../assets/AboutUS.png'
import { Col, Row } from 'antd';
import content from '../data/content'

const AboutUs = () => (

  <div style={{ paddingTop: '4%' }} id='aboutUsSection'>
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
            header={<b style={{ fontSize: '1.5rem' }}>{content.aboutUs[0].title}</b>}
            dataSource={content.aboutUs}
            renderItem={(item) => <List.Item>{item.content}</List.Item>}
          />
        </ConfigProvider>
      </Col>
    </Row>
  </div>

);
export default AboutUs;