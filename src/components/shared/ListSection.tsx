import '../../CSS/ListSection--comp.css';


export default function ListSection({
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


  return <>
    <div className="ListSection--cardsContainer flex items-center justify-evenly flex-wrap mt-14">
      {imgSrc1 !== "" || title1 !== "" || text1 !== "" ?
        <div className="card flex flex-col items-center justify-around">
          <img src={imgSrc1} alt={imgSrc1} />
          <h2>{title1}</h2>
          <p>{text1}</p>
        </div> : <></>}
      {imgSrc2 !== "" || title2 !== "" || text2 !== "" ?
        <div className="card flex flex-col items-center justify-around">
          <img src={imgSrc2} alt={imgSrc2} />
          <h2>{title2}</h2>
          <p>{text2}</p>
        </div> : <></>}
      {imgSrc3 !== "" || title3 !== "" || text3 !== "" ?
        <div className="card flex flex-col items-center justify-around">
          <img src={imgSrc3} alt={imgSrc3} />
          <h2>{title3}</h2>
          <p>{text3}</p>
        </div> : <></>}
      {imgSrc4 !== "" || title4 !== "" || text4 !== "" ?
        <div className="card flex flex-col items-center justify-around">
          <img src={imgSrc4} alt={imgSrc4} />
          <h2>{title4}</h2>
          <p>{text4}</p>
        </div> : <></>}
      {imgSrc5 !== "" || title5 !== "" || text5 !== "" ?
        <div className="card flex flex-col items-center justify-around">
          <img src={imgSrc5} alt={imgSrc5} />
          <h2>{title5}</h2>
          <p>{text5}</p>
        </div> : <></>}
      {imgSrc6 !== "" || title6 !== "" || text6 !== "" ?
        <div className="card flex flex-col items-center justify-around">
          <img src={imgSrc6} alt={imgSrc6} />
          <h2>{title6}</h2>
          <p>{text6}</p>
        </div> : <></>}
      {imgSrc7 !== "" || title7 !== "" || text7 !== "" ?
        <div className="card flex flex-col items-center justify-around">
          <img src={imgSrc7} alt={imgSrc7} />
          <h2>{title7}</h2>
          <p>{text7}</p>
        </div> : <></>}
      {imgSrc8 !== "" || title8 !== "" || text8 !== "" ?
        <div className="card flex flex-col items-center justify-around">
          <img src={imgSrc8} alt={imgSrc8} />
          <h2>{title8}</h2>
          <p>{text8}</p>
        </div> : <></>}
      {imgSrc9 !== "" || title9 !== "" || text9 !== "" ?
        <div className="card flex flex-col items-center justify-around">
          <img src={imgSrc9} alt={imgSrc9} />
          <h2>{title9}</h2>
          <p>{text9}</p>
        </div> : <></>}
    </div>
  </>
}