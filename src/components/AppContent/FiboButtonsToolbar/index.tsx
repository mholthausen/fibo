import React from 'react';
import FiboButton from './FiboButton';
import './index.css';

interface FiboButtonsToolbarProps {
  count: number;
  onButtonClick: (number: number) => void;
}

const FiboButtonsToolbar: React.FC<FiboButtonsToolbarProps> = ({
  count,
  onButtonClick
}) => {
  const generateFibonacciSequence = (): number[] => {
    const fibSequence = [1, 2]; // Start with 1 and 2
    for (let i = 2; i < count; i++) {
      fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
    }
    return fibSequence;
  };

  const fibNumbers = generateFibonacciSequence();

  return (
    <div className="fibo-buttons-toolbar">
      {fibNumbers.map((num, index) => (
        <FiboButton
          key={index}
          type="primary"
          title={num.toString()}
          onClick={() => onButtonClick(num)}
        >
          {num}
        </FiboButton>
      ))}
    </div>
  );
};

export default FiboButtonsToolbar;
