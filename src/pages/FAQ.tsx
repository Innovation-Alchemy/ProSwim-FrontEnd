// import { useEffect, useState } from "react";
import { FAQ_Icon } from "@/assets";
// import { Link } from "react-router-dom";
import HeroTextBg from "@/components/shared/HeroTextBg";
import PageTitle from "@/components/shared/PageTitle";
import ListSection from "@/components/shared/ListSection";

// import ".././CSS/Locations.css";

export default function FAQ() {
  return <div className="FAQPage pt-[84px] pb-20 text-[18px]">
    <HeroTextBg title="FAQ"></HeroTextBg>
    <PageTitle mainTitle_2="FAQ" width="280%"></PageTitle>
    <div className="FAQSection px-10 w-full">

      <ListSection

        title1="At what age should my child begin swim classes?"
        children1={<><p>Our aqua baby classes begin with babies as young as 3 months old.</p><br /><p>The sooner the better..!!</p><br /><p>The majority of swimmers who explored the aquatic environment at a younger age mastered the water and usually are more natural, confident and comfortable there!!</p></>}
        imgSrc1={FAQ_Icon}

        title2="How quickly will my child move to the next level?"
        children2={<><p>Each child develops and learns differently and at his own pace. Many factors play a role here.</p><br /><p>Learning to swim CORRECTLY doesn’t happen overnight. It takes a lot of PRACTICE and PATIENCE to achieve the best results.</p></>}
        imgSrc2={FAQ_Icon}

        title3="What should I do if my child cries throughout the lesson?"
        children3={<><p>You should NOT WORRY!!</p><br /><p>It’s totally normal & common for young inexperienced children to feel anxious, stressed and concerned in a new environment.</p><br /><p>Be patient and leave it to our skilled & friendly coaches to introduce your child and get him acclimated to the pool, the water, the lesson and to the coach himself.</p><br /><p>Lots of swimmers started crying in the pool and turned out to be amazing swimming champions.</p></>}
        imgSrc3={FAQ_Icon}

        title4="How are children placed in the specific levels?"
        children4={<><p>Our swimming learning program is based on both age and swimming ability.</p><br /><p>Your child will be tested and be placed in the level that is best for him accordingly.</p></>}
        imgSrc4={FAQ_Icon}

        title5="Are parent/child swimming classes beneficial?"
        children5={<><p>The least to say is beneficial..!!</p><br /><p>This one on one, quality time, bonding activity is a way to learn life’s best safety and survival skills.</p><br /><p>It’s so much fun, builds swim readiness skills and introduces good water safety habits.</p></>}
        imgSrc5={FAQ_Icon}

        title6="What should I look for when choosing swim lessons? What does a good program include?"
        children6={<><p>Look for classes and instructors that focus not only on strokes and technique but also on water survival competency skills.</p><br /><p>Look for programs that have experience qualified coaches, provide an age-ability appropriate atmosphere, provide safety and hygiene standards, based on perpetual swim lessons, fun environment with a lot of encouragement and recognition</p></>}
        imgSrc6={FAQ_Icon}

        title7="Shall my child stop swimming lessons once he learns the basics??"
        children7={<><p>Swimming is a life skill for safety and survival. everyone should increase their knowledge to learn how to stay safe and save others.</p><br /><p>The role of our school is to impart knowledge, tools, and skills to every swimmer to be safe and keep others safe around water.</p></>}
        imgSrc7={FAQ_Icon}

        title8="Why is swimming considered the best among all other sports and activities?"
        children8={<><p>All forms of sports and exercising is beneficial for a person’s health and well being.!</p><br /><p>It depends on what the child likes and prefers.. but swimming differs from other activities in that it is a life long activity and potentially a life saving skill which no other activity provides.</p></>}
        imgSrc8={FAQ_Icon}

        isHoriz={true}
        MaxWidth="100%"
        childClassName="flex-row-reverse justify-end w-full"
        imgClassName="w-[4rem] translate-y-[-50%]"

      >
      </ListSection>

    </div>
  </div>

}