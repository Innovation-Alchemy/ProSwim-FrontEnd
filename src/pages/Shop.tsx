import { useEffect, useState } from "react";
import { shopBackground, shopItem1Pink, shopItem1Blue } from "@/assets";
import ".././CSS/Shop.css";
import { Link } from "react-router-dom";
// import ProSwimmerCard from "@/components/Albums/ProSwimmerCard";


export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("General");
  // const [pagesNumArray, setPagesNumArray] = useState([]);
  // start JSONS
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  // end JSONS

  useEffect(() => {
    fetch("./JSON/Shop_Categories.json")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    fetch("./JSON/Shop_Products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);
  // start of pages Step Map
  const [currentPage, setCurrentPage] = useState(1);  // Tracks the current page
  const productsPerPage = 24;
  const totalPages = Math.ceil(products.length / productsPerPage);  // Calculate total pages
  // end of pages Step Map

  return <div className="ShopPage pt-[84px] pb-20 text-[18px]">
    <div className="HeroTextBg">
      <div className="bgContainer">
        <img className='img' src={shopBackground} alt="swimming pool" />
        <h1 className="heroTitle">Shop the best in swimwear and accessories!</h1>
      </div>
    </div>
    <div className="ShopPage__Content">
      {/* start of categories fetching */}
      <div className="CategoriesContainer flex items-center justify-around gap-[1rem] text-center">
        <h2 className={activeCategory === "General" ? "CategoryTitle CategoryTitle--Active" : "CategoryTitle"}
          onClick={
            () => {
              setActiveCategory("General");
            }}
        >
          General
        </h2>
        {categories.map((item) => {
          return (

            <h2
              className={activeCategory === item[`title`] ? "CategoryTitle CategoryTitle--Active" : "CategoryTitle"}
              key={item[`id`]}
              onClick={
                () => {
                  setActiveCategory(item[`title`]);
                }}
            >
              {item[`title`]}
            </h2>

          );
        }
        )}
      </div>
      {/* end of categories fetching */}
      {/* start of products fetching */}
      <div className="filtersNProductsContainer flex items-start justify-around gap-[2rem] px-[2.5%]">
        <div className="filtersContainer flex flex-col items-start gap-[2rem] w-full text-[15px] font-semibold">
          <div className="filter flex items-center justify-between gap-2 w-full text-[#000] "><h4>Availability</h4><h4>+</h4></div>
          <div className="filter flex items-center justify-between gap-2 w-full text-[#000] "><h4>Price</h4><h4>+</h4></div>
          <div className="filter flex items-center justify-between gap-2 w-full text-[#000] "><h4>Gender</h4><h4>+</h4></div>
          <div className="filter flex items-center justify-between gap-2 w-full text-[#000] "><h4>Brand</h4><h4>+</h4></div>

        </div>
        <div className="productsContainer flex flex-col">
          <div className="productsHeader flex items-center justify-between w-full">
            <p className="flex items-center gap-1">
              <span className="prodsNum">
                {`${products.length}`}
              </span>
              <span>
                Products Found
              </span>
            </p>
            <div className="sortByContainer flex items-center gap-1">
              <p>Sort By:</p>
              <select name="" id="" className="sortOptions">
                <option value="Best Selling">
                  Best Selling
                </option>
                <option value="Alphabetically, A-Z">
                  Alphabetically, A-Z
                </option>
                <option value="Alphabetically, Z-A">
                  Alphabetically, Z-A
                </option>
                <option value="Price, low to high">
                  Price, low to high
                </option>
                <option value="Price, high to low">
                  Price, high to low
                </option>
                <option value="Date, new to old">
                  Date, new to old
                </option>
                <option value="Date, old to new">
                  Date, old to new
                </option>
              </select>

            </div>
          </div>

          <div className="cardsContainer flex items-stretch justify-evenly gap-[2rem] flex-wrap">
            {products.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage).map((item, index) => {
              return (
                <div className="card flex flex-col items-start justify-between gap-[0.5rem]" key={item[`id`]}>
                  <div className="imgContainer self-center flex flex-col items-center">
                    <img className="mainImage" src={shopItem1Pink} alt={shopItem1Pink} />
                    <div className="OtherImages flex items-center justify-center w-[50%]">
                      <img className="w-[50%]" src={shopItem1Pink} alt={shopItem1Pink} />
                      <img className="w-[50%]" src={shopItem1Blue} alt={shopItem1Blue} />
                    </div>
                  </div>
                  <p className="brand">{item[`brand`]}</p>
                  <h1 className="title">{item[`title`]}</h1>
                  <p className="price">{`LBP${item[`price`]}`}</p>
                  <Link to={`/shop/product-details/${encodeURIComponent(item["id"])}`} state={{ item }}
                    onClick={() => { window.scroll(0, 0) }}
                    className="CTA--viewDetails" >View Details
                  </Link>

                  card #{(index + 1) * currentPage} (not accurate)
                  {/* AA TEST GO BACK TO */}

                </div>
              );
            })}
          </div>
          <div className="stepsContainer mt-5 flex items-center justify-center gap-5">
            {/* Pagination Buttons */}

            {/* Always show 'First' page */}
            {currentPage > 2 && (
              <>
                <button className="stepBtn" onClick={() => {
                  setCurrentPage(1);
                  window.scrollTo(0, 520);
                }}>1</button>
                {currentPage > 3 && <span>...</span>} {/* Ellipsis for skipped pages */}
              </>
            )}

            {/* Show 1 page before the current page if applicable */}
            {currentPage > 1 && (
              <button
                className={`stepBtn ${currentPage === currentPage - 1 ? 'stepBtn--active' : ''}`}
                onClick={() => {
                  setCurrentPage(currentPage - 1);
                  window.scrollTo(0, 520);
                }}
              >
                {currentPage - 1}
              </button>
            )}

            {/* Show current page */}
            <button className="stepBtn stepBtn--active">
              {currentPage}
            </button>

            {/* Show 3 pages after the current page */}
            {Array.from({ length: totalPages }, (_, index) => index + 1)
              .filter(page => page > currentPage && page <= currentPage + 3)  // Show only the 3 pages after the current page
              .map((page) => (
                <button
                  key={page}
                  className="stepBtn"
                  onClick={() => {
                    setCurrentPage(page);
                    window.scrollTo(0, 520);
                  }}
                >
                  {page}
                </button>
              ))}

            {/* Show 'Last' page if currentPage is less than totalPages - 3 */}
            {currentPage < totalPages - 3 && (
              <>
                {currentPage < totalPages - 3 && <span>...</span>}  {/* Ellipsis for skipped pages */}
                <button className="stepBtn" onClick={() => setCurrentPage(totalPages)}>{totalPages}</button>
              </>
            )}
          </div>




        </div>
      </div>
      {/* end of products fetching */}
    </div>

  </div >
}