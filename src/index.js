import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-e9h7-bol.us.auth0.com"
    clientId="moNVZY5ZPMMiAHFmrl7za5fMTsGs8S9U"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
  ,
  document.getElementById('root')
);
