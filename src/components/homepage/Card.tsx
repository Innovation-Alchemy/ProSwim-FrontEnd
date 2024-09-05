type CardProps = {
  title: string;
  text: string;
  img: string;
  isRotated: boolean;
};

const Card: React.FC<CardProps> = ({ title, text, img, isRotated = false }) => {
  const imgClass = `w-full h-[20.9375rem] object-cover ${
    isRotated ? '-scale-x-100' : ''
  }`;

  return (
    <div className="transition-transform duration-300 transform hover:scale-110 w-[22.125rem] h-[35.4375rem] my-[3.4375rem] shadow-[3px_10px_8px_0px_rgba(0,0,0,0.25)] rounded-[1.875rem]">
      <img className={imgClass} src={img} alt={title} />
      <div className="flex flex-col items-center p-4 flex-grow">
        <h3 className="font-bold capitalize text-center text-xl leading-6">
          {title.trim().toLowerCase()}
        </h3>
        <p className="font-roboto text-sm font-normal leading-4 mt-2 text-[#858585] p-4">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Card;
