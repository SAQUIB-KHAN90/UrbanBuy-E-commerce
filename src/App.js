import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./component/nav";
import Rout from "./component/route";
import { Route } from "react-router-dom";
import Footer from "./component/footer";
import About from "./component/About";
import ShopProduct from "./component/Shop_products";
import HomeProduct from "./component/Home_products";

const App = () => {
  //ADD TO CART
  const [cart, setCart] = useState([]);
  //SHOP PAGE PRODUCT
  const [shop, setShop] = useState(ShopProduct);
  //SHOP SEARCH FILTER
  const [search, setSearch] = useState("");
  //SHOP CATEGORY FILTER
  const Filter = (x) => {
    const catefilter = HomeProduct.filter((product) => {
      return product.cat === x;
    });
    setShop(catefilter);
  };
  const allcatefilter = () => {
    setShop(ShopProduct);
  };
  //Shop Search Filter
  const searchlength = (search || []).length === 0;
  const searchproduct = () => {
    if (searchlength) {
      alert("Please Search Something !");
      setShop(ShopProduct);
    } else {
      const searchfilter = HomeProduct.filter((x) => {
        return x.cat === search;
      });
      setShop(searchfilter);
    }
  };
  //ADD TO CART
  const addtocart = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist) {
      alert("This product is alleardy added in cart");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert("Added To cart");
    }
  };
  // console.log(cart);

  return (
    <>
      <BrowserRouter>
        <Nav
          search={search}
          setSearch={setSearch}
          searchproduct={searchproduct}
        />
        <Rout
          setCart={setCart}
          cart={cart}
          shop={shop}
          Filter={Filter}
          allcatefilter={allcatefilter}
          addtocart={addtocart}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
