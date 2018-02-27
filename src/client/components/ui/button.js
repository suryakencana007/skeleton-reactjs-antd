import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

const btn = ({ children, ...rest }) => (
  <Button {...rest}>
  {children}
  </Button>);

export const KaoButton = styled(btn)`
  min-width: 100px;
	border-radius: 20px !important;
  padding: 0.25em 1em;
  margin: 0;
  height: 40px !important;
`;
