import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga4';

ReactGA.initialize('G-5FYBBBZ3GG');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter style={{ height: '100%' }}>
        <App style={{ height: '100%' }} />
    </BrowserRouter>,
);

const SendAnalytics = () => {
    ReactGA.send({
        hitType: 'pageview',
        page: window.location.pathname,
    });
};
