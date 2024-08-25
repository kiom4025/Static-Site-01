import React from 'react';
import { Layout, theme } from 'antd';
import FooterContent from './Footer';
import PracticeArea from './PracticeArea';
import FloatWhatsappCall from './FloatWhatsappCall';
import Mission from './Mission';
import ContactForm from './ContactFormLayout';
import ImageSlider from './ImageSlider';
import AboutUs from './About';


const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <FloatWhatsappCall />
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      >

      </Header>
      <Content
        style={{
          margin: '15px 15px',
          overflow: 'initial',
          // textAlign: 'center'
        }}
      >
        <ImageSlider />
        <AboutUs />
        <Mission />
        <PracticeArea />
        <ContactForm />
      </Content>

      <Footer
        style={{
          textAlign: 'center',
          backgroundColor: '#0a1639',
          color: 'white',
        }}
      >
        <FooterContent />
      </Footer>

    </Layout>
  );
};
export default MainLayout;