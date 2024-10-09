// import { ActiveStartSVG1 } from "@/assets";
// import PageTitle from "@/components/shared/pageTitle";
import HeroTextBg from "@/components/shared/HeroTextBg";
import ListSection from "@/components/shared/ListSection";


export default function TrainToTrain() {

  const items1 = ["Your child at this level is able to swim crawl and back for a long distance with ease in addition to completing all drills related to them",
    "The child will continue on practicing the breaststroke swimming techniques and drills to master it successfully",
    "We will still be building his/her endurance and confidence",
    "We will start introducing pace and speed to the child’s regime to push him/her further"
  ];
  const items2 = ["At this level, your child is half way through.. confident, skilled and strong with the crawl and back swimming techniques",
    "We will continue working on perfecting the breaststroke technique.",
    "We will introduce sculling as a way of controlling his/body and building endurance",
    "The child will be practicing flips and turns and underwater swimming and monitoring his speed."
  ];

  const items3 = ["At this level, the child is more and more comfortable with his crawl and back swimming",
    "The Child will be so familiar with the breaststroke swimming as well",
    "Flips and turns are part of his swimming",
    "Fine tuning to his technique is done and working on repetitive mistakes",
    "It’s time to introduce some dolphin kicks and the side stroke while working constantly on endurance"
  ];
  const items4 = ["At this level the Child will continue on learning the butterfly stroke and practicing its drills",
    "Nevertheless crawl, back and breaststroke drills and practices are as important",
    "You will notice an obvious improvement in the child’s speed and endurance",
    "At this level, flips and turns are mandatory and done successfully"
  ];
  const items5 = ["At this level, the child is swimming the four strokes perfectly and able to perform all drills and practices",
    "Speed and endurance are still on schedule",
    "Have to pass the Visa federation test"
  ];


  return <div className="TrainToTrainPage--levels pt-[84px] pb-20 text-[18px]">
    <HeroTextBg title="Train To Train">
    </HeroTextBg>
    <div className="content flex flex-col gap-20 mt-10 pl-10 pr-10 ">

      <div>
        <h3 className="mb-6 text-[24px] underline font-bold font-[Playfair-Display]">Train To Train:</h3>
        <p>This level is a transition phase and a preparation period to make the swimmer ready to join the ProSwim Competitive Team</p>

        <div className="flex flex-col gap-6">
          <ListSection title1="Advanced Star 1" items1={items1}
            title2="Advanced Star 2" items2={items2}
            title3="Advanced Star 3" items3={items3}
            title4="Advanced Star 4" items4={items4}
            title5="Advanced Star 5" items5={items5}
            isHoriz={true} MaxWidth="100%" MinHeight="auto" className="mt-0"></ListSection>
        </div>

      </div>
    </div>
  </div >
}