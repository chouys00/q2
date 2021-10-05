import './App.scss';
import {useEffect, Suspense} from 'react';


import routes from './routers/index';


import renderRoutes from './routers/renderRoutes';

import {Redirect} from 'react-router-dom';
import Layout from './components/layout';

const App = props => {
  const {route, history} = props;

  const authed = localStorage.getItem('token');
  // const authPath = '/login';
  // const authed = localStorage.getItem('token');

  useEffect(() => {
  }, []);

  return (
      <div className="App">
        <Layout>
          {renderRoutes(route.routes, authed)}
        </Layout>
      </div>
  );
};

export default App;
