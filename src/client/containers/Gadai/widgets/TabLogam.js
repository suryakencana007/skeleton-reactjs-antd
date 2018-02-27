import React from 'react';
import styled from 'styled-components';
import { Form, Input, Icon } from 'antd';
import {
  KaoSpace,
  KaoFlex,
  KaoRow,
  KaoCol,
  KaoButton
} from 'kao-components/ui';

const FormItem = Form.Item;
const FormWrapper = styled(Form)`
  text-align: left;
`;
const Wrapper = styled.div`
  text-align: center;
  font-size: 14px;
  color: #323232;
`;

const FormLogam = ({ n }) => (
  <div>
    <div><strong>Logam Mulia {n}</strong></div>
    <KaoSpace size="xl" />
    <KaoRow>
      <KaoCol xs={24} md={24}>
        <FormItem
          label="Berat (gram)"
        >
          <Input size="large" placeholder="Berapa beratnya?" />
        </FormItem>
      </KaoCol>
    </KaoRow>
  </div>
);

export const SimulasiTabLogam = () => (
  <Wrapper>
    <KaoSpace size="xl" />
    <KaoSpace size="xl" />
    <KaoFlex justify="center">
      <KaoCol span={8}>
        <strong>Lengkapi Data Logam Mulia</strong>
      </KaoCol>
    </KaoFlex>
    <KaoSpace size="xl" />
    <KaoSpace size="xl" />
    <FormWrapper layout="vertical">
      <KaoFlex justify="center">
        <KaoCol xs={24} md={10} offset={4}>
          <FormLogam n={1} />
          <FormLogam n={2} />
          <FormLogam n={3} />
        </KaoCol>
        <KaoCol xs={24} md={9} offset={1}>
          <KaoSpace size="xl" />
          <KaoSpace size="xl" />
          <KaoSpace size="xl" />
          <KaoSpace size="sm" />
          <KaoButton type="primary">Taksir</KaoButton>
        </KaoCol>
      </KaoFlex>
      <KaoFlex justify="center">
        <KaoCol xs={24} md={10} pull={3}>
          <KaoButton
            type="dashed"
          >
            <Icon type="plus" /> Tambah Logam Mulia lain
          </KaoButton>
        </KaoCol>
      </KaoFlex>
    </FormWrapper>
  </Wrapper>
);
