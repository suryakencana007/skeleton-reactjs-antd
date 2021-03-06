import React from 'react';
import PropTypes from 'prop-types';
import withRouter from 'react-router-dom/withRouter';
import styled from 'styled-components';
import { renderRoutes } from 'react-router-config';
import { SEO } from 'kao-components/common';
import MainLayout from './layout';
import 'kao-styles/App.css';


const Wrapper = styled.div`
  background-color: rgb(245, 245, 245);
  padding-bottom: 0px;
`;

const Content = styled.div`
  background: rgb(245, 245, 245);
  padding: 0;
  overflow-x: hidden;
`;

const defaultProps = {
  route: {},
};

const propTypes = {
  route: PropTypes.object,
};

const App = withRouter(({ route, history }) => (
  <Wrapper>
    <SEO
      schema="HomePage"
      title="Gadai Syariah"
      path="/"
      contentType="Website"
    />
    <Content id="main" data-qa-id="qa_main">
      <MainLayout history={history}>
      {renderRoutes(route.routes)}
      </MainLayout>
    </Content>
  </Wrapper>
));

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
