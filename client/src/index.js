import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './components';


const root = createRoot(document.getElementById('root'));
root.render(<App/>);

reportWebVitals();
