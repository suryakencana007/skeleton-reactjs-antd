import React from 'react';
import styled from 'styled-components';
import { SEO } from 'kao-components/common';
import {
  media,
  KaoContainer,
  KaoSpace,
  KaoFlex,
  KaoCol,
  KaoCard
} from 'kao-components/ui';
import { KaoBG, TitleContainer } from 'kao-components/common';
import BGGadai from 'kao-assets/bg-gadai.jpg';

import { SimulasiTabPerhiasan } from './widgets/TabPerhiasan';
import { SimulasiTabLogam } from './widgets/TabLogam';
import { GridKeuntungan } from './widgets/GridKeuntungan';
import { Testimony } from 'kao-containers';


const Wrapper = styled.div`
  text-align: center;
  font-size: 14px;
  color: #323232;
  background-color: #fff;
`;
const FeatureTitle = styled.p`
  color: #fff;
  font-size: 26px;
  font-weight: 300;
  line-height: 1.46;
  margin: 0 auto;
  padding-top: ${81 / 16}rem;
  ${media.phonesm`
    width: 100%;
  `};
  ${media.tablet`
    width: 630px;
  `};
  ${media.desktop`
    width: 630px;
  `};
  ${media.retina`
    width: 630px;
  `};
  ${media.retina4K`
    width: 630px;
  `};
`;
const SimulasiCard = styled(KaoCard)`
  margin-top: -49px !important;
  width: 100%;
  .ant-card-head {
    padding: 0 !important;
  }
  .ant-tabs-nav {
    font-size: 14px !important;
    width: 100%;
  }
  .ant-tabs-tab {
    width: 46%;
  }
`;
const SimulasiTabKey = [
  {  key: 'perhiasan', tab: 'Perhiasan Emas' },
  {  key: 'logam', tab: 'Logam Mulia' }
];
const SimulasiTabContent = {
  perhiasan: <SimulasiTabPerhiasan />,
  logam: <SimulasiTabLogam />
};

export default class Gadai extends React.PureComponent<{}> {
  state = {
    tab: 'perhiasan',
  }

  onTabs = key => {
    this.setState({
      tab: key
    });
  }

  render() {
    return (
      <Wrapper>
        <SEO
          description="Cara kerja dan langkah mudah solusi dana cepat anda dalam melakukan taksiran"
          title="Gadai Syariah"
          schema="Website"
          path="/gadai"
        />
        <KaoFlex justify="space-around" align="middle">
          <KaoCol span={24}>
            <KaoBG image={BGGadai} width="100%" height="100%">
              <KaoContainer style={{ height: 300 }}>
                <FeatureTitle>
                Transaksi pembiayaan <strong>amanah</strong> dengan cara yang tepat, dan <strong>berkah</strong> hasilnya
                </FeatureTitle>
              </KaoContainer>
            </KaoBG>
          </KaoCol>
        </KaoFlex>
        <KaoContainer>
          <KaoFlex justify="center">
            <KaoCol span={20}>
              <SimulasiCard
                tabList={SimulasiTabKey}
                onTabChange={this.onTabs}
              >
                {SimulasiTabContent[this.state.tab]}
              </SimulasiCard>
            </KaoCol>
          </KaoFlex>
        </KaoContainer>
        <KaoContainer>
          <KaoSpace size="lg" />
          <KaoSpace size="lg" />
          <KaoSpace size="lg" />
          <KaoSpace size="lg" />
          <TitleContainer span={10} size={24} bold="true">Keuntungan Gadai Syariah di Pinjam.co.id</TitleContainer>
          <KaoSpace size="lg" />
          <GridKeuntungan />
          <KaoSpace size="lg" />
          <KaoSpace size="lg" />
          <KaoSpace size="lg" />
          <TitleContainer span={10} size={24} bold="true">Pendapat Mereka</TitleContainer>
          <KaoSpace size="lg" />
          <KaoFlex justify="center">
            <Testimony />
          </KaoFlex>
          <KaoSpace size="lg" />
          <KaoSpace size="lg" />
        </KaoContainer>
      </Wrapper>
    );
  }
}
