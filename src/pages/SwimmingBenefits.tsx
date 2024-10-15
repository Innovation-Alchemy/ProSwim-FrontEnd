// import { ethosSVG4 } from "@/assets";
// import ListSection from "@/components/shared/ListSection";
// import PageTitle from "@/components/shared/pageTitle";
import HeroTextBg from "@/components/shared/HeroTextBg";
import "../CSS/CardListStyle.css";

export default function SwimmingBenefits() {

  return <div className="SwimmingBenefitsPage pt-[84px] pb-20 text-[18px]">
    <HeroTextBg title="Swimming Benefits">
    </HeroTextBg>
    <div className="content flex flex-col mt-10 pl-10 pr-10">
      <h3 className="mb-6 text-[22px] underline font-bold font-[Roboto]">Swimming Benefits</h3>
      <p className="mb-6">Do you know why swimming is the best sport for you from health perspective? Well, because it has lots of health benefits, physically and mentally, in addition to the important values that can change your life in a positive way.!</p>
      <ul className="list-decimal flex flex-col gap-12 pl-4">
        <li className="font-bold font-[Playfair-Display]">Benefits on physical health:
          <ul className="CardListAll list-disc flex items-stretch justify-evenly flex-wrap text-[15px] mt-6">
            <div>
              <li>increases the heart rate without putting stress on the body</li>
            </div>
            <div>
              <li>improves strength</li>
            </div>
            <div>
              <li>tones muscles</li>
            </div>
            <div>
              <li>enhances fitness</li>
            </div>
            <div>
              <li>helps to manage weight</li>
            </div>
            <div>
              <li>builds cardiovascular strength</li>
            </div>
            <div>
              <li>builds endurance</li>
            </div>
            <div>
              <li>helps with flexibility</li>
            </div>
            <div>
              <li>Swimming is a safe exercise for people with arthritis/injury/disability/asthma/MS (multiple sclerosis)</li>
            </div>
          </ul>
        </li>
        <li className="font-bold font-[Playfair-Display]">Benefits on mental health:
          <ul className="CardListAll CardListAll--Small  list-disc flex items-stretch justify-evenly flex-wrap text-[15px] mt-6 pl-4">
            <div>
              <li>improves sleep</li>
            </div>
            <div>
              <li>improves mood</li>
            </div>
            <div>
              <li>manages stress</li>
            </div>
            <div>
              <li>lowers depression</li>
            </div>
            <div>
              <li>improves self esteem</li>
            </div>
          </ul>
        </li>
        <li className="font-bold font-[Playfair-Display]">Values gained from swimming:
          <ul className="CardListAll CardListAll--Small list-disc flex items-stretch justify-evenly flex-wrap text-[15px] mt-6 pl-4">
            <div>
              <li>Fitness</li>
            </div>
            <div>
              <li>self confidence</li>
            </div>
            <div>
              <li>discipline</li>
            </div>
            <div>
              <li>teamwork</li>
            </div>
            <div>
              <li>sportsmanship</li>
            </div>
            <div>
              <li>work ethic</li>
            </div>
            <div>
              <li>delayed gratification</li>
            </div>
            <div>
              <li>time management</li>
            </div>
            <div>
              <li>dedication</li>
            </div>
            <div>
              <li>skill improvement</li>
            </div>
            <div>
              <li>friendship & respect</li>
            </div>
            <div>
              <li>goal setting</li>
            </div>
            <div>
              <li>gender equity</li>
            </div>
            <div>
              <li>appreciation of your support team(parents-coaches..)</li>
            </div>
            <div>
              <li>courage</li>
            </div>
            <div>
              <li>compassion</li>
            </div>
          </ul>
        </li>
      </ul>
    </div>

  </div>

}