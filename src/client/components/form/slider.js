import React from 'react';
import { Slider, InputNumber } from 'antd';
import { KaoRow, KaoCol } from 'kao-components/ui';


export const SliderInput = ({ tips, marks = {}, min, max, size, onChange, sliderValue }) => {
  const colotwo = Math.round(size / 3);
  const colone = size - colotwo;
  const format = value => (`${value}${tips}`);

  return (
    <KaoRow>
      <KaoCol span={colone}>
        <Slider
          marks={marks}
          min={min || 1}
          max={max}
          onChange={onChange}
          tipFormatter={tips ? format : null}
          value={sliderValue}
        />
      </KaoCol>
      <KaoCol span={colotwo}>
        <InputNumber
          min={min || 1}
          max={max}
          onChange={onChange}
          size="large"
          style={{ marginLeft: '0.6rem' }}
          value={sliderValue}
        />
      </KaoCol>
    </KaoRow>
  );
};
