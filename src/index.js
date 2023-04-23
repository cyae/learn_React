import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // css imported, stylesheets in this file will be applied to all component, not just index
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
