import React from "react";

const Header = () => {
  return (
    <div className="header">
      <img className="header_logo" src="./images/warframe.jpg"/>
      <div className="header_buttons">
        <button>Login/Signup</button>
        <button>Cart</button>
      </div>
    </div>
  )
};


export default Header;
