import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-top">
      <span>World-Tour</span>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Package</a>
        </li>
        <li>
          <a href="#">Tour</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
