import React from 'react';
import { Home, Counter } from 'kao-containers';
import App from './app';

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: props => (<Home {...props} />),
      },
      {
        path: '/counter',
        component: props => (<Counter {...props} />),
      },
    ],
  },
];
