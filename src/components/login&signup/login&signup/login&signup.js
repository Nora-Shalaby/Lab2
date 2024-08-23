import { Component } from "react";
import Login from "../login/login";
import Signup from "../signup/signup";
import "../style/style.css";

class Login_Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
    };
  }

  viewLogin = () => {
    this.setState({ login: true });
  };

  viewSignup = () => {
    this.setState({ login: false });
  };

  render() {
    return (
      <div>
        {this.state.login ? <Login /> : <Signup />}
        <button onClick={this.viewLogin}>Login</button>
        <button onClick={this.viewSignup}>Signup</button>
      </div>
    );
  }
}

export default Login_Signup;
