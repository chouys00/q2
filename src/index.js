import React from 'react';
import ReactDOM from 'react-dom';
import './reset.scss';
import './index.css';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';

import routes from "./routers";

// ReactDOM.render(<App/> ,document.getElementById('root'))

// setupMSW().then(() =>
    ReactDOM.render(
        <React.StrictMode>
          <BrowserRouter>
            { renderRoutes(routes) }
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
