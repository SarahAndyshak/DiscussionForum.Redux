import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // formVisibleOnPage: false,
      // mainPostList: [],
      selectedPost: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        // formVisibleOnPage: false,
        selectedPost: null,
        editing: false
      });
    } else {
      // this.setState(prevState => ({
      //   formVisibleOnPage: !prevState.formVisibleOnPage,
      // }));
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
  }

  handleDeletingPost = (id) => {
    // const newMainPostList = this.state.mainPostList.filter(post => post.id !== id);
    // this.setState({
    //   mainPostList: newMainPostList,
    //   selectedPost: null
    // });
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_POST',
      id: id
    }
    dispatch(action);
    this.setState({selectedPost: null});
  }

  handleAddingNewPostToList = (newPost) => {
    // const newMainPostList = this.state.mainPostList.concat(newPost);
    // this.setState({mainPostList: newMainPostList});
    // this.setState({formVisibleOnPage: false});
    const { dispatch } = this.props;
    const { id, title, userName, thoughts, postTime } = newPost;
    const action = {
      type: 'ADD_POST',
      id: id, 
      title: title, 
      userName: userName,
      thoughts: thoughts,
      postTime: postTime,
    }
    dispatch(action);
    // this.setState({formVisibleOnPage: false});
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleChangingSelectedPost = (id) => {
    // let selectedPost = this.state.mainPostList.filter(post => post.id === id)[0];
    // this.setState({selectedPost: selectedPost});
    const selectedPost = this.props.mainPostList[id];
    this.setState({selectedPost: selectedPost});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.selectedPost != null) {
      currentlyVisibleState = <PostDetail 
      post={this.state.selectedPost} 
      onClickingDelete={this.handleDeletingPost}
      />
      buttonText = "Return to Forum";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm onNewPostCreation={this.handleAddingNewPostToList}/>;
      buttonText = "Return to Forum"; 
    } else {
      currentlyVisibleState = <PostList 
      // post={this.state.selectedPost} 
      postList={this.props.mainPostList}
      // onVendInventory = { this.handleVendClick}
      // onRestockInventory = {this.handleRestockClick}
      onPostSelection={this.handleChangingSelectedPost} />;
      buttonText = "Add Post"; 
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button className="btn btn-secondary" onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }

}

PostControl.propTypes = {
  mainPostList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    mainPostList: state.mainPostList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;