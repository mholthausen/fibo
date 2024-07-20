import { Button, ButtonProps } from 'antd';
import React from 'react';
import './index.css';

const FiboButton: React.FC<ButtonProps> = ({ ...passThroughProps }) => {
  const { title } = passThroughProps;
  return (
    <Button
      type="primary"
      className='fibo-button'
      {...passThroughProps}
    >
      {title}
    </Button>
  );
};

export default FiboButton;
