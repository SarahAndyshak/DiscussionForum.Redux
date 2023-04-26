import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function PostList(props) {
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.postList).map((post) => (
        <Post
          title={post.title}
          userName={post.userName}
          thoughts={post.thoughts}
          postTime={post.postTime}
          vote={post.vote}
          onDownVote={props.onDownVote}
          onUpVote={props.onUpVote}
          onPostSelection={props.onPostSelection}
          id={post.id}
          key={post.id}
        />
      ))}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
  onDownVote: PropTypes.func,
  onUpVote: PropTypes.func,
  onPostSelection: PropTypes.func,
};

export default PostList;
