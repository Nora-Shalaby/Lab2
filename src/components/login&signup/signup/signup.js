import "../../style.css";
import { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <div>
        <h1>Sign Up Page</h1>
        <form>
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
export default Signup;
