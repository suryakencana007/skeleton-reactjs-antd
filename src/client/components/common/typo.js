import React from 'react';
import styled from 'styled-components';
import {
  KaoFlex,
  KaoCol,
} from 'kao-components/ui';

const title = ({ children, ...rest }) => (
  <KaoFlex justify="center">
    <KaoCol {...rest}>
    {children}
    </KaoCol>
  </KaoFlex>
);


export const TitleContainer = styled(title)`
  font-size: ${props => props.size / 16}rem;
  font-weight: ${props => props.bold && 'bold' || 'normal'};
  text-align: ${ props => props.align && props.align || 'center'};
`;

export const SubTitle = styled.p`
  font-size: ${props => props.size / 16}rem;
  font-weight: ${props => props.bold && 'bold' || 'normal'};
  text-align: ${ props => props.align && props.align || 'center'};
  margin: 0;
  padding: 0;
`;
