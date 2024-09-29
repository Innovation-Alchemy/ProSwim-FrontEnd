type CardProps = {
  title: string;
  text: string;
  img: string;
  isRotated: boolean;
};

const Card: React.FC<CardProps> = ({ title, text, img, isRotated = false }) => {
  const imgClass = `w-full h-[32vh] object-cover ${isRotated ? "-scale-x-100" : ""
    }`;

  return (
    <div
      className={`bg-white transition-transform duration-300 
        transform hover:scale-110   
         shadow-2xl rounded-3xl overflow-hidden`}
    >
      <img className={imgClass} src={img} alt={title} />
      <div className="flex flex-col items-start px-8 py-6 flex-grow">
        <h3 className="mb-4 font-bold capitalize text-center w-full text-[24px] leading-6 font-[Playfair-Display]">
          {title.trim().toLowerCase()}
        </h3>
        <p className="font-roboto text-sm text-center leading-[18px] font-normal leading-relaxed text-[#858585]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Card;
