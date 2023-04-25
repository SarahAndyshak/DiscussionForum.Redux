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
          onPostSelection={props.onPostSelection}
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
  onPostSelection: PropTypes.func
};

export default PostList;