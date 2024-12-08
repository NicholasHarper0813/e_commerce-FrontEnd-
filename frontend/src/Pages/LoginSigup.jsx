import React from "react";
import "./CSS/LoginSignup.css";

const LoginSigup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="logingsigup-login">
          Already have an account? <span>login here</span>
        </p>
        <div className="logingsigup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use of privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSigup;
