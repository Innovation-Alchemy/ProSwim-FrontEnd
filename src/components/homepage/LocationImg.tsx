interface LocationImgProps {
  title: string;
  link: string;
  src: string;
  width?: string;
  height?: string;
}

const LocationImg: React.FC<LocationImgProps> = ({
  title,
  link,
  src,
  width = '100%',
  height = 'auto',
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block"
      style={{ width, height }}
    >
      <img src={src} alt={title} className="w-full h-full object-cover" />
      <h1 className="absolute top-0 left-0 text-white px-2 py-1 m-2 rounded font-bold text-[2.5rem] font-playfair-display leading-[3.3325rem] ml-[2.4375rem]">
        {title}
      </h1>
    </a>
  );
};

export default LocationImg;
