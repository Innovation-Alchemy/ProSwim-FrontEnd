import '../../CSS/HeroTextBg--comp.css';
import { headerBG } from "@/assets";

export default function HeroTextBg({ title = "" }) {

  return <div className="HeroTextBg">
    <div className="bgContainer">
      <img className='img' src={headerBG} alt="swimming pool" />
      <h1 className="heroTitle">{title}</h1>
    </div>
  </div>
}