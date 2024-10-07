import { ProSwimmers1, ProSwimmers2, ProSwimmers3, ProSwimmers4 } from "@/assets";
import HeroTextBg from "@/components/shared/HeroTextBg";
import PageTitle from "@/components/shared/PageTitle";
import ProSwimmerCard from "@/components/Albums/ProSwimmerCard";


export default function ProSwimmmers() {



  return <div className="ProSwimmmersPage--levels pt-[84px] pb-20 text-[18px]">
    <HeroTextBg title="ProSwimmmers">
    </HeroTextBg>
    <PageTitle mainTitle_1="Our" mainTitle_2="Pro-Swimmers" subTitle="ProSwim is proud of every swimmer" width="85%"></PageTitle>
    <div className="content flex flex-col gap-20 mt-10 pl-10 pr-10 
    
    ">
      <div className="flex items-center justify-evenly gap-[2vw] flex-wrap">
        <ProSwimmerCard Name="Assil Halawi" Quote="Giving up is never the answer" Desc="“I started with Proswim in 2015. I felt like I wasn’t good, and wanted to quit. With the help of my teammates and my coach, I pushed beyond my limits and achieved more than I’ve ever thought I could. I learned that « giving up is never the answer ». I broke records, won medals... I couldn’t be more grateful and proud.”" Year="YOF: 2005" ImageSrc={ProSwimmers1} ></ProSwimmerCard>
        <ProSwimmerCard Name="Laetitia Hamdoun" Quote="When I’m swimming, i loosen up, I forget everything happening in my private life." Desc="“When I’m swimming, I loosen up, i forget everything happening in my private life. Started with ProSwim in 2013, at 10 years old. My first competition abroad was in France 2013.(4 gold and 5 sliver medals). For me, swimming is a way to express myself. The last few years with”" Year="YOF: 2004" ImageSrc={ProSwimmers2} ></ProSwimmerCard>
        <ProSwimmerCard Name="Adam Fakih" Quote="I started swimming when I was 10 years old." Desc="I started swimming when I was 10 years old. I moved to Najah swimming club at the age of 14. I broke 6 Lebanese records in 2017. I’ve always enjoyed swimming, I love the team spirit that we have, and I love the adrenaline rush I get before races." Year="YOF: 2004" ImageSrc={ProSwimmers3} ></ProSwimmerCard>
        <ProSwimmerCard Name="Assil Halawi" Quote="Giving up is never the answer" Desc="“I started with Proswim in 2015. I felt like I wasn’t good, and wanted to quit. With the help of my teammates and my coach, I pushed beyond my limits and achieved more than I’ve ever thought I could. I learned that « giving up is never the answer ». I broke records, won medals... I couldn’t be more grateful and proud.”" Year="YOF: 2005" ImageSrc={ProSwimmers4} ></ProSwimmerCard>

      </div>
    </div>
  </div >
}