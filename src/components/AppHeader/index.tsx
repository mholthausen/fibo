import React from 'react';
import { Layout } from 'antd';
import './index.css';

const AppHeader: React.FC = () => {
  const { Header } = Layout;

  return (
    <Header className="visually-hidden">
      <h1>Fibonacci Estimator</h1>
    </Header>
  );
};

export default AppHeader;
