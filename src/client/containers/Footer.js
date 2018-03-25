import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Divider } from 'antd';
import styled from 'styled-components';
import config from 'kao-config';
import {
  KaoFooter,
} from 'kao-components/layout';
import {
  KaoContainer,
  KaoSpace,
  KaoFlex,
  KaoRow,
  KaoCol,
  KaoList
} from 'kao-components/ui';
import {
  FieldRight,
  KaoIcon,
  KaoBG,
  KaoBadge,
  SubTitle
} from 'kao-components/common';

import Phone from 'kao-assets/phone-call.svg';
import WA from 'kao-assets/whatsapp.svg';
import Mail from 'kao-assets/envelope.svg';

import OJK from 'kao-assets/ico-OJK1.png';

const FooterLayout = styled(KaoFooter)`
  background-color: #22415b !important;
  border-top: .19rem #28B43C solid;
  color: #fff !important;
  font-weight: 300;
`;
const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: normal;
`;

export const Footer = () => (
  <FooterLayout>
    <KaoContainer>
      <KaoRow>
        <KaoCol xs={24} md={24} lg={11}>
          <SubTitle align="left" size={14} bold="true">
            Kantor Pusat
          </SubTitle>
          <KaoSpace size="md" />
          <SubTitle align="left" size={14}>
            Jl. Sungai Sambas II No. 13,<br />Kebayoran Baru Jakarta Selatan 12130
          </SubTitle>
        </KaoCol>
        <KaoCol xs={24} md={24} lg={13} style={{ textAlign: 'right' }}>
          <SubTitle align="right" size={13}>
            Butuh Bantuan? Hubungi customer service kami di:
          </SubTitle>
          <KaoSpace size="md" />
          <KaoFlex justify="end">
            <KaoCol xs={24} md={8} lg={8}>
              <SubTitle align="right" size={20}>
                <KaoIcon image={Phone} size={24} />
                +62 21 2750 6800
              </SubTitle>
            </KaoCol>
            <KaoCol xs={24} md={8} lg={8}>
              <SubTitle align="right" size={20}>
                <KaoIcon image={WA} size={24} />
                0812 9008 5275
              </SubTitle>
            </KaoCol>
            <KaoCol xs={24} md={8} lg={8}>
              <SubTitle align="right" size={20}>
                <KaoIcon image={Mail} size={24} />
                cs@pinjam.co.id
              </SubTitle>
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
              <KaoList>
                <li><FooterLink to="/gadai">Gadai Online</FooterLink></li>
                <li><FooterLink to="/gadai">Pinjaman Mikro</FooterLink></li>
                <li><FooterLink to="/gadai">Mitra</FooterLink></li>
                <li><FooterLink to="/pinjaman">Agen</FooterLink></li>
              </KaoList>
            </KaoCol>
            <KaoCol xs={24} md={6}>
              <strong>Pinjam.co.id</strong>
              <KaoSpace size="lg" />
              <KaoList>
                <li><FooterLink to="/perusahaan/tentang">Tentang Kami</FooterLink></li>
                <li><FooterLink to="/perusahaan/kenapa">Kenapa Kami</FooterLink></li>
                <li><FooterLink to="/investor">Investor</FooterLink></li>
                <li><FooterLink to="/perusahaan/rekan">Rekan</FooterLink></li>
                <li><FooterLink to="/perusahaan/karier">Karier</FooterLink></li>
                <li><FooterLink to="/perusahaan/tim">Tim</FooterLink></li>
              </KaoList>
            </KaoCol>
            <KaoCol xs={24} md={6}>
              <strong>Bantuan</strong>
              <KaoSpace size="lg" />
              <KaoList>
                <li><FooterLink to="/bantuan/syarat-ketentuan">Syarat dan Ketentuan</FooterLink></li>
                <li><FooterLink to="/bantuan/hubungi-kami">Hubungi Kami</FooterLink></li>
                <li><FooterLink to="/bantuan/faq">FAQ</FooterLink></li>
              </KaoList>
            </KaoCol>
            <KaoCol xs={24} md={6}>
              <strong>Lainnya</strong>
              <KaoSpace size="lg" />
              <KaoList>
                <li><FooterLink to="/lokasi-cabang-mitra">Lokasi Cabang &amp; Mitra</FooterLink></li>
                <li><FooterLink to="/testimoni">Testimoni</FooterLink></li>
                <li><FooterLink to="/media">Media</FooterLink></li>
                <li><FooterLink to="http://pinjam.co.id/blog" target="_blank">Blog</FooterLink></li>
              </KaoList>
            </KaoCol>
          </KaoRow>
        </KaoCol>
        <KaoCol xs={24} md={7}>
          <KaoRow>
            <FieldRight xs={24}>
              <a
                href="https://intip.in/pinjamTwitter"
                target="_blank" rel="noopener noreferrer">
                <KaoBadge size={60} box={32} paint="#68c6e1" color="#fff">
                  <Icon type="twitter" style={{ fontSize: 32 }}/>
                </KaoBadge>
              </a>
              <a
                href="https://intip.in/pinjamFacebook"
                target="_blank" rel="noopener noreferrer">
                <KaoBadge size={60} box={32} paint="#5071a9" color="#fff">
                  <Icon type="facebook" style={{ fontSize: 32 }}/>
                </KaoBadge>
              </a>
            </FieldRight>
            <FieldRight xs={24}>
              <a
                href="https://intip.in/pinjamIG"
                target="_blank" rel="noopener noreferrer">
                <KaoBadge size={60} box={32} paint="#bc2a8d" color="#fff">
                  <Icon type="instagram" style={{ fontSize: 32 }}/>
                </KaoBadge>
              </a>
              <a
                href="https://intip.in/pinjamyoutube"
                target="_blank" rel="noopener noreferrer">
                <KaoBadge size={60} box={32} paint="#e15d5b" color="#fff">
                  <Icon type="youtube" style={{ fontSize: 32 }}/>
                </KaoBadge>
              </a>
            </FieldRight>
          </KaoRow>
        </KaoCol>
      </KaoRow>
      <KaoSpace size="lg" />
      <KaoSpace size="lg" />
      <KaoRow>
        <KaoCol xs={24} md={17}>
          <SubTitle align="left" size={12} style={{ lineHeight: 1.57 }}>
          PT. Gadai Pinjam Indonesia (perusahaan) badan hukum yang telah terdaftar dan mendapatkan izin OJK dengan nomor
KEP-4 / D.05/2017. Pinjaman dari perusahaan adalah pinjaman melalui proses gadai dan fidusia. Segala penawaran dan estimasi taksiran yang diberikan kepada pengguna merupakan angka kisaran yang tidak mengikat. Apabila terjadi perbedaan perhitungan, maka perhitungan yang digunakan tetap mengacu pada perhitungan taksiran langsung oleh pihak kami. Informasi yang terdapat pada situs pinjam.co.id selalu diperbarui dan dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya. {'"'}Pinjam.co.id{'"'} adalah merek dagang terdaftar. Seluruh hak kekayaan intelektual telah dilindungi Undang-Undang.
          </SubTitle>
        </KaoCol>
        <KaoCol xs={24} md={7}>
          <FieldRight xs={24}>
            <SubTitle align="right" size={12} style={{ lineHeight: 2 }}>
              Terdaftar dan Diawasi Oleh
            </SubTitle>
          </FieldRight>
          <KaoSpace size="md" />
          <FieldRight xs={24}>
            <KaoBG image={OJK} width="169px" height="83px"  style={{ display: 'inline-block' }} />
          </FieldRight>
          <KaoSpace size="md" />
          <FieldRight xs={24}>
            <SubTitle align="right" size={12} style={{ lineHeight: 2 }}>
            OJK Nomor KEP-4 / D.05/2017
            </SubTitle>
          </FieldRight>
        </KaoCol>
      </KaoRow>
      <KaoSpace size="lg" />
      <KaoSpace size="lg" />
      <KaoRow>
        <KaoCol xs={24}>
          <SubTitle align="left" size={12}>
            {config.SEO.copyright}&nbsp;&nbsp;All Rights Reserved.&nbsp;&nbsp;{config.VERSION}
          </SubTitle>
        </KaoCol>
      </KaoRow>
    </KaoContainer>
  </FooterLayout>
);
