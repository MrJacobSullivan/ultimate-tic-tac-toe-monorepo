import * as React from 'react';

const Cross: React.FC<{ large: boolean; className: string }> = ({
  large = false,
  className
}) => {
  const size = `${large ? 16 : 4}rem`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      version="1.1"
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
