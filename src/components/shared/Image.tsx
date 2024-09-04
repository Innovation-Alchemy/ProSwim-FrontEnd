import React from 'react';

interface ImageProps {
  width: string;
  height: string;
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ width, height, src, alt }) => {
  return (
    <img src={src} alt={alt} className={`${width} ${height} object-cover`} />
  );
};

export default Image;
