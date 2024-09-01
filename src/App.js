import './App.css';
import MainLayout from './Components/Layout';
import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'antd';
import Cookies from 'js-cookie';
import content from './data/content';

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    const agreed = Cookies.get('agreed');
    if (!agreed) {
      setModalVisible(true);
    }
  }, []);


  const handleAgree = () => {
    // Set a cookie with a 30-minute expiration
    Cookies.set('agreed', 'true', { expires: 0.0208 }); // 30 minutes in days
    setModalVisible(false);
  };

  return (
    <>
      <Modal
        title={content.disclaimerModal.title}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button key="agree" onClick={() => handleAgree()} type='primary'>
            I Agree
          </Button>,
        ]}
      >
        <>
          {content.disclaimerModal.content}
          <br /><br />
          <i style={{ fontSize: '0.7rem' }}>{content.disclaimerModal.agreementNote}</i>
        </>
      </Modal>

      <MainLayout />
    </>
  );
}

export default App;