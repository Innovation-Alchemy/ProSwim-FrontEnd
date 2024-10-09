import "../../CSS/ProSwimmmerCard--comp.css";
import React from "react";
import { useEffect, useState } from "react";

export default function ProSwimmerCard({
  Name = "",
  Quote = "",
  Desc = "",
  Year = "",
  width = 40,
  ImageSrc = "",

}) {
  const [AAWidth, setAAWidth] = useState(width);

  useEffect(() => {
    // if (width) setAAWidth(28);
  }, []);

  return <div className={`ProSwimmerCard flex flex-col items-center justify-start rounded-xl px-6 py-4 min-h-[60vh]`} style={{
    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, .3) 0%, rgba(0, 0, 0, .3) 100%), url(${ImageSrc})`, width: `${AAWidth}vw`
  }}>
    <div className="card__content flex items-center justify-start">
      <div className="card__topBox">
        <h3 className="card__name font-[Playfair-Display] text-[25px]">{Name}</h3>
        <p className="card__quote text-[20px]" style={{ fontFamily: 'Oooh Baby' }}>{Quote}</p>
      </div>
      <span className="card__desc border-4 border-white" style={{ fontFamily: 'Playfair Display' }}>{Desc}
        <br />
        {Year}
      </span>
    </div>
  </div>

}