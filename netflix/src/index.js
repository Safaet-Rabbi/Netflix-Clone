import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from "react-redux";
import store from './redux/store';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Ensure you import this

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="473139808443-p392p62jlqoktd8ks61ckkr2lpl83t09.apps.googleusercontent.com"> {/* Ensure this is your correct client ID */}
      <Provider store={store}>
        <App />
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
