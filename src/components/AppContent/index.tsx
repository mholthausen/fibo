import React, { useState } from 'react';
import { Layout } from 'antd';
import FiboButtonsToolbar from './FiboButtonsToolbar';
import FiboNumberDisplay from './FiboNumberDisplay';

const { Content } = Layout;

const AppContent: React.FC = () => {
  const [selectedNumber, setSelectedNumber] = useState<number | undefined>();

  const handleButtonClick = (number: number) => {
    setSelectedNumber(number);
  };

  return (
    <Content role='main'>
      <FiboNumberDisplay number={selectedNumber}/>
      <FiboButtonsToolbar count={8} onButtonClick={handleButtonClick}/>
    </Content>
  );
};

export default AppContent;
