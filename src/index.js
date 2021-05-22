import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.css"
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'


ReactDOM.render(
  <React.StrictMode>
    <App />
      <ToastContainer/>

  </React.StrictMode>,
  document.getElementById('root')
);
