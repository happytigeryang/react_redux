import {
  connect
} from 'react-redux';
import {
  createPost
} from '../actions';
import NewPost from '../components/NewPost';

const mapDispathToProps = dispatch => {
  return {
    onAddPost: post => {
      dispatch(createPost(post));
    }
  };
};

export default connect(null,mapDispathToProps)(NewPost);