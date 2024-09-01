import React, { useState } from "react";
import "./SignUpFormStyle.css";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, username, password });
  };

  return (
    <div className="signup-container">
      <div className="left">
        <div className="fram5">
          <div className="fram8">
            <h1>Welcome to Design Community</h1>
            <p>Already have an account? Log in</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="txtfield">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="txtfield">
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="password">
              <div className="txtfield">
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" id="subscribe" />
              <p>
                I want to receive emails about the product, feature updates,
                events, and marketing promotions.
              </p>
              <p>
                By creating an account, you agree to the Terms of use and
                Privacy Policy.
              </p>
            </div>
            <div className="bttnframe">
              <button type="submit">Create an account</button>
              <p>Already have an account? Log in</p>
            </div>
          </form>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default SignUpForm;
