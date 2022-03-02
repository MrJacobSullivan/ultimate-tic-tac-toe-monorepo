import * as React from 'react';

const Circle: React.FC<{
  svgClassName?: string;
  className?: string;
}> = ({ svgClassName, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={svgClassName}
    >
      <circle
        cx="50%"
        cy="50%"
        r="35%"
        strokeWidth="15%"
        fill="transparent"
        className={className}
      />
    </svg>
  );
};

export default Circle;
