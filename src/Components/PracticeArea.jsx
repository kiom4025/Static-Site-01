import React from 'react';
import { Card, List, Divider, ConfigProvider, Typography } from 'antd';
import Civil_img from '../assets/Civil_Law.png'
import Criminal_img from '../assets/Criminal_Law.png'
import Personal_img from '../assets/Personal_Law.png'
import Employment_img from '../assets/Employment_Law.png'
import Matrimonial_img from '../assets/Matrimonial_law.png'
import Business_img from '../assets/Business_Law.png'

const { Text } = Typography;
const data = [
    {
        title: 'Civil Law',
        logo: Civil_img
    },
    {
        title: 'Criminal Law',
        logo: Criminal_img
    },
    {
        title: 'Personal Law',
        logo: Personal_img
    },
    {
        title: 'Employment Law',
        logo: Employment_img
    },
    {
        title: 'Matrimonial Law',
        logo: Matrimonial_img
    },
    {
        title: 'Business Law',
        logo: Business_img
    }
];

const PracticeArea = () => (
    <div style={{ padding:"0% 5%", textAlign: 'center' }}>
        <ConfigProvider
            theme={{
                token: {
                    /* here is your global tokens */
                    fontSize: 20,
                },
            }}>
            <Divider>Our Practice Areas</Divider>

            <List
                grid={{
                    gutter: 16,
                    column: 3,
                    xs: 1,
                    lg: 2,
                }}
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <Card
                            // title={item.title}
                            style={{
                                boxShadow: '2px 4px 12px rgba(0, 0, 0, 0.08)',
                                borderRadius: '12px',
                            }}>
                            <img src={item.logo} style={{ width: "100px" }} alt='icon'></img> <br />
                            <Text strong>{item.title}</Text>

                        </Card>
                    </List.Item>
                )} />
        </ConfigProvider>
    </div>
);
export default PracticeArea;