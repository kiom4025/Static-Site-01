import React from 'react';
import { Layout, theme } from 'antd';
import PracticeArea from './PracticeArea';
import FloatWhatsappCall from './FloatWhatsappCall';
import Mission from './Mission';
import ContactForm from './ContactFormLayout';
import SliderComponent from '../Components/carousel.jsx';
import AboutUs from './About';
import HeaderContent from './Header';
// import FooterContent from './Footer';
import FooterContent2 from './Footer2';
import content from '../data/content';

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
          // overflow:'hidden',
        }}
      >
        <HeaderContent />
      </Header>
      <Content
        style={{
          margin: '15px 15px',
          overflow: 'initial',
        }}
      >
        {/* <SliderComponent slides={content.slides} /> */}
        <SliderComponent />
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
        {/* <FooterContent /> */}
        <FooterContent2 />
      </Footer>

    </Layout>
  );
};
export default MainLayout;