// import { ethosSVG4 } from "@/assets";
// import ListSection from "@/components/shared/ListSection";
// import PageTitle from "@/components/shared/pageTitle";
import HeroTextBg from "@/components/shared/HeroTextBg";

export default function PrivateClasses() {

  return <div className="PrivateClassesPage pt-[84px] pb-20 text-[18px]">
    <HeroTextBg title="Private Classes">
    </HeroTextBg>
    <div className="content flex flex-col gap-8 mt-10 pl-10 pr-10">
      {/* ------ */}
      <div>
        <h3 className="mb-6 text-[22px] underline font-bold font-[Roboto]">Overview:</h3>
        <p className="mb-6">One on one sessions can be great for swimmers who need more individualized attention or have trouble staying on task in group situations. These lessons are designed to give participants individualized attention to improve or master their swimming skills. Customized swim lessons are a great option for swimmers looking to catch up or get ahead. These lessons give you individualized attention to help improve or master swimming skills.</p>

        <p>
          To arrange lessons, contact the supervisor of the location, be sure to let him know your current ability & your goals for the lessons, the preferred days and times, and how often you would like to do the lessons, so they can schedule an instructor who meets your needs. Together, the instructor, participant and/or parent determine the goals for the session and the curriculum is customized in order to meet these goals. Private lessons are 45 minutes in length.
        </p>
      </div>
      {/* ------ */}
      <div>
        <h3 className="mb-6 text-[22px] underline font-bold font-[Playfair-Display]">Benefits:</h3>
        <ul className="CardListAll list-disc flex items-stretch justify-start flex-wrap gap-6 pl-4">
          <div>
            <li>Swimming skill improvement</li>
          </div>
          <div>
            <li>Skill mastery</li>
          </div>
        </ul>
      </div>
      {/* ------ */}
      <div>
        <h3 className="mb-6 text-[22px] underline font-bold font-[Playfair-Display]">What to bring:</h3>
        <ul className="CardListAll list-disc flex items-stretch justify-start flex-wrap gap-6 pl-4">
          <div>
            <li>Come to class dressed and ready for the pool.</li>
          </div>
          <div>
            <li>Clothes, diaper bags (in case needed) and other personal items can be stored in the locker rooms, leave your valuables at home.</li>
          </div>
          <div>
            <li>Sandals or flip-flops are permitted in the pool area; No street shoes permitted.</li>
          </div>
          <div>
            <li>Inform the instructor of physical impairments, fear of or bad experiences with the water to ensure a more positive lesson.</li>
          </div>
          <div>
            <li>Towel, goggles.</li>
          </div>
        </ul>
      </div>
      {/* ------ */}
      <div>
        <h3 className="mb-6 text-[22px] underline font-bold font-[Playfair-Display]">Class Ettiquette:</h3>
        <ul className="list-disc flex flex-col gap-0 pl-4">
          <li>Come prepared: Every swimmer is urged to come ON TIME to the scheduled training session with all his equipment with him and wearing the ProSwim cap and Swimsuit.</li>
          <li>Lane entry: Always take an empty lane before entering an occupied lane. For those who are already swimming in the lane, swim in a circular pattern.</li>
          <li>Foot tap: If the swimmer behind you taps your foot, he’s not flirting.. they want to pass.. Make way!</li>
          <li>A quick rest break: Stay away from the middle of the wall when you want to rest for a short time. You can rest at the end of the lane giving other swimmers the space to continue their set.</li>
          <li>Crowded lap pool: Avoid wide strokes in crowded lap pool.</li>


        </ul>
      </div>
      {/* ------ */}

    </div>

  </div>

}