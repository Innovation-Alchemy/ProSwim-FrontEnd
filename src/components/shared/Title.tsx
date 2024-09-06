import { TitleUnderline } from '@/assets';

interface TitleProps {
  secondary: string;
  primary: string;
  reverseSecondary?: boolean;
}

const Title = ({
  secondary,
  primary,
  reverseSecondary = false,
}: TitleProps) => {
  return (
    <div className="flex items-center flex-col mb-10 ">
      <h2
        className={`font-bold text-[2.5rem] leading-none text-[#1E5C97] font-playfair-display capitalize text-center ${
          reverseSecondary ? 'mb-2' : 'mb-7'
        }`}
      >
        {!reverseSecondary && (
          <span className="text-[#7E7E7E]">
            {secondary.trim().toLowerCase() + ' '}
          </span>
        )}
        {primary.trim().toLowerCase()}
      </h2>
      {reverseSecondary && (
        <span className="font-bold text-[2.5rem] leading-none text-[#7E7E7E] font-playfair-display capitalize text-center mb-7">
          {secondary.charAt(0).toUpperCase() +
            secondary.slice(1).trim().toLowerCase()}
        </span>
      )}
      <TitleUnderline />
    </div>
  );
};

export default Title;
