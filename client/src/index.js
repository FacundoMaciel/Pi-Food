import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from "./store/store.js"
import { BrowserRouter } from "react-router-dom"
import axios from "axios"

axios.defaults.baseURL = process.env.REACT_APP_API

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')

);


