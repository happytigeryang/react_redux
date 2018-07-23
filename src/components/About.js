import React, { Component } from "react";

export default class About extends Component {
  state = { Version: "1.0" };
  render() {
    return (
      <div>
        <h5>Current Version:</h5>
        <h4>{this.state.Version}</h4>
      </div>
    );
  }
}
