// importing react object from react using   " // import React from 'react'; ""
import MyReact from 'react';
import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyReact.StrictMode>
    <App/>
  </MyReact.StrictMode>
);
