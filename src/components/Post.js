import React, { Component } from 'react';

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '0  0 .75rem 0',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};

export default class post extends Component {
  
  constructor(props,context)
  {
    super(props,context);
    this.state = {
      post:this.props.post,
      onUpdatePost:this.props.onUpdate,
      onDelete:this.props.onDelete,
      isEditing: false
    };
  }

  onEdit=(id=>{
    this.setState({isEditing: true});
    console.log(id);
  })

  onSavePost=(post=>{
    this.setState({isEditing: false});
    debugger;
    this.state.onUpdatePost(post);
    console.log(post);
  })

  onCancelEditPost=(post=>{
    this.setState({isEditing: false});
  })

  handleInputChange=(e=>{
    const post=this.state.post;
    post[e.target.name]=e.target.value;

    this.setState({
      post:post
    });
    console.log(this.state);
  })
  render() {

    if(this.state.isEditing)
  {
    return (
    <div style={ styles }>
      <div className="form-group">
          <input
          type="text"
          placeholder="Title"
          className="form-control"
          name="title"
          onChange={ this.handleInputChange }
          value={ this.state.post.title }
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
          value={ this.state.post.body }>
        </textarea>
      </div>
      <button className="btn btn-info" type="button" onClick={()=>this.onSavePost(this.state.post)}>
        Save
      </button>
      &nbsp;&nbsp;
      <button className="btn btn-info" type="button" onClick={()=>this.onCancelEditPost(this.state.post)}>
        Cancel
      </button>
    </div>)
  }
  else
  {
    return (
      <div style={ styles }>
      <h2>{ this.state.post.title }</h2>
      <p>{ this.state.post.body }</p>
      <button className="btn btn-danger" type="button" onClick={()=>this.state.onDelete(this.state.post._id)}>
        Remove
      </button>
      &nbsp;&nbsp;
      <button className="btn btn-info" type="button" onClick={()=>this.onEdit(this.state.post._id)}>
        Edit
      </button>
    </div>
    );
  }
  }
}


// const onEdit=(id=>{
//   console.log(id);
// })
// export default ({ post: { title, body, _id },onDelete }) => {

//   return (
//     <div style={ styles }>
//       <h2>{ title }</h2>
//       <p>{ body }</p>
//       <button className="btn btn-danger" type="button" onClick={()=>onDelete(_id)}>
//         Remove
//       </button>
//       &nbsp;&nbsp;
//       <button className="btn btn-info" type="button" onClick={()=>onEdit(_id)}>
//         Edit
//       </button>
//     </div>
//   );
// };