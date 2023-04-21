import React from "react";
import "../styles/Signup.css";


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

    let eyeicon = document.getElementById("show-password");
    let eyeicon2 = document.getElementById("hide-password");
    let password = document.getElementById("password");

    //  eyeicon.onclick = function(){
    //     if(password.type == "password"){
    //         password.type = "text";
    //         eyeicon.style.disply = "block";
    //         eyeicon2.style.display = "none";
    //     } else { 
    //         password.type = "password";
    //         eyeicon.style.disply = "none";
    //         eyeicon2.style.display = "block";
    //     }
    // }

    // let eyeicon3 = document.getElementById("show-password2");
    // let eyeicon4 = document.getElementById("hide-password2");
    // let password2 = document.getElementById("cpassword");

    // eyeicon3.onclick = function(){
    //     if(password2.type == "password"){
    //         password2.type = "text";
    //         eyeicon3.style.display = "block";
    //         eyeicon4.style.display = "none";
    //     } else { 
    //         password2.type = "password";
    //         eyeicon3.style.display = "none";
    //         eyeicon4.style.display = "block";
    //     }
    // }

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
                <div className="input-container gender">
                    <label for="gender">Gender</label>
                    <select name="gender" id="gender" required>
                        <option value="" disabled selected hidden>Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Prefernottosay">Prefer not to say</option>
                    </select>
                </div>
                <div className="input-container email">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Email address" required/>
                </div>
                <div className="input-container username">
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Username" required/>
                </div>
                <div className="input-container password">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Must be at least 6 characters" required/>
                    <i className="fa-solid fa-eye-slash" id="hide-password"></i>
                    <i className="fa-solid fa-eye" id="show-password"></i>
                </div>
                <div className="input-container password">
                    <label for="cpassword">Confirm Password</label>
                    <input type="password" name="cpassword" id="cpassword" placeholder="Must be at least 6 characters" required/>
                    <i className="fa-solid fa-eye-slash" id="hide-password2"></i>
                    <i className="fa-solid fa-eye" id="show-password2"></i>
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
