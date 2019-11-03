import React from "react";
import { Link } from "react-router-dom";
import {profileIcon, cartIcon} from "../icons.js";
import "./header.css";

const Header = () => {
    return (
      <div className = "header">
        <Link to ={"/"}>
          <img className="header_logo" src="/images/warframe.jpg"/>
        </Link>
        <div className="header_buttons">
          <Link className={"header_button"} to={"/login"}>
            <img src = {profileIcon} />
            <div className={"header_button-text"}>Login/<br/>Register</div>
          </Link>
          <div className={"header_button"}>
            <img src ={cartIcon} style={{height: 35}}/>
            <div className={"header_button-text"}>Cart</div>
          </div>
        </div>
      </div>
    );
  };

  export default Header;