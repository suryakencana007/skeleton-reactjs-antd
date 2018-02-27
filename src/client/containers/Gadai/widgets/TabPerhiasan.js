import React from 'react';
import styled from 'styled-components';
import { Form, Input, Select, Icon } from 'antd';
import {
  KaoSpace,
  KaoFlex,
  KaoRow,
  KaoCol,
  KaoButton
} from 'kao-components/ui';

const Option = Select.Option;


const FormItem = Form.Item;
const FormWrapper = styled(Form)`
  text-align: left;
`;
const Wrapper = styled.div`
  text-align: center;
  font-size: 14px;
  color: #323232;
`;

const FormPerhiasan = () => (
  <div>
    <div><strong>Perhiasan 1</strong></div>
    <KaoSpace size="xl" />
    <KaoRow>
      <KaoCol xs={24} md={8}>
        <FormItem
          label="Jenis Perhiasan"
        >
          <Input size="large" placeholder="Masukkan jenis perhiasan" />
        </FormItem>
      </KaoCol>
      <KaoCol xs={24} md={8}>
        <FormItem
          label="Berat (gram)"
        >
          <Input size="large" placeholder="Berapa beratnya?" />
        </FormItem>
      </KaoCol>
      <KaoCol xs={24} md={8}>
        <FormItem
          label="Karat"
        >
          <Select
            size="large"
            placeholder="- Pilih kadar karat -"
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>Disabled</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </FormItem>
      </KaoCol>
    </KaoRow>
  </div>
);

export const SimulasiTabPerhiasan = () => (
  <Wrapper>
    <KaoSpace size="xl" />
    <KaoSpace size="xl" />
    <KaoFlex justify="center">
      <KaoCol span={8}>
        <strong>Lengkapi Data Perhiasan</strong>
      </KaoCol>
    </KaoFlex>
    <KaoSpace size="xl" />
    <KaoSpace size="xl" />
    <FormWrapper layout="vertical">
      <FormPerhiasan />
      <KaoRow>
        <KaoCol xs={24} md={6}>
          <KaoButton
            type="dashed"
          >
            <Icon type="plus" /> Tambah Perhiasan lain
          </KaoButton>
        </KaoCol>
        <KaoCol xs={24} md={4} push={14} style={{ textAlign: 'right' }}>
          <KaoButton type="primary">Taksir</KaoButton>
        </KaoCol>
      </KaoRow>
    </FormWrapper>
  </Wrapper>
);
