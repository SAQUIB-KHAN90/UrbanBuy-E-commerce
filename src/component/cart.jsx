import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Modal from "./Modal";

const Cart = ({ cart, setCart }) => {
  const [showModal, setShowModal] = useState(false);

  const handlePayment = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      const totalAmount = cart.reduce(
        (price, item) => price + item.qty * item.price,
        0
      );
      const options = {
        key: "rzp_test_KzFvAEFZs5fits",
        amount: totalAmount * 100, //
        currency: "INR",
        name: "Your Store Name",
        description: "Test Transaction",
        handler: function (response) {
          alert(
            "Payment Successful! Payment ID: " + response.razorpay_payment_id
          );

          setCart([]);
          setShowModal(false);
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    };
    document.body.appendChild(script);
  };

  const handleBuyNow = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  //INCREASE QUANTITY
  const incqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exist, qty: exist.qty + 1 }
          : curElm;
      })
    );
  };

  //DECREASE QUANTITY
  const decqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exist, qty: exist.qty - 1 }
          : curElm;
      })
    );
  };

  // REMOVE PRODUCT
  const removeproduct = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist.qty > 0) {
      setCart(
        cart.filter((curElm) => {
          return curElm.id !== product.id;
        })
      );
    }
  };
  //TOTAL
  const total = cart.reduce((price, item) => price + item.qty * item.price, 0);

  return (
    <>
      <div className="cart">
        <h3>Cart</h3>
        {cart.length === 0 && (
          <>
            <div className="empty_cart">
              <h2>Your Shopping cart is empty😞</h2>
              <Link to="/shop">
                <button>Shop Now</button>
              </Link>
            </div>
          </>
        )}
        <div className="container">
          {cart.map((curElm) => {
            return (
              <>
                <div className="box">
                  <div className="img_box">
                    <img src={curElm.image} alt="" />
                  </div>
                  <div className="detail">
                    <div className="info">
                      <h4>{curElm.cat}</h4>
                      <h3>{curElm.Name}</h3>
                      <p>Price: ${curElm.price}</p>
                      <p>Total:${curElm.price * curElm.qty}</p>
                    </div>
                    <div className="quantity">
                      <button onClick={() => incqty(curElm)}>+</button>
                      <input type="number" value={curElm.qty} />
                      <button onClick={() => decqty(curElm)}>-</button>
                    </div>
                    <div className="icon">
                      <li onClick={() => removeproduct(curElm)}>
                        <AiOutlineClose />
                      </li>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="bottom">
          {cart.length > 0 && (
            <>
              <div className="Total">
                <h4>SubTotal:${total}</h4>
              </div>
              <button onClick={handleBuyNow}>Buy Now</button>
            </>
          )}
          {showModal && (
            <Modal
              handleCloseModal={handleCloseModal}
              handlePayment={handlePayment} // Pass handlePayment to modal
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
