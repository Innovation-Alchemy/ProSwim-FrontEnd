import { WhyUs_image1 } from "@/assets";
import { WhyUs_image2 } from "@/assets";
import { WhyUs_image3 } from "@/assets";
import ContentBox from "@/components/shared/ContentBox";
import PageTitle from "@/components/shared/pageTitle";
import HeroTextBg from "@/components/shared/HeroTextBg";

const WhyUs = () => {
  return (
    <div className="WhyUsPage pt-[84px]">
      {/* Start of hero section */}
      <HeroTextBg title="Why Us"></HeroTextBg>
      {/* End of hero section */}
      <PageTitle mainTitle_2="Why Us"></PageTitle>
      {/* ======= Start of Sec1 ======= */}
      <ContentBox
        heading1="Safety:"
        text1="It’s our first asset and most important goal. Our school is highly invested in the safety of your children at all levels."
        heading2="Small group sized classes:"
        text2="To assure your child’s chance to learn, grasp, and try doesn’t get lost in the crowd and to make sure the coach is in control of safety, monitoring and teaching. There is one coach for every 6 swimmers!"
        heading3="Program based on perpetual swim lessons:"
        text3="Starting from floating skills to breathing till they learn the full strokes. Our program assures the right placement of your child in a class based on many factors, age, ability, group dynamics and teacher/class availability. Thus, making sure that your child can continue to grow as a swimmer no matter his age.! From aqua baby to ProSwim Competitive Team.!"
        imgSrc={WhyUs_image1}
        imageOnRight={true}
      ></ContentBox>
      {/* ======= End of Sec1 ======= */}
      {/* ======= Start of Sec2 ======= */}
      <ContentBox
        heading1="Certified/skilled and qualified coaches:"
        text1="Our coaches are well trained, educated and always updated with the latest developments, skills, and techniques. They are very patient, respectful and friendly!"
        heading2="Multiple locations:"
        text2="Our multiple locations gives you the options to choose what suits you best. These locations are just a proof of our proven time record and success!"
        heading3="Fun environment:"
        text3="Our school is not boring! It has a fun and exciting environment! A lot of exclusive toys and water games are available.."
        imgSrc={WhyUs_image2}
        imageOnRight={false}
      ></ContentBox>
      {/* ======= End of Sec2 ======= */}
      {/* ======= Start of Sec3 ======= */}
      <ContentBox
        heading1="Recognition & encouragement:"
        text1="We empower your child to learn and grow both in and out of the pool! We motivate him/her to try and try again, overcome his/her fear and anxiety, and feel confident! Moreover, we organize graduation ceremonies at the end of every semester to grant each kid with a certificate and a medal for his/her hard work and discipline!!"
        heading2="Class organization:"
        text2="Kids learn best when they know what to expect, so each class has a consistent schedule that strikes a balance between skill time & play time. The class, also, follows a logical progression of swimming skills..(for example, children will master breath-holding before they’re asked to dunk their heads underwater)"
        heading3="Instruction style:"
        text3="The coach clearly demonstrates what the kid is asked to do, with a supportive and positive tone. Every kid will have his turn of trying and individual instruction time to correct his/her mistakes."
        imgSrc={WhyUs_image3}
        imageOnRight={true}
      ></ContentBox>
      {/* ======= End of Sec3 ======= */}

    </div>
  )
}

export default WhyUs;