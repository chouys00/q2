import './App.scss';
import {useEffect, Suspense} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import routes from './router/index';
import renderRoutes from './router/renderRoutes.js';

import Layout from './components/layout';

import Login from '@/pages/login';
import Register from '@/pages/register';
import Page404 from '@/pages/page404';
import Home from '@/pages/home';
import News from '@/pages/news';
import ProfileSetting from '@/pages/profileSetting';

function App() {

  const authed = localStorage.getItem('token');
  // const authPath = '/login';

  return (
      <Router>
        <div className="App">


          <Switch>

              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>
              <Layout>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/news" component={News}/>
                <Route exact path="/account/profile-setting"
                       component={ProfileSetting}/>
              </Layout>
              <Route component={Page404}/>

          </Switch>

        </div>
      </Router>
  );
}

export default App;
