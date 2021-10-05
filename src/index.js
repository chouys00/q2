import React from 'react';
import ReactDOM from 'react-dom';
import './reset.scss';
import './index.css';
// import { renderRoutes } from 'react-router-config';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import renderRoutes from './routers/renderRoutes.js'
import routes from "./routers";

// ReactDOM.render(<App/> ,document.getElementById('root'))


const authed = localStorage.getItem('token');
// const authPath = '/login';

// setupMSW().then(() =>
    ReactDOM.render(
        <React.StrictMode>
          <BrowserRouter>
            { renderRoutes(routes,authed) }
          </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    )
// );

// setupMSW().then(() => ReactDOM.render(<App/> ,document.getElementById('root')));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// function renderRoutes(routes, extraProps = {}, switchProps = {}) {
//   return routes ? (
//       <Switch {...switchProps}>
//         {routes.map((route, i) => (
//             <Route
//                 key={route.key || i}
//                 path={route.path}
//                 exact={route.exact}
//                 strict={route.strict}
//                 render={props =>
//                     route.render ? (
//                         route.render({ ...props, ...extraProps, route: route })
//                     ) : (
//                         <route.component {...props} {...extraProps} route={route} />
//                     )
//                 }
//             />
//         ))}
//       </Switch>
//   ) : null;
// }