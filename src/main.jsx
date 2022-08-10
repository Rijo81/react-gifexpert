import React from 'react';
import ReactDOM from 'react-dom/client';
import { AddCategory } from './components/AddCategory';
import { GitExpertApp } from './GitExpertApp';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GitExpertApp />
  </React.StrictMode>
);
