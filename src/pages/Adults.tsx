// import { ethosSVG4 } from "@/assets";
// import ListSection from "@/components/shared/ListSection";
// import PageTitle from "@/components/shared/pageTitle";
import HeroTextBg from "@/components/shared/HeroTextBg";
export default function Adults() {

  return <div className="AdultsPage pt-[84px] pb-20">
    <HeroTextBg title="Adults">
    </HeroTextBg>
    <div className="content flex flex-col gap-8 mt-10 pl-10 pr-10">
      <div className="flex flex-col gap-4">
        <h3 className="mb-2 text-[22px] underline font-bold font-[Playfair-Display]">Overview:</h3>
        <p className="text-[18px]">Our Adult “Learn to Swim” program is for any adult who may have not swum before or have a lack of confidence in and around water or wants to extend their swimming abilities on a basic swimming stroke.</p>
        <p>Our swim coaches will work with you independently and at your pace to ensure that you are confident with basic water safety and skills, encouraging and supporting you as you progress to learning basic swimming such as breathing, kicking, floating, rolling and front crawl swimming. Once these skills are mastered, we will continue to work with you to build a strong front crawl stroke including drills – giving you the confidence to move to a skills development program.</p>
        <p>With constant support this program will leave you empowered with knowledge and valuable tips and confidence in the water. Swimming lessons for adults are available in the following three levels, developed to meet the needs of adult learners:</p>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="mb-2 text-[22px] underline font-bold font-[Playfair-Display]">Benefits:</h3>
        <ul className="list-disc flex flex-col gap-5 pl-4 text-[18px]">
          <li className="font-semibold">Learning the Basics:
            <br />
            <span className="font-normal">Learn basic swimming strokes and skills needed to stay safe, and help keep others safe in and around the water. This class introduces swimmers to the pool and helps them develop safe water habits. Skills are taught that focus on body position and control, forward movement and rotary breathing.</span>
          </li>
          <li className="font-semibold">
            Improving Skills and Swimming Strokes:
            <span className="font-normal">Participants will gain proficiency in basic aquatic skills and the six basic swimming strokes. In this class, students will work on the front crawl, back crawl and breast stroke form and technique. Must be able to swim 25 meters with basic rotary breathing.</span>
          </li>
          <li className="font-semibold">
            Swimming for Fitness: <span className="font-normal">Participants will learn to refine their front crawl, back crawl, breaststroke and turns to build endurance. This class is a private lesson scheduled individually with an instructor. We will meet you at your current ability and help bringing you to the next level to meet your goal. Whether that is to get over a fear or refresh your skills.</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="mb-2 text-[22px] underline font-bold font-[Playfair-Display]">Class Ettiquette:</h3>
        <p className="text-[18px]">No doubt that swimming at our academy is FUN & EXCITING, but there are few etiquette tips to follow when u dive more into our swimming lessons, that will help your child and others have a pleasant, calm and comfortable experience.</p>

        <h3 className=" text-[18px] underline font-bold">GENERAL ETIQUETTE:</h3>
        <ul className="list-disc flex flex-col gap-0 pl-4 text-[18px]">
          <li>Collect empty water bottles and trash from around the pool deck after the training is finished.</li>
          <li>Rinse yourself off before entering the pool at the pool side shower.</li>
          <li>Avoid eating heavy large meals 2 hours prior to the swimming practice.</li>
          <li>If your lesson is directly after school, small snacks like a sandwich or salads are recommended to be given in the car on the way to training.</li>
        </ul>
      </div>


    </div>
  </div>

}