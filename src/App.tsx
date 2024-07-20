import React, { useState, useEffect } from 'react';
import { Layout, Drawer } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import AppFooter from './components/AppFooter';
import AppContent from './components/AppContent';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';

const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [drawerContent, setDrawerContent] = useState<React.ReactNode>(null);
  const [drawerTitle, setDrawerTitle] = useState('');

  useEffect(() => {
    if (location.pathname === '/terms-of-service') {
      setDrawerContent(<TermsOfService />);
      setDrawerTitle('Terms of Service');
      setVisible(true);
    } else if (location.pathname === '/privacy-policy') {
      setDrawerContent(<PrivacyPolicy />);
      setDrawerTitle('Privacy Policy');
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  const handleDrawerClose = () => {
    setVisible(false);
    navigate('/');
  };

  return (
    <Layout className="fibo-layout">
      <AppContent />
      <AppFooter />
      <Drawer
        title={<div id="drawer-title">{drawerTitle}</div>}
        placement="right"
        closable={true}
        onClose={handleDrawerClose}
        open={visible}
        width={720}
        aria-labelledby="drawer-title"
      >
        {drawerContent}
      </Drawer>
    </Layout>
  );
};

export default App;
