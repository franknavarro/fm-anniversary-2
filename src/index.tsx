import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LoveTheme } from './components/LoveTheme';

ReactDOM.render(
  <React.StrictMode>
    <LoveTheme>
      <App />
    </LoveTheme>
  </React.StrictMode>,
  document.getElementById('root'),
);
