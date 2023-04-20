import React from "react";
import "./NavMenu.css";

function NavMenu() {
  return (
      <div className="navbar">
        <nav>
            <div className="left-nav">
                <div className="nav-logo-box">
                    <img className="logo" src="src\Images\Logo\Logo1.svg" alt="logoExergram"/>
                </div>
                <ul>
                    <li><a href="">DASHBOARD</a></li>
                    <li><a href="">FEED</a></li>
                </ul>
            </div>
            <div className="right-nav">
                <ul>
                    <li><a href="">ADD ACTIVITY</a></li>
                    <li className="profile-btn">T</li>
                </ul>
            </div>
        </nav>            
      </div>
  )
}

export default NavMenu;
