import { Home, Gadai, GadaiTaksiran } from 'kao-containers';
import App from './app';

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Gadai,
      },
      {
        path: '/counter',
        component: Home,
      },
      {
        path: '/gadai',
        component: GadaiTaksiran,
      }
    ],
  },
];
