import React, { Component } from "react";

export default class SignIn extends Component {
  state = { EmailAddress, Password };
  render() {
    return (
      <div className="row">
        <form>
          <h3>Sign in Page.</h3>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="input"
              name="EmailAddress"
              className="form-contrl"
              value="{this.state.EmailAddress}"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="input"
              name="EmailAddress"
              className="form-contrl"
              value="{{this.state.Password}}"
            />
          </div>
          <div className="form-group">
            <input type="button" value="Sign In" />
          </div>
        </form>
      </div>
    );
  }
}
