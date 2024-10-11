import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { shopItem1Pink, shopItem1Blue } from "@/assets";
import { Link } from "react-router-dom";
import ".././CSS/ProductDetails.css";



export default function ProductDetails() {
  const location = useLocation();
  const { item } = location.state; // Destructure the item from state

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("../../public/JSON/Shop_Products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return <div className="ProductDetailsPage pt-[84px] pb-20 text-[18px]">
    <div className="heroSection flex items-center justify-around gap-[2rem]">
      {/* start of left box */}
      <div className="imgContainer flex flex-col items-center justify-around gap-4">
        <img className="mainImage" src={shopItem1Pink} alt={shopItem1Pink} />
        <div className="OtherImages flex items-center justify-between w-full">
          <img className="w-[50%]" src={shopItem1Pink} alt={shopItem1Pink} />
          <img className="w-[50%]" src={shopItem1Blue} alt={shopItem1Blue} />
        </div>
      </div>
      {/* end of left box */}
      {/* start of right box */}
      <div className="rightBox flex flex-col items-start justify-around">
        <h2 className="title">{item.title}</h2>
        <h2 className='price'>{`LBP${item.price}`}</h2>
        <div className='detailsContainer'>
          <h2>Details: </h2>
          <p>
            {`${item.description}`}
          </p>
        </div>
        <div className='colorContainer flex'>
          <h2>Color:</h2>
          {/* <p>{item.colors}</p> */}
          <p>AA ERROR</p>
        </div>
        <button className='CTA--AddToCart font-[Playfair-Display]'>Add To Cart</button>
      </div>
      {/* end of right box */}

    </div>
    {/* end of hero Section */}
    {/* start of ProdInfo Section */}
    <div className='ProdInfoSection'>
      <h2 className='section__title'>Product Information:</h2>
      <p>
        {item.description}
      </p>
    </div>
    {/* end of ProdInfo Section */}
    {/* start of SimProd Section */}
    <div className="SimProdSection">
      <h2 className='section__title'>Similar Products:</h2>
      <div className="cardsContainer flex items-stretch justify-evenly gap-[2rem] flex-nowrap">
        {products.slice(0, 14).map((item, index) => {
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

              card #{index + 1} (not accurate)
              {/* AA TEST GO BACK TO */}

            </div>
          );
        })}
      </div>
    </div>
    {/* end of SimProd Section */}
    {/* start of MayLike Section */}
    <div className="MayLikeSection">
      <h2 className='section__title'>You May Also Like:</h2>
      <div className="cardsContainer flex items-stretch justify-evenly gap-[2rem] flex-nowrap">
        {products.slice(0, 14).map((item, index) => {
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

              card #{index + 1} (not accurate)
              {/* AA TEST GO BACK TO */}

            </div>
          );
        })}
      </div>
    </div>
    {/* end of MayLike Section */}
  </div >
}