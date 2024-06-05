import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Router} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Auth0Provider
          domain="dev-mbohhj2rlxjimymj.us.auth0.com"
          clientId="gkJ2VGdqOF68d2ed13ZbTLOgNd8ReHCi"
          authorizationParams={{
              redirect_uri: window.location.origin
          }}
      >

    <App />
    </Auth0Provider>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
