import React from 'react';
import { Layout, theme } from 'antd';
import FooterContent from './Footer';
import PracticeArea from './PracticeArea';

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >

        </Header>
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
          <PracticeArea />
        </Content>
        
        <Footer
          style={{
            textAlign: 'center',
            backgroundColor: '#0a1639',
            color:'white',
          }}
          footerBg = "red"
>
 <FooterContent />
        </Footer>
        
    </Layout>
  );
};
export default MainLayout;