import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter style={{height: "100%",}}>
      <App style={{height: "100%",}}/>
    </BrowserRouter>
);