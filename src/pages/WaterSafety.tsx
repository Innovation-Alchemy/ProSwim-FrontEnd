// import { ethosSVG4 } from "@/assets";
// import ListSection from "@/components/shared/ListSection";
// import PageTitle from "@/components/shared/pageTitle";
import HeroTextBg from "@/components/shared/HeroTextBg";

export default function WaterSafety() {

  return <div className="WaterSafetyPage pt-[84px] pb-20">
    <HeroTextBg title="Water Safety">
    </HeroTextBg>

    {/* font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 700; */}

    <div className="content flex flex-col mt-10 pl-10 pr-10">
      <h3 className="mb-6 text-[22px] underline font-bold font-[Roboto]">Water Safety</h3>
      <p className="mb-6 text-[16px]">It’s something your child will learn and retain for the entirety of their life. It’s an ability they will have even as an elderly person.
        <br />
        It’s the only sport that has the potential to be a true life saver.<strong>Swimming is a life skill!</strong></p>
      <ul className="list-decimal flex flex-col gap-4 pl-4 text-[16px]">
        <li>Drowning is one of the top 5 causes of deaths for people aged 1-14 years old.</li>
        <li>Drowning in the 3rd leading cause of unintentional injury death worldwide, accounting for 7% of all injury- related deaths.</li>
        <li>There are an estimated 360,000 annual drowning deaths worldwide.</li>
        <li>The WHO refers to Drowning as the “leading killer”</li>
        <li>For every fatal drowning case at least 4 cases of non-fatal drownings are reported.</li>
        <li>Non-fatal drowning entails long term hospitalization & rehabilitation and in many cases results in permanent disability and
          neurological damages due to prolonged submersion time or delayed life support assistance.</li>
        <li>Lebanon’s coastal location and wide exposure to water bodies increases the country’s risk of drowning.</li>
        <li>
          More of 70% of the Lebanese Population resides in coastal cities and many of them practice water related activities like fishing,
          swimming and recreational sports.</li>
        <li>Drowning is PREDICTABLE & PREVENTABLE!!!</li>
        <li>
          The drowning preventive measures implemented in USA, Canada and Australia led to a tremendous success in preventing
          drowning injuries and reducing drowning fatalities.</li>
        <li>
          It is highly recommended to:
          <ul className="list-disc pl-4">
            <li>Raise public awareness</li>
            <li>Promote safe environment</li>
            <li>Teach children to swim</li>
            <li>Raise awareness of water hazards and understanding of personal limitations</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
}