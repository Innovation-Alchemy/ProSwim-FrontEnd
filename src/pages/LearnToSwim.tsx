import { LearnToSwimGif1 } from "@/assets";
import { LearnToSwimGif2 } from "@/assets";
// import ListSection from "@/components/shared/ListSection";
// import PageTitle from "@/components/shared/pageTitle";
import HeroTextBg from "@/components/shared/HeroTextBg";

export default function LearnToSwim() {

  return <div className="LearnToSwimPage pt-[84px] pb-20">
    <HeroTextBg title="Learn To Swim">
    </HeroTextBg>

    <div className="content flex flex-col gap-12 mt-10 pl-10 pr-10 ">
      <div>
        <h3 className="mb-6 text-[22px] underline font-bold font-[Roboto]">Overview:</h3>
        <div className="flex flex-col gap-4">
          <p>One on one sessions can be great for swimmers who need more individualized attention or have trouble staying on task in group situations. These lessons are designed to give participants individualized attention to improve or master their swimming skills. Customized swim lessons are a great option for swimmers looking to catch up or get ahead. These lessons give you individualized attention to help improve or master swimming skills.</p>
          <p>
            To arrange lessons, contact the supervisor of the location, be sure to let him know your current ability & your goals for the lessons, the preferred days and times, and how often you would like to do the lessons, so they can schedule an instructor who meets your needs. Together, the instructor, participant and/or parent determine the goals for the session and the curriculum is customized in order to meet these goals. Private lessons are 45 minutes in length.
          </p>
        </div>
      </div>
      <div>
        <h3 className="mb-6 text-[22px] underline font-bold font-[Roboto]">Benefits:</h3>
        {/* start of cardContainer */}
        <div className="cardsContainer flex justify-start items-center gap-6">
          <div className="card flex flex-col justify-around items-center gap-[10px] bg-[#eee] rounded-3xl w-[16rem] text-center">
            <img className="w-full pt-4 pb-4 pl-12 pr-12 rounded-tr-3xl rounded-tl-3xl object-contain bg-gradient-to-r from-blue-600 to-indigo-500" src={LearnToSwimGif1} alt="Person Swimming" />
            <p className="text-[18px] font-[Playfair-Display] font-[600] pb-8 pt-4 pl-2 pr-2">Swimming skill improvement</p>
          </div>
          <div className="card flex flex-col justify-around items-center gap-[10px] bg-[#eee] rounded-3xl w-[16rem] text-center">
            <img className="w-full pt-4 pb-4 pl-12 pr-12 rounded-tr-3xl rounded-tl-3xl object-contain bg-gradient-to-r from-blue-600 to-indigo-500" src={LearnToSwimGif2} alt="Person Swimming" />
            <p className="text-[18px] font-[Playfair-Display] font-[600] pb-8 pt-4 pl-2 pr-2">Skill mastery</p>
          </div>
        </div>
      </div>
      {/* end of cardContainer */}
      <div>
        <h3 className="mb-6 text-[22px] underline font-bold font-[Roboto]">What to bring?</h3>
        <ul className="list-decimal flex flex-col gap-2 pl-4 text-[16px]">
          <li>Come to class dressed and ready for the pool.</li>
          <li>Clothes, diaper bags (in case needed) and other personal items can be stored in the locker rooms, leave your valuables at home.</li>
          <li>Sandals or flip-flops are permitted in the pool area; No street shoes permitted.</li>
          <li>Towel, goggles.</li>
          <li>Inform the instructor of physical impairments, fear of or bad experiences with the water to ensure a more positive lesson.</li>
        </ul>
      </div>
      <button className="self-start bg-[#1e5c97] text-white font-[Playfair-Display] px-10 py-2 rounded-xl">Schedule a Call</button>
      {/* AA GO BACK TO functionality ???  */}
    </div>
  </div>
}