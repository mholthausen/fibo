import React from 'react';
import { Layout, Typography } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './index.css';

const { Footer } = Layout;

const AppFooter: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    path: string
  ) => {
    event.preventDefault();
    navigate(path);
  };

  return (
    <Footer className="fibo-footer">
      <div className="footer-top">
        <Typography.Text>
          &copy; {new Date().getFullYear()} thisisholti. All rights reserved.
        </Typography.Text>
      </div>
      <div className="footer-bottom">
        <a
          href="/terms-of-service"
          className="footer-item"
          onClick={event => handleNavigation(event, '/terms-of-service')}
        >
          Terms of Service
        </a>
        <a
          href="/privacy-policy"
          className="footer-item"
          onClick={event => handleNavigation(event, '/privacy-policy')}
        >
          Privacy Policy
        </a>
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
