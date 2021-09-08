import { lazy } from 'react';


const routes = [
  {
    path: '/login',
    component: lazy(() => import('../pages/login')),
    requiresAuth: false,
    exact: true,
  },
  {
    path: '/register',
    component: lazy(() => import('../pages/register')),
    requiresAuth: false,
  },
  {
    path: '*',
    component: lazy(() => import('../pages/page404')),
    requiresAuth: false,
  },
  {
    path: '/home',
    component: lazy(() => import('../pages/home')),
    requiresAuth: true,
  },
  {
    path: '/news',
    component: lazy(() => import('../pages/news')),
    requiresAuth: true,
  },
];

export default routes;