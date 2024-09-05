import React, { useState } from "react";
import "./LogInForm.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h2>Sign up</h2>
          <p>
            Don’t have an account? <a href="/signup">Sign up</a>
          </p>
        </div>

        <div className="social-login">
          <button className="facebook-login">
            <i className="fab fa-facebook-f"></i> Log in with Facebook
          </button>
          <button className="google-login">
            <i className="fab fa-google"></i> Log in with Google
          </button>
        </div>

        <div className="divider">
          <span>OR</span>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Your password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="form-footer">
            <a href="/forgot-password">Forgot your password?</a>
            <button type="submit">Log in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
