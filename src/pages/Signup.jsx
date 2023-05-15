import React, { useState } from "react";
import "../styles/Signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usePasswordToggle from "../context/usePasswordToggle";

function Signup() {
    return (
        <div className="split-screen">
            <SignupLeftSide />
            <SignupRightSide />
        </div>

  );
}

function SignupLeftSide() {
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

function SignupRightSide() {
    // const [passwordInputType, ToggleIcon] = usePasswordToggle();
    // const [passwordInputType2, ToggleIcon2] = usePasswordToggle();
    const [showPassword1 , setShowPassword1] = useState(false)
    const [showPassword2 , setShowPassword2] = useState(false)

    const handleShowPassword = (state, setStateFn) => {
        setStateFn(!state)
    }



    return (
        <div className="right-signup">
            <form>
                <div className="signup-header">
                    <h2>SIGN UP</h2>
                    <div className="signup-container">
                        <p>Already have an account? <a href="/Project/new/login.html"><strong>Log In</strong></a></p>
                    </div>
                </div>
                <div className="input-container fullname">
                    <div className="input-container fname">
                        <label for="fname">First Name</label>
                        <input type="text" name="fname" id="fname" placeholder="First name" required/>
                    </div>
                    <div className="input-container lname">
                        <label for="lname">Last Name</label>
                        <input type="text" name="lname" id="name" placeholder="Last name" required/>
                    </div>
                </div>
                <div className="input-container-dob-gender">
                    <div className="input-container-dob">
                        <label for="dob">Date of Birth </label>
                        <input type="date" name="dob" id="dob" required/>
                    </div>
                    <div className="input-container-gender">
                        <label for="gender">Gender</label>
                        <select name="gender" id="gender" required>
                            <option value="" disabled selected hidden>Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Prefernottosay">Prefer not to say</option>
                        </select>
                    </div>
                </div>
                <div className="input-container-email">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Email address" required/>
                </div>
                <div className="input-container-username">
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Username" required/>
                </div>
                <div className="input-container-password">
                    <label for="password">Password</label>
                    <input type={showPassword1 ? "text" : "password"} name="password" id="password" placeholder="Must be at least 6 characters" required/>
                    {/* <span className="password-toggle-icon">{ToggleIcon}</span> */}
                    {!showPassword1 ? <i className="fa-solid fa-eye-slash password-toggle-icon" onClick={() => handleShowPassword(showPassword1, setShowPassword1)}></i> : <i className="fa-solid fa-eye password-toggle-icon" onClick={() => handleShowPassword(showPassword1, setShowPassword1)}></i>
                }
                </div>
                <div className="input-container-password2">
                    <label for="cpassword">Confirm Password</label>
                    <input type={showPassword2 ? "text" : "password"} name="cpassword" id="cpassword" placeholder="Must be at least 6 characters" required/>
                    {/* <span className="password-toggle-icon2">{ToggleIcon2}</span> */}
                        

                    {!showPassword2 ? <i className="fa-solid fa-eye-slash password-toggle-icon2" onClick={() => handleShowPassword(showPassword2, setShowPassword2)}></i> : <i className="fa-solid fa-eye password-toggle-icon2" onClick={() => handleShowPassword(showPassword2, setShowPassword2)}></i>
                }
                    
                </div>
                <button className="signup-btn" type="submit">Sign Up</button>
                <div className="copy legal">
                    <p><span className="policy-terms">By continuing, you agree to accept our <br/> <a href="#">Privacy Policy</a> &amp; <a href="#">Terms of Service</a>.</span></p>
                </div>
            </form>
        </div>
    )
}

export default Signup;
