import React from 'react';
import {
  KaoCard,
  KaoCol
} from 'kao-components/ui';
import { SubTitle } from 'kao-components/common';

const TestimonyItem = ({ data }) => {
  return (
    <div xs={24} md={8} key={data.name} style={{ padding: '28px 5px 5px', width: 280, height: 270 }}>
      <KaoCard
        style={{
        padding: 20,
        width: '100%',
        height: 200,
        borderRadius: 6,
        marginTop: 10,
        boxShadow: '0 6px 15px -2px rgba(171, 180, 198, 0.42)',
        border: 'solid 1px #ebedf1'
      }}>
      <div style={{ width: 80, height: 80, margin: '-57px auto 0', overflow: 'hidden', background: '#aaa no-repeat center center', borderRadius: '50%' }}>
        <img src={data.photo} alt={data.name} style={{ width: '100%' }}/>
      </div>
      <h4 style={{ minHeight: 28, margin: '20px 0 0', textAlign: 'center', color: '#333', fontSize: 16 }}>{data.name}</h4>
      <span
        style={{
        display: 'block',
        margin: '0 auto 13px',
        textAlign: 'center',
        fontSize: 13,
        textTransform: 'capitalize',
        color: '#999'
      }}>
        {data.title}
      </span>
      <SubTitle size={13} style={{ margin: '10px 0 0', color: '#4b4c51', lineHeight: 1.35 }}>
        “{data.message}”
      </SubTitle>
      </KaoCard>
    </div>
  );
};

export default TestimonyItem;
