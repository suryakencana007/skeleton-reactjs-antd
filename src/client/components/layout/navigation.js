import React from 'react';
import styled from 'styled-components';
import { KaoContainer } from 'kao-components/ui';


const navigation = ({ children, ...rest }) => (
  <KaoContainer {...rest}>
  {children}
  </KaoContainer>
);
export const KaoNavigation = styled(navigation)`
  position: relative;
`;
