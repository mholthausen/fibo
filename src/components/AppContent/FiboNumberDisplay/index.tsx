import React, { useEffect, useRef } from 'react';
import { adjustFontSize } from '../../../utils';

import './index.css';

interface FiboNumberDisplayProps {
  number: number | undefined;
}

const FiboNumberDisplay: React.FC<FiboNumberDisplayProps> = ({ number }) => {
  const displayRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleResize = () => {
      if (displayRef.current) {
        adjustFontSize(displayRef.current);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [number]);

  useEffect(() => {
    if (displayRef.current) {
      adjustFontSize(displayRef.current);
    }
  }, [number]);

  return (
    <div className="fibo-display">
      <span
        id="fibo-display-number"
        ref={displayRef}
      >
        {number !== undefined ? number : ''}
      </span>
    </div>
  );
};

export default FiboNumberDisplay;
