import React from 'react';

interface LocationImgProps {
  title: string;
  link: string;
  src: string;
  width?: string;
  height?: string;
  supervisor: string;
  phone: number | string;
  info?: string;
  website?: string;
}

const LocationImg: React.FC<LocationImgProps> = ({
  title,
  link,
  src,
  supervisor,
  phone,
  info,
  website,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative rounded-2xl overflow-hidden group"
    >
      <img src={src} alt={title} className="w-full h-full object-cover" />

      <h1 className="absolute top-0 left-0 text-white px-2 py-1 rounded font-bold text-[2.5rem] font-playfair-display leading-[3.3325rem] ml-[2.4375rem]">
        {title}
      </h1>

      {/* Overlay and Info Boxes */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-4">
        <div className="ml-10 flex flex-col gap-7 justify-center items-start h-full">
          {/* Supervisor Info Box */}
          <div className="bg-white text-black p-4 rounded shadow-lg transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
            <p>
              Supervisor: <span className="font-bold">{supervisor}</span>
            </p>
          </div>
          {/* Phone Info Box */}
          <div className="bg-white text-black p-4 rounded shadow-lg transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
            <p>
              Phone: <span className="font-bold">{phone}</span>
            </p>
          </div>
          {/* Conditional Info Box */}
          {info && (
            <div className="bg-white text-black p-4 rounded shadow-lg max-w-[80%] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
              <p>
                Info: <span className="font-bold">{info}</span>
              </p>
            </div>
          )}
          {/* Conditional Website Info Box */}
          {website && (
            <div className="bg-white text-black p-4 rounded shadow-lg transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
              <p>
                Website:{' '}
                <a
                  href={`https://${website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold"
                >
                  {website}
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </a>
  );
};

export default LocationImg;
