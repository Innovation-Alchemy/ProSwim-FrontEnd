// import { ethosSVG4 } from "@/assets";
// import ListSection from "@/components/shared/ListSection";
// import PageTitle from "@/components/shared/pageTitle";
import HeroTextBg from "@/components/shared/HeroTextBg";
// AA ERROR
export default function LadiesOnly() {

  return <div className="LadiesOnlyPage pt-[84px] pb-20">
    <HeroTextBg title="Ladies Only">
    </HeroTextBg>
    <div className="content flex flex-col gap-8 mt-10 pl-10 pr-10">
      <div className="flex flex-col gap-4">
        <h3 className="mb-2 text-[22px] underline font-bold font-[Roboto]">Overview:</h3>
        <p className=" text-[18px]">We want all of our members at ProSwim to feel comfortable during their swimming sessions. That is why for our female members, who prefer to train in private, we offer a comprehensive ladies only classes..!! Contact our locations for schedules & timings.</p>
      </div>
      {/* --------- */}
      <div className="flex flex-col gap-4">
        <h3 className="mb-2 text-[22px] underline font-bold font-[Playfair-Display]">Class Ettiquette:</h3>
        <p className="text[18px]">No doubt that swimming at our academy is FUN & EXCITING, but there are few etiquette tips to follow when u dive more into our swimming lessons, that will help your child and others have a pleasant, calm and comfortable experience.</p>
        <h3 className="text[18px] underline font-bold">GENERAL ETIQUETTE:</h3>
        <ul className="list-disc flex flex-col gap-0 pl-4 text-[18px]">
          <li>Collect empty water bottles and trash from around the pool deck after the training is finished.</li>
          <li>Rinse yourself off before entering the pool at the pool side shower.</li>
          <li>Avoid eating heavy large meals 2 hours prior to the swimming practice.</li>
          <li>If your lesson is directly after school, small snacks like a sandwich or salads are recommended to be given in the car on the way to training.</li>
        </ul>
      </div>
      {/* ------ */}

    </div>

  </div>

}