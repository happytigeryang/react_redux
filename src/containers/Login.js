import React, { Component } from "react";
export default class LoginContainer extends Component {
  state = {};
  render() {
    return <button onClick={this.props.login}>Login Here!</button>;
  }
}
