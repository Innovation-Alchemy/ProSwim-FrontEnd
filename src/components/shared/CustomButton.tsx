import React from 'react';

interface CustomButtonProps {
  text: string;
  width: string;
  height: string;
  handler: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  width,
  height,
  handler,
}) => {
  const className = `bg-[#1E5C97] ${width} ${height}`;

  return (
    <button className={className} onClick={handler}>
      {text}
    </button>
  );
};

export default CustomButton;
