// import { ethosSVG4 } from "@/assets";
// import ListSection from "@/components/shared/ListSection";
// import PageTitle from "@/components/shared/pageTitle";
import HeroTextBg from "@/components/shared/HeroTextBg";

export default function GroupClasses() {

  return <div className="GroupClassesPage pt-[84px] pb-20 ">
    <HeroTextBg title="Group Classes">
    </HeroTextBg>
    <div className="content flex flex-col gap-8 mt-10 pl-10 pr-10">
      {/* ------ */}
      <div>
        <h3 className="mb-6 text-[22px] underline font-bold font-[Roboto]">Overview:</h3>
        <p className="mb-6 text-[18px]">Swimmers can be motivated by watching their peers and trying to emulate the skills they are working on. Seeing swimming skills and drills in action is great for visual learners. Group lessons provide an environment where healthy competition between swimmers can encourage them to work harder to be better and improve their swimming technique, endurance, speed, compete with others, have fun, and jump from one level to the next.</p>

        <p className="mb-6 text-[18px]">
          Group lessons allow swimmers to learn important skills and social etiquette that can be carried into day to day life such as focus, following instructions, patience and acceptance.
        </p>

        <p className="text-[18px]">Swimmers can form life-long bonds and friendships with other students in their lessons and feel what it is like to be part of a team working towards a common goal.</p>
      </div>
      {/* ------ */}
      <div>
        <h3 className="mb-6 text-[22px] underline font-bold font-[Playfair-Display]">Group classes are divided into three levels:</h3>
        <ul className="CardListAll CardListAll--Group list-none flex items-stretch justify-start flex-wrap gap-6 pl-4 text-[18px]">
          <div>
            <li className="text-[18px] font-semibold"><h3>
              Beginners level:
            </h3>
            </li>
            <p>This class is for a comfortable beginner typically age 4 or 5 years. We teach water safety rules, floats, glides, jumps, in addition of changing direction and position. Graduation will be made after each semester. After finishing the beginners’ level the kids will be prepared to join the intermediate level.</p>
          </div>
          <div>
            <li className="text-[18px] font-semibold">
              <h3>
                Intermediate level:
              </h3>
            </li>
            <p>This class is for those who finished the beginners level and will Begin front crawl, backstroke, jumping in shallow and deep water, rolling over, kneeling dives, back crawl, rhythmic breathing with front crawl, dives, underwater swimming and introduce breaststroke</p>
          </div>
          <div>
            <li className="text-[18px] font-semibold">
              <h3>
                Advanced level:
              </h3>
            </li>
            <p>This class is for those who finished the intermediate level and will Begin breaststroke, butterfly, the scissor kick, treading water, racing dives, will Introduce dolphin kick, fins and beginning butterfly, Advanced backstroke kicks, and build endurance</p>
          </div>
        </ul>
      </div>
      {/* ================ */}
      <div>
        <h3 className="mb-6 text-[22px] underline font-bold font-[Playfair-Display]">Class Ettiquette:</h3>
        <ul className="list-decimal flex flex-col gap-5 pl-4 text-[18px]">
          <li className="font-semibold">Arrive 5 mins earlier to the class scheduled time..
            <ul className="list-disc flex flex-col gap-0 pl-6 text-[18px] font-normal">
              <li>You will ensure that your child is relaxed, ready, have time to get prepared for class and most importantly watch other kids happily enjoying their swimming lesson.</li>
              <li>Running late not only disrupts your own child’s learning but also interrupts the momentum of the class already in progress.</li>
            </ul>
          </li>
          <li className="font-semibold">Every swimmer should be wearing the ProSwim cap and swimsuit. <span className="font-normal"> It’s very important to stick to our uniform for many reasons:</span>
            <ul className="list-disc flex flex-col gap-0 pl-6 text-[18px] font-normal">
              <li>It generates team unity and enhances the kid’s confidence when all his peers are wearing the same as him.</li>
              <li>The uniform induces a feeling of belonging to the team.. It gives him the identity of being part of this group..</li>
              <li>It also advances the feeling of equality..</li>
              <li>And because we respect our swimmers.. lead by example and abide by the rules, our coaches are wearing the ProSwim coaches’ uniform as well..</li>
            </ul>
          </li>
          <li className="font-semibold">Every child should have goggles, a towel, a slipper and all his toiletry essentials.Please come prepared!!<span className="font-normal"> Please come prepared!!</span></li>
          <li className="font-semibold">All siblings, friends, cousins and other swimmers who are waiting their turn or class to start are not allowed to run and play at the pool deck<span className="font-normal">, for their SAFETY and for the right of other swimmers already in class not to be disturbed and distracted.</span></li>
          <li className="font-semibold">You are urged to wait your child’s lesson to start before allowing him/her to enter the pool.
            <ul className="list-disc flex flex-col gap-0 pl-6 text-[18px] font-normal">
              <li>Wait for the coach/instructor to signal or call for the next scheduled lesson.</li>
              <li>A swimmer entering the pool before his scheduled class is not only a distraction for other kids in class but also at risk of not being supervised by our coaches.</li>
            </ul>
          </li>
          <li className="font-semibold">In case your child is ill, please keep him/her home till he/she recovers.
            <ul className="list-disc flex flex-col gap-0 pl-6 text-[18px] font-normal">
              <li>Your child will not perform at his best if he’s not feeling well.</li>
              <li>Make sure you notify the academy of your intended absence.</li>
            </ul>
          </li>
          <li className="font-semibold">PRAISE!!
            <ul className="list-disc flex flex-col gap-0 pl-6 text-[18px] font-normal">
              <li>After each lesson, show your child your support, appreciation and pride of their efforts, discipline and commitment.</li>
              <li>Never underestimate the power of encouragement and positive reinforcement.</li>
            </ul>
          </li>
        </ul>
      </div>
      {/* ================ */}

    </div>

  </div>

}