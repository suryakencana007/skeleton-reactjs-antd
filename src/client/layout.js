import React from 'react';
import { Link } from 'react-router-dom';
import { Affix, Icon } from 'antd';
import styled from 'styled-components';
import {
  KaoLayout,
  KaoHeader,
  KaoNavigation,
  KaoMenu,
  KaoContent
} from 'kao-components/layout';
import {
  KaoContainer,
  KaoFlex,
  KaoRow,
  KaoCol
} from 'kao-components/ui';
import { Footer } from 'kao-containers';
import { KaoLogo } from 'kao-components/common';
import LogoOjk from 'kao-assets/pinjam-ojk.svg';


const SubIcon = styled(Icon)`
  margin-right: 8px;
`;
const Subheader = styled.span`
  float: right;
  margin: 0 12px;
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
            <Link to="/"><KaoLogo size={42} image={LogoOjk} style={{ padding: '33px 0px' }} /></Link>
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
    <Footer />
  </KaoLayout>
);

export default MainLayout;
