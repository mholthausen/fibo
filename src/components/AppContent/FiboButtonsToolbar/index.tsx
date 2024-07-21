import React from 'react';
import FiboButton from './FiboButton';
import FiboPopover from './FiboPopover';
import { Popover } from 'antd';
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
    const predefinedSequence = [0, 1, 2, 3, 5, 8, 13, 21];
    const fibSequence = [...predefinedSequence];

    if (count > predefinedSequence.length) {
      for (let i = predefinedSequence.length; i < count; i++) {
        fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
      }
    }

    return fibSequence.slice(0, count);
  };

  const fibNumbers = generateFibonacciSequence();

  const popoverContent = (num: number, index: number) => {
    const timeOptions = [
      'minutes',
      'hour',
      'hours',
      'day',
      'week',
      'weeks',
      'month'
    ] as const;
    const time = timeOptions[index % timeOptions.length];

    let unknowns;
    if (index < 3) {
      unknowns = 0;
    } else if (index === 3) {
      unknowns = 30;
    } else if (index === 4) {
      unknowns = 50;
    } else if (index === 5) {
      unknowns = 70;
    } else if (index === 6) {
      unknowns = 90;
    }  else {
      unknowns = 100;
    }

    return (
      <FiboPopover
        num={num}
        time={time}
        unknowns={unknowns}
      />
    );
  };

  return (
    <div className="fibo-buttons-toolbar-container">
      <div className="gradient-bar">
        {fibNumbers.map((num, index) => (
          <Popover
            key={index}
            content={popoverContent(num, index)}
            trigger="hover"
          >
            <div className="popover-trigger-area"></div>
          </Popover>
        ))}
      </div>
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
    </div>
  );
};

export default FiboButtonsToolbar;
