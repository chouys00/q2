import React from 'react';
import {Redirect} from 'react-router';

import Layout from '@Components/layout';


import Login from '@/pages/login';
import Register from '@/pages/register';
import Page404 from '@/pages/page404';
import Home from '@/pages/home';
import News from '@/pages/news';
import ProfileSetting from '@/pages/profileSetting';
import App from '@/App';

const routes = [
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/register',
    exact: true,
    component: Register,
  },
  {
    path: '/404',
    exact: true,
    component: Page404,
  },
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/home',
        exact: true,
        component: Home,
      },
      {
        path: '/News',
        exact: true,
        component: News,
      },
      {
        path: '/account',
        exact: true,
        component: ProfileSetting,
      },
      {
        path: '/',
        component: () => <Redirect to="/404"/>,
      },
    ],
  },
];

// const routes = [
//
//   {
//     path: '/home',
//     component: (props) => {
//       return (
//           <Suspense fallback={<p>123123</p>}>
//             <Layout {...props}>
//               <Home {...props} />
//             </Layout>
//           </Suspense>
//       );
//     },
//     requiresAuth: false,
//     exact: true,
//     children: [
//       {
//         path: '/news',
//         requiresAuth: true,
//         component: (props) => {
//           return (
//               <Suspense fallback={<p>123123</p>}>
//                 <Layout {...props}>
//                   <News {...props} />
//                 </Layout>
//               </Suspense>
//           );
//         },
//       },
//       {
//         path: '/home',
//         requiresAuth: true,
//         component: (props) => {
//           return (
//               <Suspense fallback={<p>123123</p>}>
//                 <Layout {...props}>
//                   <ProfileSetting {...props} />
//                 </Layout>
//               </Suspense>
//           );
//         },
//       },
//     ],
//   },
//   {
//     path: '/account/profile-setting',
//     requiresAuth: false,
//     exact: true,
//     component: (props) => {
//       return (
//           <>
//             <Suspense fallback={<div>123</div>}>
//               <Login/>
//             </Suspense>
//           </>
//       );
//     },
//   },
//   {
//     path: '/login',
//     requiresAuth: false,
//     exact: true,
//     component: (props) => {
//       return (
//           <>
//             <Suspense fallback={<div>123</div>}>
//               <Login/>
//             </Suspense>
//           </>
//       );
//     },
//   },
//   {
//     path: '/register',
//     requiresAuth: false,
//     exact: true,
//     component: (props) => {
//       return (
//           <>
//             <Suspense fallback={<div>123</div>}>
//               <Register/>
//             </Suspense>
//           </>
//       );
//     },
//   },
//
//   {
//     path: '*',
//     requiresAuth: false,
//     component: (props) => {
//       return (
//           <>
//             <Suspense fallback={<div>123</div>}>
//               <Page404/>
//             </Suspense>
//           </>
//       );
//     },
//   },
// ];

export default routes;