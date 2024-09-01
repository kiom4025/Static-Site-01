import React from 'react';
import { Card, Divider, List, Typography } from 'antd';
import Mission_img from '../assets/Mission.png'
import Value_img from '../assets/Value.jpeg'
import Employment_img from '../assets/Employment_Law.png'
import content from '../data/content';

const { Text } = Typography;
const data = [
    {
        content: content.missionStatement[0].content,
        logo: Value_img
    },
    {
        content: content.missionStatement[1].content,
        logo: Mission_img
    },
    {
        content: content.missionStatement[2].content,
        logo: Employment_img
    }
];

const Mission = () => (
    <div id='MissionSection'>
        <Divider></Divider>
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
                    <Card style={{ borderRadius: '0px' }}>
                        <img src={item.logo} id='CardImage' alt='icon'></img> <br />
                        <Text style={{ textAlign: 'left' }}>{item.content}</Text>
                    </Card>
                </List.Item>
            )} />
    </div>
);
export default Mission;