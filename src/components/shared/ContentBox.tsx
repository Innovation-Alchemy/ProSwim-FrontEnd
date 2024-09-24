import "../../CSS/ContentBox--comp.css";


const contentBox = (
  {
    imageOnRight = true,
    heading1 = "",
    text1 = "",
    heading2 = "",
    text2 = "",
    heading3 = "",
    text3 = "",
    imgSrc = "",

  }
) => {
  return <>
    <div
      className={imageOnRight ? "ContentBox--Sec flex justify-around items-center" : "ContentBox--Sec flex items-center justify-between flex-row-reverse"}>
      {/* start of leftBox */}
      <div className="leftBox flex flex-col w-[58%]">
        <div className="part">
          <h1 className="heading">{heading1}</h1>
          <p className="text">{text1}</p>
        </div>
        <div className="part">
          <h1 className="heading">{heading2}</h1>
          <p className="text">{text2}</p>
        </div>
        <div className="part">
          <h1 className="heading">{heading3}</h1>
          <p className="text">{text3}</p>
        </div>
      </div>
      {/* end of leftBox */}
      {/* start of rightBox */}
      <div className="rightBox w-[38%]">
        <img src={imgSrc} alt="" />
      </div>
      {/* end of rightBox */}
    </div>
  </>
};

export default contentBox;