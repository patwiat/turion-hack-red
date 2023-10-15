
import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="transparent-box">
        <p className="login-text">Login</p>
        <p className="subtext">Explore the galaxy with us.</p>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Next</button>
        </form>
      </div>
    </div>

  );
};

export default Login;