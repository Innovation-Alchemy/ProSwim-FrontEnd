// import { ActiveStartSVG1 } from "@/assets";
// import PageTitle from "@/components/shared/pageTitle";
import HeroTextBg from "@/components/shared/HeroTextBg";
import ListSection from "@/components/shared/ListSection";


export default function CompetitiveTeam() {



  return <div className="CompetitiveTeamPage--levels pt-[84px] pb-20 text-[18px]">
    <HeroTextBg title="Competitive Team">
    </HeroTextBg>
    <div className="content flex flex-col gap-20 mt-10 pl-10 pr-10 ">

      <div>
        <h3 className="mb-6 text-[24px] underline font-bold font-[Playfair-Display]">Competitive Team:</h3>
        <p className="mb-4">All swimmers who successfully complete all levels are ready to join ProSwim Competitive Team and compete nationally & internationally with the support of our best coaches! The team is trained & supervised by the academy’s Head Coach Mohamad Sakr... The team practices 6 times a week on school days and twice a day... 6 times a week on long vacations (summer vacation - Christmas vacation...) </p>
        <p>The team practices intensive drills related to the 4 swimming strokes, speed and endurance.. Furthermore, the team goes on professional high level boot camps supervised by the Head Coach. To build strength & endurance… In addition to offering a more challenging & varied workout... and creating and maintaining the team spirit among the team’s members. The team undergoes very hi-tech & advanced physical tests to Monitor their muscles growth, endurance, and development using the latest machines & technology. Because this level is very advanced & critical, we pay attention to the smallest details and follow up on them with specialists. We work hand in hand with:</p>

        <div className="flex flex-col gap-6">
          <ListSection title1="Certified Experienced Nutritionist for Athletes:" text1="Who evaluates each swimmer’s dietary habits and counsels him/her on the proper diet which best suits him/her for the training and competitive situations."
            title2="Certified & Professional Dryland Trainers" text2="Dryland training is very beneficial for competitive swimmers when performed correctly. It’s a great way to strengthen the important muscle groups used when swimming and thus ultimately increasing the power of the swimmer and force output."
            title3="Physiotherapist:" text3="Due to the major positive impact on both injury prevention & performance, physiotherapy visits are an essential part of our swimmers’ physical fitness regime. Why? Simply because it can rehab common swimmer injuries and muscle fatigue & overuse. (Shoulders, neck, lower back, ankles, knees, feet and many more different points...) It can also improve the swimmer’s breathing technique by exercises that work his/her core and even chest physiotherapy..."
            title4="Yoga instructor:" text4="Looking for the best ways to improve their strength, mobility and body awareness which directly improves their performance in water, swimming-specific yoga practices are part of our competitive team routine to develop breathing efficiency, enhance recovery, help prevent injury & improve mental skills just equally as improving mobility, flexibility and attention control.." children4={<>
              <br />
              <p>Last by not least, the academy works hand in hand with the parents of each competitive swimmer to follow up on all the details included like their food diet, sleeping routine, home workouts, stretching, screen time exposure and their whole life style to ensure achieving and maintaining the best results!!</p>
            </>}
            isHoriz={true} MaxWidth="100%" MinHeight="auto" className="mt-0"></ListSection>
        </div>

      </div>
    </div>
  </div >
}