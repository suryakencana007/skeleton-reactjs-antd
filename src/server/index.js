import fs from 'fs';
import path from 'path';
import React from 'react';
import express from 'express';
import cleanCSS from 'clean-css';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
// Import the StyledComponents SSR util
import { ServerStyleSheet } from 'styled-components';
import { Helmet } from 'react-helmet';
import routers from 'kao-client/routes';
import configureStore from 'kao-store';
import { request as api, rehydrate } from 'kao-util';

process.title = process.env.RAZZLE_APP;

// razzle asset files
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

// Environment variables
const isDevelopment = process.env.NODE_ENV === 'development';

// Create or Get token
const token = rehydrate();

const server = express();

server.use(cookieParser());
server.use(compression());
server.disable('x-powered-by');
server.use(express.static(process.env.RAZZLE_PUBLIC_DIR));

// set view engine
server.set('view engine', 'pug');
// set views directory
if (isDevelopment) {
  server.set('views', path.join(__dirname, 'templates'));
} else {
  server.set('views', path.join(__dirname, '../../', 'build/static/media'));
}

// Root html template
let indexTemplate = 'index.dev.pug';
if (!isDevelopment) {
  const templatePath = fs.readFileSync(path.join(__dirname, '../../', 'build/pug.path'), 'utf8');
  indexTemplate = templatePath.split('/')[3];
}

function minifyCss(styleTags) {
  console.log(styleTags);
  return new cleanCSS({
    level: {
      2: {
        removeDuplicateRules: true, // turns on removing duplicate rules
        mergeNonAdjacentByBody: true,
        restructure: true,
      }
    }
  }).minify(styleTags.trim());
}

function render(req, res) {
  const context = {};
  // Compile an initial state
  const preloadedState = {
    loading: false,
  };

  // Create a new Redux store instance
  const store = configureStore(preloadedState, { token, api: api(req) });
  // Create the server side style sheet
  const sheet = new ServerStyleSheet();
  const app = (
    <Provider store={store}>
      <StaticRouter
        context={context}
        location={req.url}
      >
      {renderRoutes(routers)}
      </StaticRouter>
    </Provider>);
  const markup = renderToString(sheet.collectStyles(app));
  // create meta html for SEO with react-helmet
  const helmet = Helmet.renderStatic();
  // const cssmin = minifyCss(sheet.getStyleTags());
  // console.log(cssmin);
  const state = `window.__PRELOADED_STATE__ = ${serialize(store.getState())}`;
  if (context.url) {
    res.redirect(context.url);
  } else {
    res.render(indexTemplate, {
      state,
      markup,
      assets,
      helmet,
      styles: sheet.getStyleTags(),
      host: process.env.HOST,
      port: process.env.PORT,
    });
  }
}

// add routes
server.get('/throw', (req, res, next) => {
  next(new Error('we messed up'));
});

server.get('*', (req, res) => {
  render(req, res);
});

if (isDevelopment) {
  server.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500);
    res.redirect('/500');
  });
}


export default server;
