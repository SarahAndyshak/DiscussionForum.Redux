import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

const listStyles = {
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
}

function PostList(props) {

  return (
    <React.Fragment>
      <div style={listStyles}>
      {/* <Row>
        <Col md={4}> */}
        {/* <Card style={{ width: '30vw', backgroundColor: 'rgba(255, 0, 0, 0.3)', padding: '5'}}> */}
        <Card style={{ width: '30vw', backgroundColor: 'rgba(255, 0, 0, 0.3)', padding: '5'}}>
        {Object.values(props.postList).map((post) => 
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
            )}
            </Card>
          {/* </Col>
      </Row> */}
      </div>
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