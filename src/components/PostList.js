import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function PostList(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.postList.map((post) =>
        <Post
          title={post.title}
          userName={post.userName}
          thoughts={post.thoughts}
          postTime={post.postTime}
          // onVendInventory={props.onVendInventory}
          // onRestockInventory={props.onRestockInventory}
          onPostSelect={props.onPostSelect}
          id={post.id}
          key={post.id}/>
      )}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.array,
  // onVendInventory: PropTypes.func,
  // onRestockInventory: PropTypes.func,
  onPostSelect: PropTypes.func
};

export default PostList;