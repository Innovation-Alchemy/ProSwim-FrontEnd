import { TitleUnderline } from "@/assets";

interface TitleProps {
  secondary: string;
  primary: string;
}

const Title = ({ secondary, primary }: TitleProps) => {
  return (
    <div className="flex items-center flex-col mb-10 ">
      <h2 className="font-bold text-[2.5rem] leading-none text-[#1E5C97] font-playfair-display capitalize text-center mb-7">
        <span className="text-[#7E7E7E]">{secondary.trim().toLowerCase()}</span>{" "}
        {primary.trim().toLowerCase()}
      </h2>
      <TitleUnderline />
    </div>
  );
};

export default Title;
