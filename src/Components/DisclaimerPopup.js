import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
const DisclaimerPopup = () => (
  <Result
    icon={<SmileOutlined />}
    title="Disclaimer: According to the guidelines of the Bar Council of India, lawyers and law offices are prohibited from soliciting clients or advertising."
    subTitle="Please check and modify the following information before resubmitting."
    extra={<Button type="primary">I Agree</Button>}
  />
);
export default DisclaimerPopup;