import React from 'react';
import PropTypes from 'prop-types';
import withRouter from 'react-router-dom/withRouter';
import styled from 'styled-components';
import { renderRoutes } from 'react-router-config';
import 'kao-styles/App.css';


const Wrapper = styled.div`
  padding-top: 4.4rem;
  z-index: 10;
  background-color: rgb(245, 245, 245);
  padding-bottom: 0px;
`;

const Content = styled.div`
  background: rgb(245, 245, 245);
  padding: 0rem 0px 1.6rem;
  overflow-x: hidden;
`;

const defaultProps = {
  route: {},
};
const propTypes = {
  route: PropTypes.object,
};

const App = withRouter(({ route }) => (
  <Wrapper>
    <Content id="main" data-qa-id="qa_main">
      {renderRoutes(route.routes)}
    </Content>
  </Wrapper>
));

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
