import React from 'react';
import ReactDOM from 'react-dom';
import './reset.scss';
import './index.css';
import App from './App';
// import {setupMSW} from './mocks/browser';

ReactDOM.render(<App/> ,document.getElementById('root'))

// setupMSW().then(() => ReactDOM.render(<App/> ,document.getElementById('root')));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
