import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HomeProduct from "./Home_products";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";
import { TiShoppingCart } from "react-icons/ti";
import "./home.css";

const Home = ({ addtocart }) => {
  const [newProduct, setNewProduct] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const [topProduct, setTopProduct] = useState([]);
  const [trendingProduct, setTrendingProduct] = useState(HomeProduct);
  const filtercate = (x) => {
    const filterproduct = HomeProduct.filter((curElm) => {
      return curElm.type === x;
    });
    setTrendingProduct(filterproduct);
  };
  const allTrendingProduct = () => {
    setTrendingProduct(HomeProduct);
  };

  useEffect(() => {
    productcategory();
  });

  const productcategory = () => {
    //NewProduct
    const newcategory = HomeProduct.filter((x) => {
      return x.type === "new";
    });
    setNewProduct(newcategory);

    const featuredcategory = HomeProduct.filter((x) => {
      return x.type === "featured";
    });
    setFeaturedProduct(featuredcategory);
    const topcategory = HomeProduct.filter((x) => {
      return x.type === "top";
    });
    setTopProduct(topcategory);
  };
  return (
    <>
      <div className="home">
        <div className="top_banner">
          <div className="contant">
            <h3>Silver Aluminum</h3>
            <h2>Apple Watch</h2>
            <p>30% off at your first order</p>
            <Link to="/shop" className="link">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="trending">
          <div className="container">
            <div className="left_box">
              <div className="header">
                <div className="heading">
                  <h2 onClick={() => allTrendingProduct()}>Trending Product</h2>
                </div>
                <div className="cate">
                  <h3 onClick={() => filtercate("new")}>New</h3>
                  <h3 onClick={() => filtercate("featured")}>Featured</h3>
                  <h3 onClick={() => filtercate("top")}>Top Selling</h3>
                </div>
              </div>
              <div className="products">
                <div className="container">
                  {trendingProduct.map((curElm) => {
                    return (
                      <>
                        <div className="box">
                          <div className="img_box">
                            <img src={curElm.image} alt="" />
                            <div className="icon">
                              <div className="icon_box">
                                <FaEye />
                              </div>
                              <div className="icon_box">
                                <FaHeart />
                              </div>
                            </div>
                          </div>
                          <div className="info">
                            <h3>{curElm.Name}</h3>
                            <p>${curElm.price}</p>
                            <button
                              className="btn"
                              onClick={() => addtocart(curElm)}
                            >
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
                <button>Show More..</button>
              </div>
            </div>
            <div className="right_box">
              <div className="right_container">
                <div className="testimonial">
                  <div className="head">
                    <h3>Customer Review</h3>
                  </div>
                  <div className="detail">
                    <div className="img_box">
                      <img
                        src="image/review.webp"
                        alt="Review"
                        className="image1"
                      />
                    </div>
                    <div className="info">
                      <h3>stephan robot</h3>
                      <h4>web designer</h4>
                      <p>
                        Fantastic selection of electronics, competitive prices,
                        fast shipping, and excellent customer service. Highly
                        recommended!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="newsletter">
                  <div className="head">
                    <h3>NewsLetter</h3>
                  </div>
                  <div className="form">
                    <p>Join our Mailing List</p>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      autoComplete="off"
                    />
                    <button>Subscribe</button>
                    <div className="icon_box">
                      <div className="icon">
                        <a href="https://www.linkedin.com/in/saquib-khan-sa890098/">
                          {" "}
                          <FaLinkedin />
                        </a>
                      </div>
                      <div className="icon">
                        <a href="https://github.com/SAQUIB-KHAN90">
                          <FaGithub />
                        </a>
                      </div>
                      <div className="icon">
                        <a href="https://personal-portfolio1-gold.vercel.app/">
                          <FaUserAlt />
                        </a>{" "}
                      </div>
                      <div className="icon">
                        <a href="https://storage.googleapis.com/resume-hosting/66d867c7359c7.pdf">
                          <SiReaddotcv />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banners">
          <div className="container">
            <div className="left_box">
              <div className="box">
                <img src="image/Multi-Banner-1.avif" alt="banner" />
              </div>
              <div className="box">
                <img src="image/Multi-Banner-2.avif" alt="banner" />
              </div>
            </div>
            <div className="right_box">
              <div className="top">
                <img src="image/Multi-Banner-3.webp" alt=""></img>
                <img src="image/Multi-Banner-4.avif" alt=""></img>
              </div>
              <div className="bottom">
                <img src="image/Multi-Banner-5.webp" alt=""></img>
              </div>
            </div>
          </div>
        </div>
        <div className="product_type">
          <div className="container">
            <div className="box">
              <div className="header">
                <h2>New Product</h2>
              </div>
              {newProduct.map((curElm) => {
                return (
                  <>
                    <div className="productbox">
                      <div className="img-box">
                        <img src={curElm.image} alt="" />
                      </div>
                      <div className="detail">
                        <h3>{curElm.Name}</h3>
                        <p>$ {curElm.price}</p>
                        <div className="icon">
                          <button>
                            <FaEye />
                          </button>
                          <button>
                            <FaHeart />
                          </button>
                          <button onClick={() => addtocart(curElm)}>
                            <TiShoppingCart />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="box">
              <div className="header">
                <h2>Featured Product</h2>
              </div>
              {featuredProduct.map((curElm) => {
                return (
                  <>
                    <div className="productbox">
                      <div className="img-box">
                        <img src={curElm.image} alt="" />
                      </div>
                      <div className="detail">
                        <h3>{curElm.Name}</h3>
                        <p>$ {curElm.price}</p>
                        <div className="icon">
                          <button>
                            <FaEye />
                          </button>
                          <button>
                            <FaHeart />
                          </button>
                          <button onClick={() => addtocart(curElm)}>
                            <TiShoppingCart />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="box">
              <div className="header">
                <h2>Top Product</h2>
              </div>
              {topProduct.map((curElm) => {
                return (
                  <>
                    <div className="productbox">
                      <div className="img-box">
                        <img src={curElm.image} alt="" />
                      </div>
                      <div className="detail">
                        <h3>{curElm.Name}</h3>
                        <p>$ {curElm.price}</p>
                        <div className="icon">
                          <button>
                            <FaEye />
                          </button>
                          <button>
                            <FaHeart />
                          </button>
                          <button onClick={() => addtocart(curElm)}>
                            <TiShoppingCart />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
