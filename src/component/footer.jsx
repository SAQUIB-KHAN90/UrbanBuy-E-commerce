import React from "react";
import {
  FaPiggyBank,
  FaShippingFast,
  FaHeadphonesAlt,
  FaWallet,
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="left-box">
            <div className="box">
              <div className="icon_box">
                <FaPiggyBank />
              </div>
              <div className="detail">
                <h3>Great Saving</h3>
                <p>
                  Unbeatable Deals, Unmatched Savings - Power Up Your Tech for
                  Less!
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon_box">
                <FaShippingFast />
              </div>
              <div className="detail">
                <h3>Free Delivery</h3>
                <p>
                  Tech to Your Doorstep – Enjoy Free Delivery on All Orders!
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon_box">
                <FaHeadphonesAlt />
              </div>
              <div className="detail">
                <h3>24X7 Support</h3>
                <p>
                  Tech Help Anytime, Anywhere – 24/7 Support for All Your Needs!
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon_box">
                <FaWallet />
              </div>
              <div className="detail">
                <h3>Money Back</h3>
                <p>Shop with Confidence – 100% Money-Back Guarantee!</p>
              </div>
            </div>
          </div>
          <div className="right_box">
            <div className="header">
              <img src="image/logo.webp" alt="" className="image2" />
              <p>
                Your Ultimate Tech Destination – Innovation, Savings,
                Satisfaction Guaranteed!
              </p>
            </div>
            <div className="bottom">
              <div className="box">
                <h3>Your Account</h3>
                <ul>
                  <li>About us</li>
                  <li>Account</li>
                  <li>Payment</li>
                  <li>sales</li>
                </ul>
              </div>
              <div className="box">
                <h3>products</h3>
                <ul>
                  <li>Delivery</li>
                  <li>Track Oder</li>
                  <li>New product</li>
                  <li>old product</li>
                </ul>
              </div>
              <div className="box">
                <h3>contact us</h3>
                <ul>
                  <li>Hyderabad,India</li>
                  <li>+919044500609</li>
                  <li>saquibkhan890098@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
