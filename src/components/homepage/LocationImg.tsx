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
      className="relative rounded-2xl overflow-hidden group min-h-[28rem]"
    >
      <img src={src} alt={title} className="w-full h-full object-cover" />

      <h1 className="absolute top-0 left-0 text-white px-2 py-1 rounded font-bold text-[2.5rem] font-playfair-display leading-[3.3325rem] ml-[2.4375rem] z-[5]">
        {title}
      </h1>

      {/* Overlay and Info Boxes */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-4">
        <div className="pt-[50px] ml-10 flex flex-col gap-7 justify-center items-start h-full">
          {/* Supervisor Info Box */}
          <div className="bg-white text-black p-4 rounded shadow-lg transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out min-w-[90%] max-w-[90%]">
            <p>
              Supervisor: <span className="font-bold">{supervisor}</span>
            </p>
          </div>
          {/* Phone Info Box */}
          <div className="bg-white text-black p-4 rounded shadow-lg transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out min-w-fit max-w-[90%]">
            <p>
              Phone: <span className="font-bold min-w-fit max-w-[90%]">{phone}</span>
            </p>
          </div>
          {/* Conditional Info Box */}
          {info && (
            <div className="bg-white text-black p-4 rounded shadow-lg transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out min-w-[90%] max-w-[90%]">
              <p>
                Info: <span className="font-bold min-w-[90%] max-w-[90%]">{info}</span>
              </p>
            </div>
          )}
          {/* Conditional Website Info Box */}
          {website && (
            <div className="bg-white text-black p-4 rounded shadow-lg transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out min-w-fit max-w-[90%]">
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
