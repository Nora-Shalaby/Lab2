import React, { Component } from "react";
import "./stylecounter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cnt: 1,
    };
  }

  decrement = () => {
    if (this.state.cnt > 1) {
      this.setState({ cnt: this.state.cnt - 1 });
    }
  };

  increment = () => {
    this.setState({ cnt: this.state.cnt + 1 });
  };

  render() {
    return (
      <div className="counter-container">
        <button onClick={this.decrement}>-</button>
        <span>{this.state.cnt}</span>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default Counter;
