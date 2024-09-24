// import { WhyUs_image3 } from "@/assets"; // AA TEST
import PageTitle from "@/components/shared/pageTitle";
import HeroTextBg from "@/components/shared/HeroTextBg";
import logo from "@/assets/general/proswim_logo.svg";

const OurLogo = () => {
  return (
    <div className="OurLogoPage pt-[84px] pb-20 w-full">
      {/* start of hero section */}
      <HeroTextBg title="Our Logo"></HeroTextBg>
      {/* end of hero section */}
      <PageTitle mainTitle_2="Our Logo"></PageTitle>

      <div className="logoContainer flex justify-center">
        <img className="w-60 object-contain mt-5 mb-14" src={logo} alt="ProSwim logo" />
      </div>
      <div className="content pl-12 pr-12 flex flex-col gap-8">
        <p >
          Have u ever wondered what our logo means?
          <br />

          Our logo is a Blue Circled Water Splash...!
          <br />
          Why...?!
          <br />
          Because it’s the small details that make THE BIG DIFFERENCE...!
        </p>

        <p >
          for both the sky & the sea. Where there is no limit.
          <br />
          Open spaces for hopes, skills, talents, experiences, knowledge, energy, efforts, imagination...
          <br />
          It also resembles depth, trust & freedom.
          <br />
          Blue color positively affects the mind & body, invokes rest, exudes feelings of tranquility and communicates significance, importance & confidence.
        </p>

        <p>


          represents unity, wholeness & infinity.
          <br />
          It shows endlessness & timelessness.
          <br />
          It stands for enlightenment & perfection.
          <br />
          zes focus, cycles & ongoing energy...!!
        </p>

        <p>
          WATER represents life as it is the source of life.
          <br />
          Nothing survives without water, It is also a symbol of power & strength.
          <br />
          out mountains to make its way FORWARD!!!!
          <br />
          Water always goes where it wants to go… and there is nothing that could stand against it…
          <br />
          It teaches us to be flexible & embrace change… to adapt & adjust to any change (liquid-solid-vapor)
          <br />
          f everything… not just mud but anything that clutters in our hearts/minds
        </p>

        <p>
          The SPLASH resembles the strike, the hit, the power the dominance & the supreme energy…!
          <br />
          Our logo resembles the values instilled in every swimmer at our academy…!!
          <br />
          IT’S ALL IN THE NAME..!!
          <br />
          ProSwim
          <br />
          The pro in ProSwim stands for the professionalism of our academy in this sport.
          <br />
          It also means supporting this activity and always moving forward and doing whatever it takes to reach higher levels.
          <br />
          Here, it’s important to highlight the factors that make us deserve this title:
          <br />
          <ul className="list-disc ml-4	">
            <li>preparation</li>
            <li>respect</li>
            <li>responsibility</li>
            <li>hard work</li>
            <li>fair play</li>
            <li>skills</li>
            <li>team effort</li>
          </ul>

        </p>
        <div>

          <div className="logoContainer flex justify-start">

          </div>
          <ul className="list-none">
            <img className="w-60 object-contain mt-5 mb-5" src={logo} alt="proSwimmer2" />
            <li>P: partnership & potential</li>
            <li>R: reliability</li>
            <li>O: organization</li>
            <li>S: synergy & solidarity</li>
            <li>W: welcoming</li>
            <li>I: integrity</li>
            <li>M: mutuality</li>
          </ul>
                    </div>
      </div>
                </div>
              )
                  }
      
export default OurLogo;