import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { store } from "@redux/store"; 

// const root = ReactDOM.createRoot(document.getElementById('res'));
const renders = () => (<Provider store={store}>
  <App />
</Provider>);
 ReactDOM.render(renders(), document.getElementById('communication'));