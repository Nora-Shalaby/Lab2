import React, { Component } from "react";
import "../style/style.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      currentDate: new Date().toLocaleDateString(),
      showData: false,
    };
    this.nameRef = React.createRef();
  }
  componentDidMount() {
    this.nameRef.current.focus();
  }
  handleName = (event) => {
    this.setState({ name: event.target.value });
  };
  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  };
  showData = (event) => {
    event.preventDefault();
    this.setState({ showData: true });
  };
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <form>
          <label>UserName:</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleName}
            ref={this.nameRef}
          ></input>
          <br />
          <label>Email:</label>
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleEmail}
          ></input>
          <br />
          <label>Password:</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePassword}
          ></input>
          <button onClick={this.showData}>Show Data</button>
        </form>
        {this.state.showData && (
          <div>
            <h2>Hi, {this.state.name}</h2>
            <p>Your email is: {this.state.email}</p>
            <p>You signed up on: {this.state.currentDate}</p>
          </div>
        )}
      </div>
    );
  }
}
export default Login;
