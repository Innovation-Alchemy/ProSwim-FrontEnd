// import { ActiveStartSVG1 } from "@/assets";
// import PageTitle from "@/components/shared/pageTitle";
import HeroTextBg from "@/components/shared/HeroTextBg";
import ListSection from "@/components/shared/ListSection";


export default function LearnToSwim_levels() {

  const items1 = ["This level is for children aged 6-12 years who have completed the beginner level of fundamentals",
    "At this level, your child will learn the breaststroke kicks",
    "We will start building and working on endurance",
    "The child will be coached to perform crawl and back swimming without any assistance."
  ];
  const items2 = ["At this level, the child will be able to perform the crawl and back swimming strokes successfully for 25 meters",
    "The child will be introduced to the arm strokes and breathing of breaststroke swimming",
    "We will still be working on endurance"
  ];

  const items3 = ["At this level, the child will be able to swim crawl and back for a longer distance",
    "The child will be introduced to the crawl and back flips and turns",
    "We will teach the child how to combine between the breaststroke kicks and arms",
    "Building Endurance is still scheduled at this level."
  ];

  return <div className="LearnToTrainPage--levels pt-[84px] pb-20 text-[18px]">
    <HeroTextBg title="Learn To Train">
    </HeroTextBg>
    <div className="content flex flex-col gap-20 mt-10 pl-10 pr-10 ">

      <div>
        <h3 className="mb-6 text-[24px] underline font-bold font-[Playfair-Display]">Learn To Train:</h3>

        <div className="flex flex-col gap-6">
          <ListSection title1="Intermediate 1- Whale One" items1={items1} title2="Intermediate 2 - Whale Two" items2={items2} title3="Intermediate 3 - Whale Three" items3={items3} isHoriz={true} MaxWidth="100%" MinHeight="auto" className="mt-0"></ListSection>
        </div>

      </div>
    </div>
  </div >
}