import React, { Component } from "react";
import "../style/style.css";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      currentDate: new Date().toLocaleDateString(),
      showUserData: false,
    };
    this.emailRef = React.createRef();
  }

  componentDidMount() {
    this.emailRef.current.focus();
  }

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  showData = (event) => {
    event.preventDefault();
    this.setState({ showUserData: true });
  };

  render() {
    return (
      <div>
        <h1>Sign Up Page</h1>
        <form>
          <label>Email:</label>
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleEmail}
            ref={this.emailRef}
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePassword}
          />
          <br />
          <button type="button" onClick={this.showData}>
            Show Data
          </button>
        </form>

        {this.state.showUserData && (
          <div>
            <h2>Hi, New User</h2>
            <p>Your email is: {this.state.email}</p>
            <p>You signed up on: {this.state.currentDate}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Signup;
