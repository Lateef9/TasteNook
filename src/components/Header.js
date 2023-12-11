import { LOGO_URL } from "../Utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
   
  const [btnName,setbtnName] = useState("Login")

    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/about">About Us</Link> </li>
            <li> <Link to="/contact">Contact Us</Link></li>
            <li> <Link>Cart</Link></li>
            <button className="btnLogin"
                    onClick={() => {
                      btnName === "login" ? setbtnName("logout") : setbtnName("login")

                    }}
            >{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;