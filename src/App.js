import './App.scss';
import {useEffect, Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import routes from './router/index';
import renderRoutes from './router/renderRoutes.js';

import Layout from './components/layout'

import Login from './pages/login';
import Register from './pages/register';
import Page404 from './pages/page404';
import Home from './pages/home';
import News from './pages/news';

function App() {
  useEffect(() =>
      fetch('/api/authentication'), []);

  const authed = false;
  const authPath = '/login';

  return (
      <Router>
        <div className="App">

          <Switch>
            <Route path="/404" component={Page404}/>
            <Route exact path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Layout>
              <Route path="/home" component={Home}/>
              <Route path="/news" component={News}/>
              {/*<Redirect to="/404" />*/}
            </Layout>
          </Switch>

        </div>
      </Router>
  );
}

export default App;
