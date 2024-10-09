import { ActiveStartSVG1 } from "@/assets";
import { ActiveStartSVG2 } from "@/assets";
import { ActiveStartSVG3 } from "@/assets";
import { ActiveStartSVG4 } from "@/assets";
import { ActiveStartSVG5 } from "@/assets";
import { ActiveStartSVG6 } from "@/assets";
import { ActiveStartSVG7 } from "@/assets";
import HeroTextBg from "@/components/shared/HeroTextBg";
import ListSection from "@/components/shared/ListSection";


export default function ActiveStart() {

  const items1 = ["Sea horse bobbers, is for children 3-6 years old who are new to swimming.",
    "Children are encouraged to attend without a parent.",
    "In Sea horse bobbers, we'll continue to introduce fun activities in the water to activate the movements that will eventually lead to swimming.",
    "By the end, your child will be comfortable having their face in the water, and will have learned basic movements while being supported."
  ];
  const items2 = ["At this level, we stress more on the basics of the pool safety..",
    "work on underwater exploration",
    "Advance the front & back floating and gliding skills..",
    "At the end of this level, swimmers will be able to perform an underwater streamline for few meters, Superman position and retrieve objects from depth."];

  const items3 = ["In Gliders, children will combine kicking with gliding to learn how to propel themselves through the water",
    "Prone Position In Water,",
    "Floating,",
    "Gliding."
  ];
  const items4 = ["Otter will teach your child the basics of pool safety, going underwater, and gliding on their front and back.",
    "In addition to further development of the kicking, breathing & submerging skills.",
    "Going from Prone Position In Water, to start front crawl and back crawl skills",
    "Otter teaches your child how to stay safe in the water and to develop their swimming skills in front and back crawl"
  ];
  const items5 = ["In this level they will further develop the skills of gliding, kicking, and submerging.",
    "will be introduced to rhythmic breathing and arm/leg coordination skills",
    "Adding more drills for the front crawl and back crawl focusing on technique more than just swimming.",
    "Introducing & practicing the jumping drills"
  ];
  const items6 = ["Dolphin is more for children 6-12 years old who have completed Seal.",
    "will be introduced and be practicing the swim-float-swim sequence",
    "will combine all the skills they have learned so far to swim on their front and back unaided for a distance of 10 meters.",
    "Your child will also learn to jump into and float in deep water unassisted",
    "should be able to start kicking for streamline position)."
  ];
  const items7 = ["Children should be able to perform streamline drills Plus underwater swimming for a distance of 15 m",
    "Start superman position in addition to side breathing.",
    "Doing almost all drills related to front and back swimming with the assistance of a kickboard"
  ];


  return <div className="ActiveStartPage--levels pt-[84px] pb-20 text-[18px]">
    <HeroTextBg title="Active Start">
    </HeroTextBg>
    <div className="content flex flex-col gap-20 mt-10 pl-10 pr-10 ">

      <div>
        <h3 className="mb-6 text-[24px] underline font-bold font-[Playfair-Display]">Active Start:</h3>
        <div className="flex flex-col gap-6">
          <p>
            At this age, the child is encouraged to attend without a parent. Classes are separated and grouped according to the child’s skills and abilities. At this level, the child will be more comfortable having his face in water and we will start introducing the basic movements for swimming.
          </p>
          <p>
            Front & back floating, gliding, turning over, jumping in, combining kicking & gliding, Prone position in water.. underwater exploration with the eyes open.. will all be coached at this age. The child will also learn how to propel themselves through the water, as well as being able to perform the swim-float-swim sequence while coached. Furthermore, the child will be introduced to the rhythmic breathing and the leg/arm coordination which are the fundamentals for the freestyle stroke.</p>
          <p>
            Children learning the basic skills of swimming mentioned above often use kick boards and other equipment to help stay afloat.
          </p>

          <ListSection title1="Level 1 – Sea Horse Bobbers (ages 3-6 years)" items1={items1} imgSrc1={ActiveStartSVG1} title2="Level 2 – Pumpkin Floaters (ages 3-6 years)" items2={items2} imgSrc2={ActiveStartSVG2} title3="Level 3 – Spike Gliders (ages 3-6 years)" items3={items3} imgSrc3={ActiveStartSVG3} isHoriz={true} MaxWidth="100%" MinHeight="auto" className="mt-0"></ListSection>

        </div>
      </div>
      <div>
        <h3 className="mb-6 text-[24px] underline font-bold font-[Playfair-Display]">Fundamentals 6-12 years:</h3>

        <div className="flex flex-col gap-6">
          <ListSection title1="Beginner 1 – Otter" items1={items4} imgSrc1={ActiveStartSVG4} title2="Beginner 2 – Seal" items2={items5} imgSrc2={ActiveStartSVG5} title3="Beginne r3 – Dolphin" items3={items6} imgSrc3={ActiveStartSVG6}
            title4="Beginner 4 – Shark" items4={items7} imgSrc4={ActiveStartSVG7} isHoriz={true} MaxWidth="100%" MinHeight="auto" className="mt-0"></ListSection>
        </div>

      </div>
    </div>
  </div >
}