import React from 'react';

interface ImageProps {
  width: string;
  height: string;
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ width, height, src, alt }) => {
  return (
    <div className="relative inline-block">
      <img
        src={src}
        alt={alt}
        className={`${width} ${height} object-cover transition-transform duration-300 ease-in-out hover:scale-105`}
      />
      <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 text-white transition-opacity duration-300 ease-in-out hover:opacity-100">
        <span className="text-lg font-bold absolute inset-5 flex items-end justify-center">
          {alt}
        </span>
      </div>
    </div>
  );
};

export default Image;
