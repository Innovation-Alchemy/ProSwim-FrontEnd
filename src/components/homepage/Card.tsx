type CardProps = {
  title: string;
  text: string;
  img: string;
  isRotated: boolean;
};

const Card: React.FC<CardProps> = ({ title, text, img, isRotated = false }) => {
  const imgClass = `w-full max-h-[10%] object-cover ${isRotated ? "-scale-x-100" : ""
    }`;

  return (
    <div
      className={`Card--comp bg-white transition-transform duration-300 hover:scale-[102.5%] flex flex-col items-center shadow-2xl rounded-3xl overflow-hidden`}
    >
      <img className={`Card__img ${imgClass}`} src={img} alt={title} />
      <div className="flex flex-col items-start p-8 py-4 flex-grow min-h-[80%] h-[80%] ">
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
