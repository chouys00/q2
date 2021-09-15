import './App.scss';
import {useEffect, Suspense} from 'react';

// import {Redirect} from 'react-router';

import routes from './routers/index';
import {renderRoutes} from 'react-router-config';
import {Redirect} from 'react-router-dom';
import Layout from './components/layout';

const App = props => {
  const {route, history} = props;
  const authPath = '/login';
  const authed = localStorage.getItem('token');

  useEffect(() => {
  }, []);

  return authed ? (
      <div className="App">
        <Layout>
          {renderRoutes(route.routes)}
        </Layout>
      </div>
  ) : <Redirect to="/login"/>;
};

export default App;
