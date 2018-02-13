import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

const flex = ({ children, ...rest }) => (
  <Row type="flex" {...rest}>
    {children}
  </Row>
);

export const KaoFlex = styled(flex)`
  && {}
`;

const row = ({ children, ...rest }) => (
  <Row gutter={20} {...rest}>
    {children}
  </Row>
);

export const KaoRow = styled(row)`
  && {}
`;

const col = ({ children, ...rest }) => (
  <Col {...rest}>
    {children}
  </Col>
);

export const KaoCol = styled(col)`
  && {}
`;
