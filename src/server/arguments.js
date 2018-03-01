if (process.argv[2] === '--node') {
  for (let j = 0; j < process.argv.length; j++) {
    console.log(j + ' -> ' + (process.argv[j]));
  }
}

const args = require('minimist')(process.argv.slice(2));

import React from 'react';
import cleanCSS from 'clean-css';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { renderToString } from 'react-dom/server';
// import serialize from 'serialize-javascript';
// Import the StyledComponents SSR util
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import routers from 'kao-client/routes';
import configureStore from 'kao-store';
import { request as api } from 'kao-util';

function minifyCss(styleTags) {
  return new cleanCSS({
    compatibility: '*',
  }).minify(styleTags);
}

function render(args) {
  const { url } = args;
  const context = {};
  // Compile an initial state
  const preloadedState = {
    loading: false,
  };

  // Create a new Redux store instance
  const store = configureStore(preloadedState);
  // Create the server side style sheet
  const sheet = new ServerStyleSheet();
  console.log(url);
  const app = (
    <Provider store={store}>
      <StaticRouter
        context={context}
        location={url}
      ><StyleSheetManager
        sheet={sheet.instance}>
        {renderRoutes(routers)}
       </StyleSheetManager>
      </StaticRouter>
    </Provider>);
  const markup = renderToString(app);
  // const cssmin = minifyCss(sheet.getStyleTags());
  // const state = `window.__PRELOADED_STATE__ = ${serialize(store.getState())}`;
  return markup;
}

console.log(render(args));
