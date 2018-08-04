import React, { Component } from "react";
import { Button } from 'antd';

import handleChange from "../utils/mixins/handleChange";
// import {createPost} from '../actions';

export default class NewPost extends Component {
  constructor(props)
  {
    super(props);
    this.state = { title: "", body: "", formError: false };
    this.handleChange = handleChange.bind(this) // mixin
  }
  // handleInputChange=(e=>{
  //   this.validationForm(e);
  //   this.setState({
  //     [e.target.name]:e.target.value
  //   });
  // })

  validationForm = e => {
    if (this.state.formError && e.target.value && e.target.value.length > 10)
      return false;
    if (e.target.value && e.target.value.length > 10) {
      e.target.className = e.target.className + " form-item-error";
      this.setState({ formError: true });
    } else {
      e.target.className = "form-control";
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.formError) return false;
    if (this.state.title.trim() && this.state.body.trim()) {
      console.log(this.state);
      // createPost(this.state);
      this.props.onAddPost(this.state);
      this.handleReset();
    }
  };
  handleReset = e => {
    this.setState({
      title: "",
      body: ""
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Title"
              className="form-control"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>
          <div className="form-group">
            <textarea
              cols="19"
              rows="8"
              placeholder="Body"
              className="form-control"
              name="body"
              onChange={this.handleChange}
              value={this.state.body}
            />
          </div>
          <div className="form-group">
            <Button type="primary" htmlType="submit">
              Add Post
            </Button>&nbsp;&nbsp;
            <Button
              type="default"
              onClick={this.handleReset}
            >
              Reset
            </Button>
          </div>
        </form>
      </div>
    );
  }
}