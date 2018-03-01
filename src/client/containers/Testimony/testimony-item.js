import React from 'react';
import { Avatar } from 'antd';
import {
  CardSlickItem,
  KaoCard,
} from 'kao-components/ui';
import { SubTitle } from 'kao-components/common';


const TestimonyCard = KaoCard.extend`
  margin: ${10 / 16}rem !important;
  width: ${260 / 16}rem;
  height: ${200 / 16}rem;
  border-radius: 2px;
  margin-top: ${50 / 16}rem !important;
  boxShadow: 0 6px 15px -2px rgba(171, 180, 198, 0.42);
  border: solid 0.5px #ebedf1;
  background-color: #f5f5f5;
`;
const TestimonyItem = ({ data }) => {
  return (
    <CardSlickItem
      key={data.name}
      width={280}
    >
      <TestimonyCard>
        <Avatar
          size="large"
          src={data.photo}
          alt={data.name}
          style={{
            margin: '-75px auto 0',
            overflow: 'hidden',
            width: 72,
            height: 72,
            borderRadius: '50%'
          }}/>
      <SubTitle size={16} style={{ margin: '20px 0 0' }}>
        {data.name}
      </SubTitle>
      <SubTitle
        size={13}
        style={{
        margin: '0 auto 13px',
        textTransform: 'capitalize',
        color: '#999'
      }}>
        {data.title}
      </SubTitle>
      <SubTitle size={13} style={{ margin: '10px 0 0', color: '#4b4c51', lineHeight: 1.35 }}>
        “{data.message}”
      </SubTitle>
      </TestimonyCard>
    </CardSlickItem>
  );
};

export default TestimonyItem;
