import './App.scss';
import {useEffect, Suspense} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import routes from './router/index';
import renderRoutes from './router/renderRoutes.js';

function App() {
  useEffect(() =>
      fetch('/api/authentication'), []);

  const authed = false;
  const authPath = '/login';

  return (

      <div className="App">

        <Switch>
          {renderRoutes(routes, authed, authPath)}
        </Switch>

      </div>


  );
}

export default App;
