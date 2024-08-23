import { Component } from "react";
import "../../style.css";

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <form>
          <lable>name:</lable>
          <input type="text"></input>
          <br />
          <lable>email:</lable>
          <input type="email"></input>
          <br />
          <lable>password:</lable>
          <input type="password"></input>
        </form>
      </div>
    );
  }
}
export default Login;
