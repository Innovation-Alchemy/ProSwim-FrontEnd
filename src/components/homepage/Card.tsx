type CardProps = {
  title: string;
  text: string;
  img: string;
  isRotated: boolean;
};

const Card: React.FC<CardProps> = ({ title, text, img, isRotated = false }) => {
  const imgClass = `w-full h-[20.9375rem] object-cover ${
    isRotated ? "-scale-x-100" : ""
  }`;

  return (
    <div
      className={`bg-white transition-transform duration-300 
        transform hover:scale-110   
         shadow-2xl rounded-3xl overflow-hidden`}
    >
      <img className={imgClass} src={img} alt={title} />
      <div className="flex flex-col items-start p-8 flex-grow">
        <h3 className="font-bold capitalize text-left text-xl leading-6">
          {title.trim().toLowerCase()}
        </h3>
        <p className="font-roboto text-sm font-normal leading-relaxed mt-2 text-[#858585]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Card;
