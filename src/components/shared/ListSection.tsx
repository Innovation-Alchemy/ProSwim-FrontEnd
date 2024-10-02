import { useEffect, useState } from 'react';
import '../../CSS/ListSection--comp.css';

export default function ListSection({
  isHoriz = false,
  MaxWidth = "30%",
  MinHeight = "44vh",
  className = "",
  imgSrc1 = "", title1 = "", text1 = "", items1 = [], children1 = null,
  imgSrc2 = "", title2 = "", text2 = "", items2 = [], children2 = null,
  imgSrc3 = "", title3 = "", text3 = "", items3 = [], children3 = null,
  imgSrc4 = "", title4 = "", text4 = "", items4 = [], children4 = null,
  imgSrc5 = "", title5 = "", text5 = "", items5 = [], children5 = null,
  imgSrc6 = "", title6 = "", text6 = "", items6 = [], children6 = null,
  imgSrc7 = "", title7 = "", text7 = "", items7 = [], children7 = null,
  imgSrc8 = "", title8 = "", text8 = "", items8 = [], children8 = null,
  imgSrc9 = "", title9 = "", text9 = "", items9 = [], children9 = null,
}) {

  const [AAMaxWidth, setAAMaxWidth] = useState(MaxWidth);
  const [AAMinHeight, setAAMinHeight] = useState(MinHeight);
  const [isImage, setIsImage] = useState(false);

  useEffect(() => {
    if (!isHoriz) setAAMaxWidth(`auto`);

    if (imgSrc1 !== "" ||
      imgSrc2 !== "" ||
      imgSrc3 !== "" ||
      imgSrc4 !== "" ||
      imgSrc5 !== "" ||
      imgSrc6 !== "" ||
      imgSrc7 !== "" ||
      imgSrc8 !== "" ||
      imgSrc9 !== "") {
      setIsImage(true);
      if (isHoriz) setAAMinHeight("auto");
    }

  }, []);

  const renderCard = (imgSrc, title, text, items, children) => (
    isHoriz === false ? (
      <div className="card flex flex-col items-center justify-around text-center" style={{ maxWidth: AAMaxWidth, width: AAMaxWidth, minHeight: AAMinHeight }}>
        {imgSrc && <img src={imgSrc} alt={imgSrc} />}
        {title && <h2>{title}</h2>}
        {text && <p>{text}</p>}
        {items.length > 0 && (
          <ul className='list-disc flex flex-col gap-1 pl-6'>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        {children}
      </div>
    ) : (
      <div className={isImage ? "card card--Horiz flex items-center justify-start " : "card card--Horiz flex items-start justify-start"} style={{ maxWidth: AAMaxWidth, width: AAMaxWidth, minHeight: AAMinHeight }}>
        {imgSrc && <img src={imgSrc} alt={imgSrc} />}
        <div className="flex flex-col items-start text-left justify-around">
          {title && <h2>{title}</h2>}
          {text && <p className="text-left">{text}</p>}
          {items.length > 0 && (
            <ul className='list-disc flex flex-col gap-1 pl-6'>
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
          {children}
        </div>
      </div>
    )
  );

  return (
    <div className={`ListSection--cardsContainer flex items-center justify-evenly flex-wrap mt-8 ${className}`}>
      {(imgSrc1 || title1 || text1 || children1) && renderCard(imgSrc1, title1, text1, items1, children1)}
      {(imgSrc2 || title2 || text2 || children2) && renderCard(imgSrc2, title2, text2, items2, children2)}
      {(imgSrc3 || title3 || text3 || children3) && renderCard(imgSrc3, title3, text3, items3, children3)}
      {(imgSrc4 || title4 || text4 || children4) && renderCard(imgSrc4, title4, text4, items4, children4)}
      {(imgSrc5 || title5 || text5 || children5) && renderCard(imgSrc5, title5, text5, items5, children5)}
      {(imgSrc6 || title6 || text6 || children6) && renderCard(imgSrc6, title6, text6, items6, children6)}
      {(imgSrc7 || title7 || text7 || children7) && renderCard(imgSrc7, title7, text7, items7, children7)}
      {(imgSrc8 || title8 || text8 || children8) && renderCard(imgSrc8, title8, text8, items8, children8)}
      {(imgSrc9 || title9 || text9 || children9) && renderCard(imgSrc9, title9, text9, items9, children9)}
    </div>
  );

}
