import React, { Component } from 'react';


import NewPost from './containers/CreatePost';
import PostList  from "./containers/PostList";

import './app.css';

const stylesApp = {
  marginTop: 40
}

class App extends Component {
  state = { posts:[] };

  componentDidMount()
  {
    // console.log(1);
    // fetchAllPost().then(posts => {
    //   this.setState({"posts":posts});
    //   console.log(posts);
    // })
    // .catch(error => {
    //   throw(error);
    // });
  
  }
  
  render() {
    
    console.log(2);
    return (
      <div className="container">
      <div className="row justify-content-md-center" style={ stylesApp }>
          <div className="col-md-6">
            <NewPost />
          </div>
          <div className="col-md-6">
            <PostList />
          </div>
      </div>
    </div>
    );
  }
}

export default App;
