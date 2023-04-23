import React, { useState } from "react";
import "../styles/Signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usePasswordToggle from "../context/usePasswordToggle";

function Login() {
    return (
        <div className="#">
        </div>

  );
}

function LoginLeftSide() {
    return (
        <div className="left-signup">
            <div className="quote-signup">
            <h1>Explore Your Potentiality </h1>
                <h2><em>" A goal without a plan is only a dream ".</em></h2>
                <p>Over 1000 reasons to give up, <br/> but the one reason to drive we go.</p>
            </div>
        </div>
    )
}

function LoginRightSide() {

    const [passwordInputType, ToggleIcon] = usePasswordToggle();


    return (
        <div class="split-screen">
        <div class="left-login">
            <div class="quote-login">
                <h1>Explore Your Potentiality </h1>
                <h2><em>" A goal without a plan is only a dream ".</em></h2>
                <p>Over 1000 reasons to give up, <br/> but the one reason to drive we go.  </p>
            </div>
        </div>

        <div class="right-login">
            <form>
                <div class="login-header">
                    <h2>LOG IN</h2>
                </div>
                <div class="input-container username">
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Username" required/>
                </div>
                <div class="input-container password">
                    <label for="password">Password</label>
                    <input type={passwordInputType} name="password" id="password" placeholder="Must be at least 6 characters" required/>
                    <i className="password-toggle-icon">{ToggleIcon}</i>
                </div>
                <div class="input-container-cta">
                    <label class="checkbox-container">
                        <nbsp/>
                            <input type="checkbox" id="checkbox"/>
                            <span class="checkmark"></span>
                            Remember me
                    </label>
                </div>
                    <button class="login-btn" type="submit">Log In</button>
                <div class="copy legal">
                        <p><span class="forgotPassword"><a href="#">Forgotten password?</a></span></p>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Login;
