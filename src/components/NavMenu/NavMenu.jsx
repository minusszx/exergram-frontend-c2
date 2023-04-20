import React from "react";

function NavMenu() {
  return (
      <div className="NavMenu-Container">
        <nav>
            <div class="left-nav">
                <div class="nav-logo-box">
                    <img class="logo" src="./asset/img/Logo1exergram.svg" alt="logoExergram"/>
                </div>
                <ul>
                    <li><a href="">FEED</a></li>
                </ul>
            </div>
            <ul class="right-nav">
                <li><a href="">ADD ACTIVITY</a></li>
                <li class="profile-btn">T</li>
            </ul>
        </nav>            
      </div>
  )
}

export default NavMenu;
