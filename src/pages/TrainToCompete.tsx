// import { ActiveStartSVG1 } from "@/assets";
// import PageTitle from "@/components/shared/pageTitle";
import HeroTextBg from "@/components/shared/HeroTextBg";
import ListSection from "@/components/shared/ListSection";


export default function TrainToCompete() {

  const items1 = ["After finishing all levels, the swimmer will start combining between his regular training sessions at the academy and 1 to 2 supplementary training sessions with the team.",
    "The swimmer-at this level-will learn the discipline of the team, how to follow others in training, the swimming terminology, as well as getting exposed to the team’s advanced training drills and tests"
  ];
  const items2 = ["Sometime later, and after getting used to the idea of being present and practicing with the team, the swimmer will limit his regular training sessions at the academy to 1 and join the team for more.",
    "That way, we ensure that he/she are still stressing on the correct technique till he jpin the team completely."
  ];

  const items3 = ["At this level,the swimmer is more comfortable and familiar with what our team does",
    "The Child is then tested to know his level (Tables level)",
    "Successfully passing the test, makes him/her a member of the team which means participating in competitions under the name of ProSwim Competitive Team."
  ];


  return <div className="AquaBabyPage--levels pt-[84px] pb-20 text-[18px]">
    <HeroTextBg title="Train To Compete">
    </HeroTextBg>
    <div className="content flex flex-col gap-20 mt-10 pl-10 pr-10 ">

      <div>
        <h3 className="mb-6 text-[24px] underline font-bold font-[Playfair-Display]">Train to Compete:</h3>
        <p>This level is a transition phase and a preparation period to make the swimmer ready to join the ProSwim Competitive Team</p>

        <div className="flex flex-col gap-6">
          <ListSection title1="Swimmer 1" items1={items1}
            title2="Swimmer 2" items2={items2}
            title3="Swimmer 3" items3={items3}
            // title4="Advanced Star 4" items4={items4}
            // title5="Advanced Star 5" items5={items5}
            isHoriz={true} MaxWidth="100%" MinHeight="auto" className="mt-0"></ListSection>
        </div>

      </div>
    </div>
  </div >
}