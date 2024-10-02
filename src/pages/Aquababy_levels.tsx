// import { LearnToSwimGif1 } from "@/assets";
// import PageTitle from "@/components/shared/pageTitle";
import HeroTextBg from "@/components/shared/HeroTextBg";
import ListSection from "@/components/shared/ListSection";

export default function AquaBaby_levels() {

  return <div className="AquaBabyPage--levels pt-[84px] pb-20 text-[18px]">
    <HeroTextBg title="Aqua Baby">
    </HeroTextBg>
    <div className="content flex flex-col gap-20 mt-10 pl-10 pr-10 ">

      <div>
        <h3 className="mb-6 text-[24px] underline font-bold font-[Playfair-Display]">A- Splashes (3 to 18 months) Aqua-baby</h3>
        <div className="flex flex-col gap-6">
          <p>Splashes is a great way to introduce babies 3-18 months old to the water. Parents get in on the fun by participating with their children. At this age, it’s very important to make the baby comfortable in the water with his/her guardian/parent and to get him/her prepared to develop the swim readiness skills by having FUN and CONFIDENCE BUILDING.</p>
          <p>
            The baby is just old enough for gentle water games while being held by an adult. It’s just time to help them explore the new aquatic environment peacefully. We show babies how to splash in the water till they get comfortable with it. We bob them up and down to get them used to the feeling of water surrounding them. To ensure it’s a pleasant experience, singing and moving around is part of the class..</p>
          <p>Parents as well learn about water safety, drowning prevention, and the importance of supervision.</p>

          <ListSection title1="3 Months" text1="Baby is capable of happily having water gently poured over the head." title2="6 Months" text2="Baby is capable of performing a brief underwater pass." title3="12 Months" text3="Baby is capable of a brief underwater swim." title4="18 Months" text4="Toddler is capable of maneuvering himself through the water for 3-5 seconds using the legs for propulsion." isHoriz={true} MaxWidth="100%" MinHeight="auto" className="mt-0"></ListSection>

          <p>The best part is that during the lesson, it’s just YOU and your little one focused on each other.. It’s a wonderful way to spend quality time alone together.</p>
        </div>
      </div>

      <div>
        <h3 className="mb-6 text-[24px] underline font-bold font-[Playfair-Display]">18 months – 3 years Aqua-tot</h3>
        <div className="flex flex-col gap-6">
          <p>Bubblers, is for children 18 months - 3 years old. We work with you to introduce your child to new movements in the water, including holding the wall, kicking feet, and blowing bubbles. aAt the age of 18 months, the child may behave in the water as if he/she was born into it.. learning to swim happily & fearlessly.</p>
          <p>He/she instinctively relaxes and embraces being in water. At this age, the child will learn quickly and move on to new skills. At age two, the child can start taking instructions.</p>
          <p>He/she can play fun games such as throwing a ball across the pool, blowing bubbles in the water, getting his/her face wet without swallowing the water, kicking his/her legs, and floating on the stomach or back (with support) and by that he/she will be exploring body positions.</p>
          <p>At age two and a half to three, we can take the instruction level one step forward and start introducing the skills it takes to swim.</p>

          <ListSection title1="18 Months" text1="Toddler is capable of maneuvering himself through the water for 3-5 seconds using the legs for propulsion." title2="24 Months (2 Years)" text2="Toddler is capable of getting back to the side of the pool from a sitting entry." title3="30 Months (2 1/2 years)" text3="Toddler is capable of swimming with face in the water." title4="36 Months (3 years)" text4="Toddler is capable of getting back to the side of the pool from a standing entry." isHoriz={true} MaxWidth="100%" MinHeight="auto" className="mt-0"></ListSection>
        </div>
      </div>

      <div>
        <p className="mb-5">It’s very important, at this level, to highlight the vast benefits swimming has on the toddler as it:</p>
        <ul className="list-disc flex flex-col gap-4 pl-6">
          <li>Builds muscles: Swim time helps promote important muscle development & control in kids at a young age.</li>
          <li>Those little ones will need to develop the muscles needed to hold their heads up, move their arms & legs and work their corein coordination with the rest of their body.</li>
          <li>Not only does swimming improve their muscle strength & ability on the outside but it provides internal benefits as well bygetting those joints moving, in addition, to the great impact on the cardiovascular health.</li>
          <li>Improves cognitive functioning (reading skills/language development/academic learning/spatial awareness)</li>
          <li>Improves confidence & self-control.</li>
          <li>Encourages interaction and functioning in a group.</li>
          <li>Increases quality time between the parent/kid (ONE ON ONE BONDING)</li>
          <li>The kid will become more comfortable in social situations</li>
          <li>Improves coordination & balance</li>
          <li>Improves sleeping patterns & appetite</li>
        </ul>
      </div>
    </div>
  </div >
}