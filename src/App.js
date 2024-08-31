import React, { useState, useEffect } from 'react';
import './App.css';
import MainLayout from './Components/Layout';
import { Button, Result } from 'antd';
import Cookies from 'js-cookie';

const disclaimerText = (
  <>
    <b>According to the guidelines of the Bar Council of India, lawyers and law offices are prohibited from soliciting clients or advertising.</b>
    <br /><br />
    <i>By clicking the "I Agree" button, you confirm that you are seeking information independently about justice warrior. <br />It is also acknowledged that no advertisements, personal communications, solicitations, invitations,<br /> or any other forms of inducement have been made by or on behalf of justice warrior<br /> or any of its members to solicit work through this website.</i>
  </>
);

function App() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  useEffect(() => {
    // Check if the user has seen the disclaimer (cookie exists)
    const hasSeenDisclaimer = Cookies.get('hasSeenDisclaimer');

    if (hasSeenDisclaimer) {
      setShowDisclaimer(false); // Hide the disclaimer if the cookie exists
    }
  }, []);

  const handleConfirm = () => {
    setShowDisclaimer(false);
    // Set a cookie to remember that the user has seen the disclaimer
    Cookies.set('hasSeenDisclaimer', 'true', { expires: 1 / 24 / 4 }); // 15 minutes (1/24 of a day)
  };

  return (
    showDisclaimer ? (
      <Result
        title="Disclaimer: "
        subTitle={disclaimerText}
        extra={<Button type="primary" onClick={handleConfirm}>I Agree</Button>}
      />
    ) : (
      <MainLayout />
    )
  );
}

export default App;
