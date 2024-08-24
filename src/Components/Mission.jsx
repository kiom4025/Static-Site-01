import React from 'react';
import { Card, List, Typography } from 'antd';
import Mission_img from '../assets/Mission.png'
import Value_img from '../assets/Value.jpeg'
import Employment_img from '../assets/Employment_Law.png'


const { Text } = Typography;
const data = [
    {
        content: 'At Justice Warrior, our mission is to provide exceptional legal services with a personal touch. We believe in upholding the principles of justice and fairness, ensuring that every client receives the best possible representation.',
        logo: Mission_img
    },
    {
        content: 'At Justice Warrior Law Firm, we uphold integrity, client-centered service, excellence, justice, fairness, respect, and accountability.',
        logo: Value_img
    },
    {
        content: 'We endeavor to create a legal advice system where each and every client  finds his disputes redressed in an economical and timely fashion.',
        logo: Employment_img
    }
];

const Mission = () => (
    <div style={{ paddingLeft: "5%", paddingRight: "5%", textAlign: 'center', height:'fit-content' }}>

        <List
            grid={{
                gutter: 60,
                column: 3,
                xs: 1,
                lg: 2,
            }}
            dataSource={data}
            renderItem={(item) => (
                <List.Item>
                    <Card
                    style={{
                                // boxShadow: '2px 4px 12px rgba(0, 0, 0, 0.08)',
                                borderRadius: '0px',
                            }}
                    >
                        <img src={item.logo} style={{ width: "50px" }} alt='icon'></img> <br />
                        <Text>{item.content}</Text>

                    </Card>
                </List.Item>
            )} />
    </div>
);
export default Mission;