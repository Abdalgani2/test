import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RegisterProvider from './context/signUp';
import LoginProvider from './context/signIn';
import AddItemProvider from './context/addItem';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <LoginProvider>
        <RegisterProvider>
          <AddItemProvider>
            <App />
          </AddItemProvider>
          </RegisterProvider>
      </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>
);


