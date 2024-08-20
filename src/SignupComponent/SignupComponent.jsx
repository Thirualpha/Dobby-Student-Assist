import React from 'react'
import './SignupComponent.css';
const SignupComponent = () => {
  return (
    <div className="body">
      <div className="required-size-signup">
        <h3 className="login-heading">Sign-Up :)</h3>
        <div>
        <form>
        <div>
           

            <label>Name :- </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name Please..."
              required
            ></input>
          </div>
          <div>
            <label>Department :- </label>
            <select name='Dept' id='selectid' required>
                <option value="AIML">AGRI</option>
                <option value="AIML">AIML</option>
                <option value="AIML">AIDS</option>
                <option value="AIML">BME</option>
                <option value="AIML">CIVIL</option>
                <option value="AIML">CSE</option>
                <option value="AIML">CHEMICAL</option>
                <option value="AIML">ECE</option>
                <option value="AIML">EEE</option>
                <option value="AIML">E&I</option>
                <option value="AIML">IT</option>
                <option value="AIML">MECH</option>
                <option value="AIML">MED_ELECT</option>
            </select>
          </div>
          <div>
            <label>Login ID (Email):- </label>
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
              placeholder="Set Your Password..."
              required
            ></input>
          </div>
          <div>
            <label>Confirm Password :- </label>
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm it..."
              required
            ></input>
          </div>
          <button className="submit">SIgnUp..</button>
          </form>
        </div>
      </div>
    </div>
    
  )
}

export default SignupComponent