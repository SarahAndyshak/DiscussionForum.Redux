import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';

class PostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPost: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        selectedPost: null,
        editing: false,
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  };

  handleDeletingPost = (id) => {
    const { dispatch } = this.props;
    const action = a.deletePost(id);
    dispatch(action);
    this.setState({ selectedPost: null });
  };

  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const action = a.addPost(newPost);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  };

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.mainPostList[id];
    this.setState({ selectedPost: selectedPost });
  };

  handleDownVote = (vote) => {
    const { dispatch } = this.props;
    const action = a.downVote(vote);
    dispatch(action);
  };

  handleUpVote = (vote) => {
    const { dispatch } = this.props;
    const action = a.upVote(vote);
    dispatch(action);
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedPost != null) {
      currentlyVisibleState = (
        <PostDetail
          post={this.state.selectedPost}
          onClickingDelete={this.handleDeletingPost}
        />
      );
      buttonText = "Return to Forum";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewPostForm onNewPostCreation={this.handleAddingNewPostToList} />
      );
      buttonText = "Return to Forum";
    } else {
      currentlyVisibleState = (
        <PostList
          post={this.state.selectedPost}
          postList={this.props.mainPostList}
          onDownVote = { this.handleDownVote}
          onUpVote = {this.handleUpVote}
          onPostSelection={this.handleChangingSelectedPost}
        />
      );
      buttonText = "Add Post";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button className="btn btn-secondary" onClick={this.handleClick}>
          {buttonText}
        </button>
      </React.Fragment>
    );
  }
}

PostControl.propTypes = {
  //post: PropTypes.object,
  mainPostList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  // const { post } = state;
  // const postArray = Object.values(state.mainPostList);
  // const sortedPosts = postArray.sort((a, b) => b.vote - a.vote);

return {
    // post: sortedPosts, 
    mainPostList: state.mainPostList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;