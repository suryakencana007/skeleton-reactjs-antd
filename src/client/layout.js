import React from 'react';
import { Link } from 'react-router-dom';
import { Affix, Icon, Divider } from 'antd';
import styled from 'styled-components';
import {
  KaoLayout,
  KaoHeader,
  KaoFooter,
  KaoNavigation,
  KaoMenu,
  KaoContent
} from 'kao-components/layout';
import {
  KaoContainer,
  KaoSpace,
  KaoFlex,
  KaoRow,
  KaoCol
} from 'kao-components/ui';
import { KaoLogo, KaoIcon } from 'kao-components/common';
import LogoOjk from 'kao-assets/pinjam-ojk.svg';
import Phone from 'kao-assets/phone-call.svg';
import WA from 'kao-assets/whatsapp.svg';
import Mail from 'kao-assets/envelope.svg';

const SubIcon = styled(Icon)`
  margin-right: 8px;
`;
const Subheader = styled.span`
  float: right;
  margin: 0 12px;
`;
const FooterLayout = styled(KaoFooter)`
  color: #fff !important;
  border-top: .19rem #28B43C solid;
  background-color: #22415b !important;
`;
const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: normal;
`;
const menus = [
  { key: 'partner', name: 'Partner',
    children: [
      { key: 'agen', name: 'Agen', path: '/agen' },
      { key: 'mitra', name: 'Mitra', path: '/mitra' },
      { key: 'tentang-partner', name: 'Tentang Partner', path: '/tentang/agen-mitra' },
    ]
  },
  { key: 'produk', name: 'Produk',
    children: [
      { key: 'gadai', name: 'Gadai', path: '/gadai' },
      { key: 'pinjaman', name: 'Pinjaman', path: '/taksiran' },
    ]
  },
{ key: 'beranda', name: 'Beranda', path: '/' }
];
const MainLayout = ({ children, history, ...rest }) => (
  <KaoLayout {...rest}>
    <KaoHeader size="sm">
      <KaoContainer>
        <KaoRow>
          <KaoCol xs={24}>
            <Subheader><SubIcon type="mail" />cs@pinjam.co.id</Subheader>
            <Subheader><SubIcon type="phone" />021 27506800</Subheader>
            <Subheader><SubIcon type="environment-o" />Cabang dan Mitra</Subheader>
          </KaoCol>
        </KaoRow>
      </KaoContainer>
    </KaoHeader>
    <Affix>
    <KaoHeader>
      <KaoNavigation>
        <KaoFlex>
          <KaoCol xs={12}>
            <KaoLogo size={42} image={LogoOjk} style={{ padding: '33px 0px' }} />
          </KaoCol>
          <KaoCol xs={12}>
            <KaoMenu
              history={history}
              menus={menus}
              style={{ height: '64px', lineHeight: '64px' }}
              subStyle={{ float: 'right' }}
            />
          </KaoCol>
        </KaoFlex>
      </KaoNavigation>
    </KaoHeader>
    </Affix>
    <KaoContent>
    {children}
    </KaoContent>
    <FooterLayout>
      <KaoContainer>
        <KaoRow>
          <KaoCol xs={24} md={24} lg={11}>
            <p
              style={{
                fontWeight: 'bold',
                fontSize: 14,
                marginBottom: 0
              }}
            >Kantor Pusat
            </p>
            <KaoSpace size="md" />
            <p
              style={{
                fontWeight: 'normal',
                fontSize: 14,
                lineHeight: 1.57,
                maxWidth: 258,
                height: 44
              }}
            >Jl. Sungai Sambas II No. 13, Kebayoran Baru Jakarta Selatan 12130
            </p>
          </KaoCol>
          <KaoCol xs={24} md={24} lg={13}>
            <p
              style={{
                fontWeight: 'normal',
                fontSize: 13,
                marginBottom: 0
              }}
            >Butuh Bantuan? Hubungi customer service kami di:
            </p>
            <KaoSpace size="md" />
            <KaoFlex justify="end">
              <KaoCol xs={24} md={8} lg={8}>
                <KaoIcon image={Phone} size={24} /><span style={{ fontSize: 20 }}>+62 21 2750 6800</span>
              </KaoCol>
              <KaoCol xs={24} md={8} lg={8}>
                <KaoIcon image={WA} size={24} /><span style={{ fontSize: 20 }}>0812 9008 5275</span>
              </KaoCol>
              <KaoCol xs={24} md={8} lg={8}>
                <KaoIcon image={Mail} size={24} /><span style={{ fontSize: 20 }}>cs@pinjam.co.id</span>
              </KaoCol>
            </KaoFlex>
          </KaoCol>
        </KaoRow>
        <Divider style={{ background: 'rgba(255, 255, 255, 0.24)' }} />
        <KaoRow>
          <KaoCol xs={24} md={17}>
            <KaoRow>
              <KaoCol xs={24} md={6}>
                <strong>Produk</strong>
                <KaoSpace size="lg" />
                <FooterLink to="/gadai">Gadai Online</FooterLink>
                <KaoSpace size="md" />
                <FooterLink to="/gadai">Pinjaman Mikro</FooterLink>
                <KaoSpace size="md" />
                <FooterLink to="/gadai">Mitra</FooterLink>
                <KaoSpace size="md" />
                <FooterLink to="/pinjaman">Agen</FooterLink>
              </KaoCol>
              <KaoCol xs={24} md={6}>
                <strong>Pinjam.co.id</strong>
                <KaoSpace size="lg" />
                <FooterLink to="/perusahaan/tentang">Tentang Kami</FooterLink>
                <KaoSpace size="md" />
                <FooterLink to="/perusahaan/kenapa">Kenapa Kami</FooterLink>
                <KaoSpace size="md" />
                <FooterLink to="/investor">Investor</FooterLink>
                <KaoSpace size="md" />
                <FooterLink to="/perusahaan/rekan">Rekan</FooterLink>
                <KaoSpace size="md" />
                <FooterLink to="/perusahaan/karier">Karier</FooterLink>
                <KaoSpace size="md" />
                <FooterLink to="/perusahaan/tim">Tim</FooterLink>
              </KaoCol>
              <KaoCol xs={24} md={6}>
                <strong>Bantuan</strong>
                <KaoSpace size="lg" />
                <FooterLink to="/bantuan/syarat-ketentuan">Syarat dan Ketentuan</FooterLink>
                <KaoSpace size="md" />
                <FooterLink to="/bantuan/hubungi-kami">Hubungi Kami</FooterLink>
                <KaoSpace size="md" />
                <FooterLink to="/bantuan/faq">FAQ</FooterLink>
              </KaoCol>
              <KaoCol xs={24} md={6}>
                <strong>Lainnya</strong>
                <KaoSpace size="lg" />
                <FooterLink to="/lokasi-cabang-mitra">Lokasi Cabang &amp; Mitra</FooterLink>
                <KaoSpace size="md" />
                <FooterLink to="/testimoni">Testimoni</FooterLink>
                <KaoSpace size="md" />
                <FooterLink to="/media">Media</FooterLink>
                <KaoSpace size="md" />
                <FooterLink to="http://pinjam.co.id/blog" target="_blank">Blog</FooterLink>
              </KaoCol>
            </KaoRow>
          </KaoCol>
          <KaoCol xs={24} md={7}>
            <KaoFlex justify="end">
              <KaoCol xs={24}>
                <span style={{ float: 'right' }}>ok</span>
              </KaoCol>
            </KaoFlex>
          </KaoCol>
        </KaoRow>
      </KaoContainer>
    </FooterLayout>
  </KaoLayout>
);

export default MainLayout;
