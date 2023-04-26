import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

  <Auth0Provider
    domain="dev-jvowp7i43sjvaixt.us.auth0.com"
    clientId="PQgRkf3jGPGBMMqwtTNv0InnEGF8Wh1F"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>

  </BrowserRouter>
)
