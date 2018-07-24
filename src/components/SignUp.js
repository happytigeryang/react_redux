import React, { Component } from "react";

export default class SignUn extends Component {
  state = { EmailAddress, Password };
  render() {
    return (
      <div className="row">
        <h3>Sign Up Page.</h3>
        <form>
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
            <input type="button" value="Sign up" />
          </div>
        </form>
      </div>
    );
  }
}
