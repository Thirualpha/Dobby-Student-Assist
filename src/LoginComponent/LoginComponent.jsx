import React from "react";
import "./LoginComponent.css";


const LoginComponent = () => {
  return (
    <div className="body">
      <div className="required-size">
        {/* <p> Sized box </p> */}
        <h3 className="login-heading">Log-In :)</h3>
        <form>
        <div>
            
          <div>
            <label>Login ID :- </label>
            <input
              type="text"
              name="loginid"
              placeholder="Your Login ID..."
              required
            ></input>
          </div>
          <div>
            <label>Password :- </label>
            <input
              type="password"
              name="password"
              placeholder="Your Password here..."
              required
            ></input>
          </div>
          <div className="anchortag">
            <a href="#" id="forgotpassword">
              forgot Password
            </a>
          </div>
          <button className="submit">LOGIn..</button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
