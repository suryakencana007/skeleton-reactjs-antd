import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';

const card = ({ children, ...rest }) => (
  <Card {...rest}>
  {children}
  </Card>);

export const KaoCard = styled(card)`
  border-radius: 0px !important;
  // box-shadow:  0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.12) !important;
`;
