import React, {Suspense} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import routes from './index';

const renderRoutes = (
    routes, authed, authPath = '/login', extraProps = {},
    switchProps = {}) => routes ? (
    <Switch {...switchProps}>
      <Suspense fallback={<div>123</div>}>
        {routes.map((route, i) => {

              return (
                  <Route
                      key={route.key || i}
                      path={route.path}
                      exact={route.exact}
                      render={(props) => {
                        return <route.component {...props} {...extraProps}
                                                route={route}/>;

                        // if (!route.requiresAuth || authed || route.path ===
                        //     authPath) {
                        //   return <route.component {...props} {...extraProps}
                        //                           route={route}/>;
                        // }
                        // return <Redirect
                        //     to={{
                        //       pathname: authPath,
                        //       state: {from: props.location},
                        //     }}/>;
                      }}
                  >
                  </Route>


              );

            },
        )}
      </Suspense>
    </Switch>
) : null;
export default renderRoutes;