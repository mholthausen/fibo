import React from 'react';
import { Layout, Typography } from 'antd';
import './index.css';

const { Footer } = Layout;

const AppFooter: React.FC = () => {
  return (
    <Footer className="fibo-footer">
      <div className="footer-top">
        <Typography.Text>
          &copy; {new Date().getFullYear()} thisisholti. All rights reserved.
        </Typography.Text>
      </div>
      <div className="footer-bottom">
        <Typography.Link
          href="/terms-of-service"
          title="Terms of Service"
          className="footer-item"
        >
          Terms of Service
        </Typography.Link>
        <Typography.Link
          href="/privacy-policy"
          title="Privacy Policy"
          className="footer-item"
        >
          Privacy Policy
        </Typography.Link>
      </div>
    </Footer>
  );
};

export default AppFooter;
