import React from "react";
import "./Header.css";
import amazonLogo from "../../images/amazon-logo.svg";
import searchIcon from "../../images/search.svg";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={amazonLogo} alt="amazon logo" style={{ width: "100px" }} />
      </div>
      <div>
        <h5>
          Deliver to <span>Nigeria</span>
        </h5>
      </div>
      <div className="header__search">
        <select>
          <option>All</option>
          <option>Books</option>
          <option>Electronics</option>
          <option>Computers</option>
          <option>Home</option>
          <option>Appliances</option>
          <option>Health</option>
          <option>Beauty</option>
        </select>
        <input type="text" />
        <button className="header__search__icon">
          <img
            src={searchIcon}
            alt="search icon"
            style={{ width: "20px", height: "20px" }}
          />
        </button>
      </div>
      <div className="header__language">
        <select>
          <option>EN</option>
          <option>FR</option>
          <option>DE</option>
          <option>IT</option>
          <option>ES</option>
        </select>
      </div>
      <div className="header__account">
        <h5>Hello, Sign in</h5>
        <h6>Account & Lists</h6>
      </div>
      <div className="header__returns">
        <h5>Returns</h5>
        <h6>& Orders</h6>
      </div>
      <div className="header__cart">
        <h5>Cart</h5>
      </div>
    </div>
  );
}

export default Header;
