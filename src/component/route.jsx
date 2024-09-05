import React from "react";
import { Routes, Route } from "react-router";
import Home from "./Home";
import Shop from "./shop";
import Cart from "./cart";
import Contact from "./Contact";
import About from "./About";
const Rout = ({ shop, Filter, allcatefilter, addtocart, cart, setCart }) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home addtocart={addtocart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route
          path="shop"
          element={
            <Shop
              shop={shop}
              Filter={Filter}
              allcatefilter={allcatefilter}
              addtocart={addtocart}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default Rout;
