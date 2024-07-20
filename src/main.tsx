import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'normalize.css';
import { ConfigProvider } from 'antd';
import customTheme from './theme';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ConfigProvider theme={customTheme}>
        <Router>
          <App />
        </Router>
      </ConfigProvider>
    </React.StrictMode>
  );
}
