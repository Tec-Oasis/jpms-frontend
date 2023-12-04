import React from "react";
import Logo from "../images/propert.png";

import "./Login.css";
import Sso from "./SSO"

export default function Login() {
  return (
  <div>

    
    <div className="login-box">
      <a href="https://www.youtube.com" > <img className="sign" src={Logo} alt="Logo" /></a>
      <h2>Sign In</h2>
      <hr className="horizontal-line" />

      <form>
        <div className="user-box">

          <label className="head">Email</label>

          <input  type="text" name="" required />
        </div>

        <div className="user-box">
          <label className="head">Password</label>
          <input  type="password" name="" required />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr' }}>
          <div>
            Don't have a account?<a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">Signup</a>
          </div>
          <div>
            <button className="submit-button" type="submit">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Login
            </button>
            
          </div>
        </div>
        
        
        <button className="kkk">
          <Sso  className="dany"/> 
         </button>

      </form>
    </div>
  </div>
  );
}
