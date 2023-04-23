import React, { useState } from "react";
import "../styles/Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usePasswordToggle from "../context/usePasswordToggle";

function Login() {
    return (
        <div className="split-screen">
            <LoginLeftSide />
            <LoginRightSide />
        </div>

  );
}

function LoginLeftSide() {
    return (
        <div className="left-login">
            <div className="quote-login">
                <h1>Explore Your Potentiality </h1>
                <h2><em>" A goal without a plan is only a dream ".</em></h2>
                <p>Over 1000 reasons to give up, <br/> but the one reason to drive we go.  </p>
            </div>
        </div>
    )
}

function LoginRightSide() {
    const [passwordInputType, ToggleIcon] = usePasswordToggle();

    return (
        <div className="right-login">
            <form>
                <div className="login-header">
                    <h2>LOG IN</h2>
                </div>
                <div className="input-container-username">
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Username" required/>
                </div>
                <div className="input-container-password">
                    <label for="password">Password</label>
                    <input type={passwordInputType} name="password" id="password" placeholder="Must be at least 6 characters" required/>
                    <span className="password-toggle-icon">{ToggleIcon}</span>
                </div>
                <div className="input-container-cta">
                    <label className="checkbox-container">
                            <input type="checkbox" id="checkbox"/>
                            <span className="checkmark"></span>
                            Remember me
                    </label>
                </div>
                    <button className="login-btn" type="submit">Log In</button>
                <div className="copy legal">
                        <p><span className="forgotPassword"><a href="#">Forgotten password?</a></span></p>
                </div>
            </form>
        </div>
    )
}

export default Login;
