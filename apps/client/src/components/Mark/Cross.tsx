import * as React from 'react';

const Cross: React.FC<{
  svgClassName?: string;
  className?: string;
}> = ({ svgClassName, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClassName}
      data-testid="cross"
    >
      <line
        x1="15%"
        y1="15%"
        x2="85%"
        y2="85%"
        strokeWidth="15%"
        className={className}
      />
      <line
        x1="15%"
        y1="85%"
        x2="85%"
        y2="15%"
        strokeWidth="15%"
        className={className}
      />
    </svg>
  );
};

export default Cross;
