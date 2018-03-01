import React from 'react';
import styled, { css } from 'styled-components';
import { Layout } from 'antd';
import { media } from 'kao-components/ui';

const { Header, Content, Footer } = Layout;

const sizeChooser = (type) => {
  switch (type) {
    case 'sm':
      return 35;
    case 'md':
      return 48;
    case 'lg':
      return 64;
    case 'xl':
      return 72;
    default:
      return 64;
  }
};
const header = ({ children, ...rest }) => (
  <Header {...rest}>
  {children}
  </Header>);

export const KaoHeader = styled(header)`
  z-index: 999;
  box-shadow: 0 1px 0 0 rgba(171, 180, 198, 0.42);
  margin-bottom: 0.0625rem;
  ${props => props.size && css`
    height: ${sizeChooser(props.size)}px !important;
    line-height: ${sizeChooser(props.size)}px !important;
  `}
  ${props => props.fixed && css`
    position: fixed;
    width: 100%;
  `}
  ${media.phonexxs`
    padding: 0 5px !important;
  `};
  ${media.phonexs`
    padding: 0 !important;
  `};
  ${media.phonesm`
    padding: 0 !important;
  `};
`;

const content = ({ children, ...rest }) => (
  <Content {...rest}>
  {children}
  </Content>);

export const KaoContent = styled(content)``;

const footer = ({ children, ...rest }) => (
  <Footer {...rest}>
  {children}
  </Footer>);

export const KaoFooter = styled(footer)``;

const layout = ({ children, ...rest }) => (
  <Layout {...rest}>
  {children}
  </Layout>);

export const KaoLayout = styled(layout)``;
