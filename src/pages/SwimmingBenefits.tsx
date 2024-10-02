// import { ethosSVG4 } from "@/assets";
// import ListSection from "@/components/shared/ListSection";
// import PageTitle from "@/components/shared/pageTitle";
import HeroTextBg from "@/components/shared/HeroTextBg";

export default function SwimmingBenefits() {

  return <div className="SwimmingBenefitsPage pt-[84px] pb-20 text-[18px]">
    <HeroTextBg title="Swimming Benefits">
    </HeroTextBg>
    <div className="content flex flex-col mt-10 pl-10 pr-10">
      <h3 className="mb-6 text-[22px] underline font-bold font-[Roboto]">Swimming Benefits</h3>
      <p className="mb-6">Do you know why swimming is the best sport for you from health perspective? Well, because it has lots of health benefits, physically and mentally, in addition to the important values that can change your life in a positive way.!</p>
      <ul className="list-decimal flex flex-col gap-12 pl-4">
        <li className="font-bold font-[Playfair-Display]">Benefits on physical health:
          <ul className="mt-2 list-disc font-normal flex flex-col gap-1 pl-4">
            <li>increases the heart rate without putting stress on the body</li>
            <li>improves strength</li>
            <li>tones muscles</li>
            <li>enhances fitness</li>
            <li>helps to manage weight</li>
            <li>builds cardiovascular strength</li>
            <li>builds endurance</li>
            <li>helps with flexibility</li>
            <li>Swimming is a safe exercise for people with arthritis/injury/disability/asthma/MS (multiple sclerosis)</li>
          </ul>
        </li>
        <li className="font-bold font-[Playfair-Display]">Benefits on mental health:
          <ul className="mt-2 list-disc font-normal flex flex-col gap-1 pl-4">
            <li>improves sleep</li>
            <li>improves mood</li>
            <li>manages stress</li>
            <li>lowers depression</li>
            <li>improves self esteem</li>
          </ul>
        </li>
        <li className="font-bold font-[Playfair-Display]">Values gained from swimming:
          <ul className="mt-2 list-disc font-normal flex flex-col gap-1 pl-4">
            <li>Fitness</li>
            <li>self confidence</li>
            <li>discipline</li>
            <li>teamwork</li>
            <li>sportsmanship</li>
            <li>work ethic</li>
            <li>delayed gratification</li>
            <li>time management</li>
            <li>dedication</li>
            <li>skill improvement</li>
            <li>friendship & respect</li>
            <li>goal setting</li>
            <li>gender equity</li>
            <li>appreciation of your support team(parents-coaches..)</li>
            <li>courage</li>
            <li>compassion</li>
          </ul>
        </li>
      </ul>
    </div>

  </div>

}