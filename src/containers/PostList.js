import React from 'react';
import { connect } from "react-redux";

import Post from '../components/Post';
import { updatePost,deletePost } from "../actions";

const PostList=({posts,onDelete,onUpdate})=>{
  if(!posts.length)
  {
    return (<div>No Posts</div>)
  }

  return (<div>
     {posts.map(post => {
        return (
          <Post post={ post } onDelete={ onDelete } onUpdate= {onUpdate } key={ post._id } />
        );
      })}
  </div>)
}

const mapStateToProps=state=>{
  return{
    posts:state.posts
  };
}

const mapDispatchToProps=dispatch=>{
  return {
    onDelete:id=>{
      dispatch(deletePost(id));
    },
    onUpdate:post=>{
      dispatch(updatePost(post));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostList);