import React  from 'react';
import styled from 'styled-components';
import { media } from 'kao-components/ui';

const logo = ({ children, ...rest }) => (
  <div {...rest}>
  {children}
  </div>);

export const KaoLogo = styled(logo)`
  display: block;
  font-style: normal;
  vertical-align: baseline;
  text-align: center;
  height: ${props => props.size && props.size}px;
  background-size: 80%;
  ${media.phonexxs`
    background-size: 100% !important;
  `};
  ${media.phonexs`
    background-size: 100% !important;
  `};
  ${media.phonesm`
    background-size: 100% !important;
  `};
  ${media.retina4K`
    background-size: inherit !important;
  `}
  background-image: url(${props => props.image && props.image});
  background-color: transparent;
  background-position: left center;
  background-repeat: no-repeat;
`;


export const KaoIcon = styled.i`
  display: inline-block;
  font-style: normal;
  vertical-align: baseline;
  text-align: center;
  width: ${props => props.size && props.size}px;
  height: ${props => props.size && props.size}px;
  background-image: url(${props => props.image && props.image});
  background-color: transparent;
  background-position: ${props => props.center && 'center center' || 'left bottom'};
  background-repeat: no-repeat;
`;

export const  KaoBG = styled.div`
  display: block;
  font-style: normal;
  vertical-align: baseline;
  text-align: center;
  width: ${props => props.width && props.width};
  height: ${props => props.height && props.height};
  background-image: url(${props => props.image && props.image});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const KaoBadge = styled.div.attrs({
  padding: props => (props.size - props.box) / 2,
})`
  background-color: ${props => props.paint && props.paint || '#fff'};
  border-radius: 15px;
  color: ${props => props.color && props.color || '#000'};
  display: inline-block;
  height: ${props => (props.size / 16) || 2}rem;
  margin: ${10 / 16}rem;
  padding: ${props => (props.padding / 16) || 0.5}rem;
  width: ${props => (props.size / 16) || 2}rem;
`;

