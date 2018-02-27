import { Home, Counter, Gadai, GadaiTaksiran } from 'kao-containers';
import App from './app';

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/counter',
        component: Counter,
      },
      {
        path: '/gadai',
        component: Gadai,
      },
      {
        path: '/taksiran',
        component: GadaiTaksiran
      }
    ],
  },
];
