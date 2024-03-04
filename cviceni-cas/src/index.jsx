import { createRoot } from 'react-dom/client';
import './global.css';
import App from './App';
import React from 'react';
import Homepage from './App';

createRoot(document.querySelector('#app')).render(<App />);
