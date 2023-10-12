

import React,{useState}from "react";
import "../../assets/scss/Header.scss";
import Menu from "../elements/Menu";
import Image from "../../assets/image/image";
import Searchnav from "../elements/Searchbar";
import { BsHeartFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fa";


const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [count, setCount] = useState(0);

  const handleRegistration = () => {
    navigate("/registration");
  };

  const handleWishList = () => {
    navigate("/wishlist");
  };

  const handleBasket = () => {
    navigate("/basket");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleAddToBasket = () => {
    setCount(count + 1); // sepete ürün eklendiğinde count artırılır
  };

  return (
    <div>
      <div className="header">
        <div className="container ">
          <nav className="d-flex justify-content-between align-items-center navheader">
            <div>
              <img
                className="mt-4 mainLogo"
                src={Image.Arazlogo}  onClick={() => {
                  navigate("/");
                }}
                alt=""
                style={{ width: "200px" , cursor:"pointer"}}
              />
            </div>
            <div></div>
            <div className="d-flex button-container">
              <Searchnav />
              {user ? (
                <div className="user-container">
                  <span>Salam, {user.username}</span>
                  <button onClick={handleLogout}>Çıxış</button>
                </div>
              ) : (
                <>
                  <button onClick={handleLogin}>Daxil ol</button>
                  <button onClick={handleRegistration}>Qeydiyyat</button>
                </>
              )}
              <button onClick={handleWishList} className="wishList">
                <BsHeartFill />
              </button>
              <div className="basketBtn">

                <button onClick={() => { handleAddToBasket(); handleBasket(); }} className="shoppingCard">
                  <AiOutlineShoppingCart />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Header;
