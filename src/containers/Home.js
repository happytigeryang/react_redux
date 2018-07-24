import React, { Component } from "react";

export default class Home extends Component {
  state = {};
  componentWillMount() {
    alert("Private home is at: " + this.props.location.pathname);
  }
  render() {
    return <button onClick={this.props.logout}>Logout Here!</button>;
  }
}
