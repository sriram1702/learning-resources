import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/auth/Login';
import LogoutButton from './components/auth/LogoutButton';
import { Auth0Provider } from '@auth0/auth0-react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/react-bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <Auth0Provider
    domain="dev-427dbsyevw4dknu6.us.auth0.com"
    clientId="Cmgjesq2c9oUO41Hb931B5mJkhVqVwpS"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Login/>
     
        <App />
      </Auth0Provider>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
