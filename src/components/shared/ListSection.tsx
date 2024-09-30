import { useEffect, useState } from 'react';
import '../../CSS/ListSection--comp.css';

export default function ListSection({
  isHoriz = false,
  MaxWidth = 20,
  MinHeight = "auto",
  imgSrc1 = "", title1 = "", text1 = "",
  imgSrc2 = "", title2 = "", text2 = "",
  imgSrc3 = "", title3 = "", text3 = "",
  imgSrc4 = "", title4 = "", text4 = "",
  imgSrc5 = "", title5 = "", text5 = "",
  imgSrc6 = "", title6 = "", text6 = "",
  imgSrc7 = "", title7 = "", text7 = "",
  imgSrc8 = "", title8 = "", text8 = "",
  imgSrc9 = "", title9 = "", text9 = "",
}) {

  const [AAMaxWidth, setAAMaxWidth] = useState(`${MaxWidth}%`);
  const [AAMinHeight, setAAMinHeight] = useState(`auto`);
  const [isImage, setIsImage] = useState(false);

  useEffect(() => {
    if (isHoriz) setAAMaxWidth(`30%`)
    else setAAMaxWidth(`auto`);

    if (imgSrc1 !== "" ||
      imgSrc2 !== "" ||
      imgSrc3 !== "" ||
      imgSrc4 !== "" ||
      imgSrc5 !== "" ||
      imgSrc6 !== "" ||
      imgSrc7 !== "" ||
      imgSrc8 !== "" ||
      imgSrc9 !== "") {
      setAAMinHeight("auto");
      setIsImage(true);
    }
    else setAAMinHeight('25vh');

  }, []);

  return <>

    {

    }
    <div className="ListSection--cardsContainer flex items-center justify-evenly flex-wrap mt-8">

      {imgSrc1 !== "" || title1 !== "" || text1 !== "" ? (
        isHoriz === false ? (
          <div className="card flex flex-col items-center justify-around text-center">
            {imgSrc1 && <img src={imgSrc1} alt={imgSrc1} />}
            {title1 && <h2>{title1}</h2>}
            {text1 && <p>{text1}</p>}
          </div>
        ) : (
          <div className={isImage ? "card card--Horiz flex items-center justify-around " : "card card--Horiz flex items-start justify-around"} style={{ maxWidth: AAMaxWidth, width: AAMaxWidth, minHeight: AAMinHeight }}>
            {imgSrc1 && <img src={imgSrc1} alt={imgSrc1} />}
            <div className="flex flex-col items-start text-left justify-around">
              {title1 && <h2>{title1}</h2>}
              {text1 && <p className="text-left">{text1}</p>}
            </div>
          </div>
        )
      ) : null}

      {imgSrc2 !== "" || title2 !== "" || text2 !== "" ? (
        isHoriz === false ? (
          <div className="card flex flex-col items-center justify-around text-center">
            {imgSrc2 && <img src={imgSrc2} alt={imgSrc2} />}
            {title2 && <h2>{title2}</h2>}
            {text2 && <p>{text2}</p>}
          </div>
        ) : (
          <div className={isImage ? "card card--Horiz flex items-center justify-around " : "card card--Horiz flex items-start justify-around"} style={{ maxWidth: AAMaxWidth, width: AAMaxWidth, minHeight: AAMinHeight }}>
            {imgSrc2 && <img src={imgSrc2} alt={imgSrc2} />}
            <div className="flex flex-col items-start text-left justify-around">
              {title2 && <h2>{title2}</h2>}
              {text2 && <p className="text-left">{text2}</p>}
            </div>
          </div>
        )
      ) : null}

      {imgSrc3 !== "" || title3 !== "" || text3 !== "" ? (
        isHoriz === false ? (
          <div className="card flex flex-col items-center justify-around text-center">
            {imgSrc3 && <img src={imgSrc3} alt={imgSrc3} />}
            {title3 && <h2>{title3}</h2>}
            {text3 && <p>{text3}</p>}
          </div>
        ) : (
          <div className={isImage ? "card card--Horiz flex items-center justify-around " : "card card--Horiz flex items-start justify-around"} style={{ maxWidth: AAMaxWidth, width: AAMaxWidth, minHeight: AAMinHeight }}>
            {imgSrc3 && <img src={imgSrc3} alt={imgSrc3} />}
            <div className="flex flex-col items-start text-left justify-around">
              {title3 && <h2>{title3}</h2>}
              {text3 && <p className="text-left">{text3}</p>}
            </div>
          </div>
        )
      ) : null}

      {imgSrc4 !== "" || title4 !== "" || text4 !== "" ? (
        isHoriz === false ? (
          <div className="card flex flex-col items-center justify-around text-center">
            {imgSrc4 && <img src={imgSrc4} alt={imgSrc4} />}
            {title4 && <h2>{title4}</h2>}
            {text4 && <p>{text4}</p>}
          </div>
        ) : (
          <div className={isImage ? "card card--Horiz flex items-center justify-around " : "card card--Horiz flex items-start justify-around"} style={{ maxWidth: AAMaxWidth, width: AAMaxWidth, minHeight: AAMinHeight }}>
            {imgSrc4 && <img src={imgSrc4} alt={imgSrc4} />}
            <div className="flex flex-col items-start text-left justify-around">
              {title4 && <h2>{title4}</h2>}
              {text4 && <p className="text-left">{text4}</p>}
            </div>
          </div>
        )
      ) : null}

      {imgSrc5 !== "" || title5 !== "" || text5 !== "" ? (
        isHoriz === false ? (
          <div className="card flex flex-col items-center justify-around text-center">
            {imgSrc5 && <img src={imgSrc5} alt={imgSrc5} />}
            {title5 && <h2>{title5}</h2>}
            {text5 && <p>{text5}</p>}
          </div>
        ) : (
          <div className={isImage ? "card card--Horiz flex items-center justify-around " : "card card--Horiz flex items-start justify-around"} style={{ maxWidth: AAMaxWidth, width: AAMaxWidth, minHeight: AAMinHeight }}>
            {imgSrc5 && <img src={imgSrc5} alt={imgSrc5} />}
            <div className="flex flex-col items-start text-left justify-around">
              {title5 && <h2>{title5}</h2>}
              {text5 && <p className="text-left">{text5}</p>}
            </div>
          </div>
        )
      ) : null}

      {imgSrc6 !== "" || title6 !== "" || text6 !== "" ? (
        isHoriz === false ? (
          <div className="card flex flex-col items-center justify-around text-center">
            {imgSrc6 && <img src={imgSrc6} alt={imgSrc6} />}
            {title6 && <h2>{title6}</h2>}
            {text6 && <p>{text6}</p>}
          </div>
        ) : (
          <div className={isImage ? "card card--Horiz flex items-center justify-around " : "card card--Horiz flex items-start justify-around"} style={{ maxWidth: AAMaxWidth, width: AAMaxWidth, minHeight: AAMinHeight }}>
            {imgSrc6 && <img src={imgSrc6} alt={imgSrc6} />}
            <div className="flex flex-col items-start text-left justify-around">
              {title6 && <h2>{title6}</h2>}
              {text6 && <p className="text-left">{text6}</p>}
            </div>
          </div>
        )
      ) : null}

      {imgSrc7 !== "" || title7 !== "" || text7 !== "" ? (
        isHoriz === false ? (
          <div className="card flex flex-col items-center justify-around text-center">
            {imgSrc7 && <img src={imgSrc7} alt={imgSrc7} />}
            {title7 && <h2>{title7}</h2>}
            {text7 && <p>{text7}</p>}
          </div>
        ) : (
          <div className={isImage ? "card card--Horiz flex items-center justify-around " : "card card--Horiz flex items-start justify-around"} style={{ maxWidth: AAMaxWidth, width: AAMaxWidth, minHeight: AAMinHeight }}>
            {imgSrc7 && <img src={imgSrc7} alt={imgSrc7} />}
            <div className="flex flex-col items-start text-left justify-around">
              {title7 && <h2>{title7}</h2>}
              {text7 && <p className="text-left">{text7}</p>}
            </div>
          </div>
        )
      ) : null}

      {imgSrc8 !== "" || title8 !== "" || text8 !== "" ? (
        isHoriz === false ? (
          <div className="card flex flex-col items-center justify-around text-center">
            {imgSrc8 && <img src={imgSrc8} alt={imgSrc8} />}
            {title8 && <h2>{title8}</h2>}
            {text8 && <p>{text8}</p>}
          </div>
        ) : (
          <div className={isImage ? "card card--Horiz flex items-center justify-around " : "card card--Horiz flex items-start justify-around"} style={{ maxWidth: AAMaxWidth, width: AAMaxWidth, minHeight: AAMinHeight }}>
            {imgSrc8 && <img src={imgSrc8} alt={imgSrc8} />}
            <div className="flex flex-col items-start text-left justify-around">
              {title8 && <h2>{title8}</h2>}
              {text8 && <p className="text-left">{text8}</p>}
            </div>
          </div>
        )
      ) : null}

      {imgSrc9 !== "" || title9 !== "" || text9 !== "" ? (
        isHoriz === false ? (
          <div className="card flex flex-col items-center justify-around text-center">
            {imgSrc9 && <img src={imgSrc9} alt={imgSrc9} />}
            {title9 && <h2>{title9}</h2>}
            {text9 && <p>{text9}</p>}
          </div>
        ) : (
          <div className={isImage ? "card card--Horiz flex items-center justify-around " : "card card--Horiz flex items-start justify-around"} style={{ maxWidth: AAMaxWidth, width: AAMaxWidth, minHeight: AAMinHeight }}>
            {imgSrc9 && <img src={imgSrc9} alt={imgSrc9} />}
            <div className="flex flex-col items-start text-left justify-around">
              {title9 && <h2>{title9}</h2>}
              {text9 && <p className="text-left">{text9}</p>}
            </div>
          </div>
        )
      ) : null}

    </div>
  </>
}
