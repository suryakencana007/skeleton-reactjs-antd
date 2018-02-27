import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Form, Input } from 'antd';
import {
  KaoContainer,
  KaoSpace,
  KaoFlex,
  KaoRow,
  KaoCol,
  KaoButton,
} from 'kao-components/ui';
import { TitleContainer, SubTitle } from 'kao-components/common';
import { SliderInput } from 'kao-components/form';
import { PanelTaksiran } from './widgets/panel-taksiran';


const FormItem = Form.Item;
const FormWrapper = styled(Form)`
  text-align: left;
`;
const Wrapper = styled.div`  
  background-color: #fff;
  color: #323232;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  line-height: 1.57;
`;

const FormTaksiran = () => (
  <KaoRow>
    <KaoCol xs={24} md={18}>
      <FormItem
        label="Nilai Pembiayaan"
      >
        <Input size="large" placeholder="Jumlah Pembiayaan" />
      </FormItem>
    </KaoCol>
  </KaoRow>
);

export default class GadaiTaksiran extends React.Component<{}> {
  state = {
    slider: 1
  }

  onSliderChange = value => {
    this.setState({
      slider: value
    });
  }

  render() {
    return (
      <Wrapper>
        <Helmet
          title="Taksiran"
        >
          <meta name="description" content="Cara kerja dan langkah mudah solusi dana cepat anda dalam melakukan taksiran" />
          <meta name="keywords" content="Langkah mudah melakukan taksiran, langkah taksiran online, pengajuan taksiran online, pengajuan gadai online" />
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <KaoSpace size="lg" />
        <KaoSpace size="lg" />
        <KaoContainer>
          <TitleContainer span={10} size={24} bold="true">Simulasi Taksiran</TitleContainer>
          <KaoSpace size="sm" />
          <SubTitle size={14}>Nilai pembiayaan dan jangka waktu dapat Anda tentukan sesuai kebutuhan</SubTitle>
          <KaoSpace size="xl" />
          <KaoSpace size="xl" />
          <KaoFlex justify="center">
            <KaoCol xs={24} md={11} lg={9}>
              <SubTitle size={14} align="left">Kategori: <strong>Perhiasan Emas</strong></SubTitle>
              <KaoSpace size="xl" />
              <KaoSpace size="xl" />
              <div>Ditaksir sekitar</div>
              <SubTitle size={24} align="left" bold="true">Rp 1.250.000 - Rp 1.550.000</SubTitle>
              <SubTitle size={12} align="left">
                Harga taksiran dapat berubah, bergantung pada kondisi dan <br />
                kelengkapan barang
              </SubTitle>
              <KaoSpace size="lg" />
              <KaoSpace size="lg" />
              <SubTitle size={16} align="left" bold="true">Simulasi Taksiran</SubTitle>
              <KaoSpace size="lg" />
              <FormWrapper layout="vertical">
                <FormTaksiran />
                <SubTitle size={14} align="left">Jangka Waktu</SubTitle>
                <SliderInput
                  marks={{
                  20: '20 Minggu'
                }} tips=" Minggu" min={1} max={20} size={18} onChange={this.onSliderChange} sliderValue={this.state.slider} />
              </FormWrapper>
              <KaoSpace size="md" />
              <SubTitle size={13} align="left">Jatuh tempo tanggal 13 Juni 2017</SubTitle>
            </KaoCol>
            <KaoCol xs={24} md={11} lg={9}>
              <SubTitle size={14} bold="true">Perhitungan</SubTitle>
              <KaoSpace size="xl" />
              <PanelTaksiran />
            </KaoCol>
          </KaoFlex>
          <KaoSpace size="xl" />
          <KaoSpace size="xl" />
          <KaoFlex justify="center">
            <KaoCol xs={24} md={11} lg={9}>
              <KaoButton
                type="secondary"
                style={{ width: 180, margin: '8px 0' }}
              >Kembali
              </KaoButton>
            </KaoCol>
            <KaoCol xs={24} md={11} lg={9} style={{ textAlign: 'right' }}>
              <KaoButton
                type="primary"
                style={{ width: 180, margin: '8px 0' }}
              >Ajukan Gadai
              </KaoButton>
            </KaoCol>
          </KaoFlex>
        </KaoContainer>
        <KaoSpace size="xl" />
        <KaoSpace size="xl" />
      </Wrapper>
    );
  }
}
