import React, {Suspense} from 'react';
import {Route, Redirect, Switch } from 'react-router-dom';

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
//                         route.render({...props, ...extraProps, route: route})
//                     ) : (
//                         <route.component {...props} {...extraProps}
//                                          route={route}/>
//                     )
//                 }
//             />
//         ))}
//       </Switch>
//   ) : null;
// }

const renderRoutes = (routes, authed = false, authPath = '/login', extraProps = {}, switchProps = {}) => routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
          <Route
              key={route.key || i}
              path={route.path}
              exact={route.exact}
              strict={route.strict}
              render={(props) => {
                // console.log(1111111111111,!route.requiresAuth);
                // console.log(22222222222,authed);
                // console.log(3333333333333,route.path,authPath);

                if (!route.requiresAuth || authed || route.path === authPath) {
                  return <route.component {...props} {...extraProps} route={route} />
                }
                return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
              }}
          />
      ))}
    </Switch>
) : null


export default renderRoutes;