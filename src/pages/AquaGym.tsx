// import { ethosSVG4 } from "@/assets";
// import ListSection from "@/components/shared/ListSection";
// import PageTitle from "@/components/shared/pageTitle";
import HeroTextBg from "@/components/shared/HeroTextBg";

export default function AquaGym() {

  return <div className="AquaGymPage pt-[84px] pb-20">
    <HeroTextBg title="AquaGym">
    </HeroTextBg>
    <div className="content flex flex-col gap-12 mt-10 pl-10 pr-10 ">
      <div>
        <h3 className="mb-6 text-[25px] underline font-bold font-[Playfair-Display]">Overview:</h3>
        <p>ProSwim provides a variety of AquaGym classes for all ages.</p>
      </div>
      <div className="flex "></div>


      <div>
        <h3 className="mb-6 text-[25px] underline font-bold font-[Playfair-Display]">Class Ettiquette:</h3>
        <div className="flex flex-col gap-4">
          <p>The rules of aqua-gym class etiquette apply to all classes under this title…</p>
          {/* real sections */}
          <div>
            <h3 className="mb-6 text-[18px] underline font-semibold">General Guidelines:</h3>
            <ul className="list-disc pl-6 flex flex-col gap-4">
              <li>Do not enter the pool if you have a communicable disease or open cut.</li>
              <li>Do not bring food, drink, gum or tobacco into the pool.</li>
              <li>Shower before entering the pool and after use of toilet facilities.</li>
              <li>Do not run or engage in rough play in the pool area.</li>
              <li>Do not bring animals into the pool area.</li>
              <li>Glass and shatter able items are prohibited in the pool area</li>
              <li>Do not block walkways with equipment, personal items or yourself.</li>
              <li>This is a shared space for multiple uses. Please be mindful of other people's needs.</li>
              <li>Please be polite & show good manners to everyone.</li>

            </ul>
          </div>
          {/* real sections */}
          <div>
            <h3 className="mb-6 text-[18px] underline font-semibold">Specifically for aqua-gym classes:</h3>
            <ul className="list-disc pl-6 flex flex-col gap-4">
              <li>Arrive to class on time.! Showing up late may interrupt the class and distract your classmates. In addition, you'll miss essential warm-ups if you don't show up on time.</li>
              <li>Come prepared & ready! You might need to get a bag for your wet swimsuit and flip flops, Water bottle, Dry clothes, toiletries, towel, snacks and everything u need.</li>
              <li>Turn your cell phone or mobile device off as soon as you arrive. A loud, distracting ringtone is disrespectful & disturbing to others.</li>
              <li>Store your bag and unneeded items before class. Unnecessary items on the pool deck is messy!</li>
              <li>Mind the personal space of others. Don't crowd in on your classmates.</li>
              <li>Keep your personal hygiene in check!</li>
              <li>Return any equipment that you used to the designated storage area.</li>
              <li>Communicate with your instructor...Let your instructor know if you have health problems or injuries. Tell your instructor if you are pregnant. This lets your instructor come up with modified exercises for you and prevents injury.</li>
              <li>Don't be afraid to provide instructors with compliments or constructive feedback at the end of the class.</li>
              <li>You should eat something before your workout because food is your fuel...Make sure you keep your meal light…</li>
              <li>No need to get weights or any other workout equipment with you to class…we have a lot of water accessories available for your convenience.</li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
}