import React, { Component } from 'react';

// import {createPost} from '../actions';

export default class NewPost extends Component {
  state = { title:'',body:'',formError:false };
  handleInputChange=(e=>{
    this.validationForm(e);
    this.setState({
      [e.target.name]:e.target.value
    });
  })

  validationForm=((e)=>
  {
    if(this.state.formError && e.target.value&&e.target.value.length>10) return false;
    if(e.target.value&&e.target.value.length>10)
    {
      e.target.className=e.target.className+" form-item-error";
      this.setState({"formError":true});
    }
    else
    {
      e.target.className="form-control";
    }
  })

  handleSubmit=(e=>{
    e.preventDefault();
    
    if(this.state.formError) return false;
    if(this.state.title.trim()&&this.state.body.trim())
    {
      console.log(this.state);
      // createPost(this.state);
      this.props.onAddPost(this.state);
      this.handleReset();
    }
  })
  handleReset=(e=>{
    this.setState({
      title:'',
      body:''
    });
  })
  render() {
    return (
      <div>
      <form onSubmit={ this.handleSubmit }>
      <div className="form-group">
          <input
          type="text"
          placeholder="Title"
          className="form-control"
          name="title"
          onChange={ this.handleInputChange }
          value={ this.state.title }
        />
      </div>
      <div className="form-group">
        <textarea
          cols="19"
          rows="8"
          placeholder="Body"
          className="form-control"
          name="body"
          onChange={ this.handleInputChange }
          value={ this.state.body }>
        </textarea>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">Add Post</button>&nbsp;&nbsp;
        <button type="button" className="btn btn-warning" onClick={ this.handleReset }>
          Reset
        </button>
      </div>
    </form>
  </div>
    );
  }
}