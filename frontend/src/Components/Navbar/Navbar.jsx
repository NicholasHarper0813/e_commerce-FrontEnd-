import React from "react";
import "./Navbar.css";
import logo from "../Asset/R.png";
import cart_icon from "../Asset/cart_icon.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>CLOTHEX </p>
      </div>
      <ul className="nav-menu">
        <li>
          <Link className="link" to="/">
            Shop
          </Link>
        </li>
        <li>
          <Link className="link" to="/mens">
            Men
          </Link>
        </li>
        <li>
          <Link className="link" to="/womens">
            Women
          </Link>
        </li>
        <li>
          <Link className="link" to="/kids">
            Kids
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
