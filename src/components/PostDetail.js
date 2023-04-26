import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function PostDetail(props) {
  const { post, onClickingDelete } = props;

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm={5}>
            <br />
            <h2>Forum Post Details</h2>
            <br />
            <h3>
              <strong> Title:</strong> {post.title}
            </h3>
            <br />

            <li>
              <strong>User Name:</strong> {post.userName} 💬{" "}
              <strong>Time:</strong> {post.postTime}{" "}
            </li>
            <br />

            <li>
              <strong>Thoughts:</strong> {post.thoughts}
            </li>
            <br />

            <li>
              <strong>Votes:</strong> {post.vote}
            </li>
            <hr />
          </Col>

          <Col sm={7}></Col>
          <button
            className="btn btn-light"
            onClick={() => onClickingDelete(post.id)}
          >
            Delete Post
          </button>
          <hr />
        </Row>
      </Container>
    </React.Fragment>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
};

export default PostDetail;
