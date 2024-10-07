import "../../CSS/PageTitle--comp.css";


const pageTitle = (
  {
    mainTitle_1 = "",
    mainTitle_2 = "Test Title",
    subTitle = "",
    date = "",
    width = "180%",
  }
) => {
  return <>
    <div className="titleContainer flex flex-col items-center">
      <div className="mainTitleContainer flex gap-2 justify-center items-center">
        <h1 className="mainTitle mainTitle--part1">{mainTitle_1}</h1>
        {
          mainTitle_2 !== null ?
            <h1 className="mainTitle mainTitle--part2">{mainTitle_2}</h1> : <></>
        }
      </div>
      {
        subTitle !== null ?
          <h2 className="subTitle">{subTitle}</h2> : <></>
      }
      {
        date !== null ?
          <h2 className="date">{date}</h2> : <></>
      }


      <span
        style={{ width: width }}
      ></span>
    </div>
  </>;
};
export default pageTitle;

