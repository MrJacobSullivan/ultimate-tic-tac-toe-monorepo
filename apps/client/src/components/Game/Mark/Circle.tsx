import * as React from 'react';

const Circle: React.FC<{
  large: boolean;
  small: boolean;
  className: string;
}> = ({ large = false, small = false, className }) => {
  const size = small ? '2rem' : `${large ? 16 : 4}rem`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      version="1.1"
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
