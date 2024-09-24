import { ethosSVG1 } from "@/assets";
import { ethosSVG2 } from "@/assets";
import { ethosSVG3 } from "@/assets";
import { ethosSVG4 } from "@/assets";
import ListSection from "@/components/shared/ListSection";
import PageTitle from "@/components/shared/pageTitle";
import HeroTextBg from "@/components/shared/HeroTextBg";


const Ethos = () => {
  return (
    <div className="EthosPage pt-[84px] pb-20">
      <HeroTextBg title="Ethos"></HeroTextBg>
      <PageTitle mainTitle_2="Ethos"></PageTitle>
      <div className="content pl-10 pr-10">

        <p className=" text-center text-[20px] color-black">Our academy has a distinct ethos and governing spirit defined in the following terms:</p>

        <ListSection imgSrc1={ethosSVG1} title1="Equal Access" text1="Equality Based where all children have equal right of access to the academy; all children of all social, cultural, and religious backgrounds are equally respected"
          imgSrc2={ethosSVG2} title2="Unlocking Potential" text2="Co-educational and committed to encouraging all children to explore their full abilities, potentials, and opportunities."
          imgSrc3={ethosSVG3} title3="Child-Focused Learning" text3="Child centered in our approach to teaching and training." imgSrc4={ethosSVG4} title4="Shared Leadership" text4="Democratically run with active participation of parents in the daily life of the swimmer while positively affirming the professional role of the coaches and the academy."
        // imgSrc5={ethosSVG4} title5="Shared Leadership" text5="Democratically run with active participation of parents in the daily life of the swimmer while positively affirming the professional role of the coaches and the academy."
        // imgSrc6={ethosSVG4} title6="Shared Leadership" text6="Democratically run with active participation of parents in the daily life of the swimmer while positively affirming the professional role of the coaches and the academy."
        ></ListSection>
      </div>
    </div>
  )
}

export default Ethos;