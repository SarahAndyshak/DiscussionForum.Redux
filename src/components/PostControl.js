import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainPostList: [],
      selectedPost: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPost: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleDeletingPost = (id) => {
    const newMainPostList = this.state.mainPostList.filter(post => post.id !== id);
    this.setState({
      mainPostList: newMainPostList,
      selectedPost: null
    });
  }

  handleAddingNewPostToList = (newPost) => {
    const newMainPostList = this.state.mainPostList.concat(newPost);
    this.setState({mainPostList: newMainPostList});
    this.setState({formVisibleOnPage: false});
  }

  handleChangingSelectedPost = (id) => {
    let selectedPost = this.state.mainPostList.filter(post => post.id === id)[0];
    this.setState({selectedPost: selectedPost});
  }

  // handleVendClick = (id) => {
  //   let selectedInventory = this.state.mainInventoryList.find(inventory => inventory.id === id);
  //   selectedInventory.quantity -= 1;
  //   const newMainInventoryList = this.state.mainInventoryList.map((inventory) => { return inventory.id === id ? selectedInventory : inventory});
  //   this.setState({mainInventoryList: newMainInventoryList});
  // }

  // handleRestockClick = (id, stock) => {
  //   let selectedInventory = this.state.mainInventoryList.find(inventory => inventory.id === id);
  //   selectedInventory.quantity += stock;
  //   const newMainInventoryList = this.state.mainInventoryList.map((inventory => { return inventory.id === id? selectedInventory : inventory}));
  //   this.setState({mainInventoryList: newMainInventoryList});
  // }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.selectedPost != null) {
      currentlyVisibleState = <PostDetail 
      post={this.state.selectedPost} 
      onClickingDelete={this.handleDeletingPost}
      />
      buttonText = "Return to Forum";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm onNewPostCreation={this.handleAddingNewPostToList}/>;
      buttonText = "Return to Forum"; 
    } else {
      currentlyVisibleState = <PostList 
      // post={this.state.selectedPost} 
      postList={this.state.mainPostList}
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

export default PostControl;