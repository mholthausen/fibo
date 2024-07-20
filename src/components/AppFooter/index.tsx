import React from 'react';
import { Layout, Typography } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
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
        <a
          href="https://github.com/mholthausen/fibo"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-item"
          aria-label="GitHub Repository"
        >
          <GithubOutlined style={{ fontSize: '24px' }} />
        </a>
      </div>
    </Footer>
  );
};

export default AppFooter;
