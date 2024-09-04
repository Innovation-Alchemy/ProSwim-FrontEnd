import { TitleUnderline } from '@/assets';

interface TitleProps {
  secondary: string;
  primary: string;
}

const TitleComponent = ({ secondary, primary }: TitleProps) => {
  return (
    <div>
      <h2 className="font-bold text-[2.5rem] leading-[2.3325] text-[#1E5C97] font-playfair-display capitalize">
        <span className="text-[#7E7E7E]">{secondary.trim().toLowerCase()}</span>{' '}
        {primary.trim().toLowerCase()}
      </h2>
      <TitleUnderline />
    </div>
  );
};

export default TitleComponent;
