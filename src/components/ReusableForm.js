import React from "react";
import PropTypes from "prop-types";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

export default function ReusableForm(props) {
  return (
    <React.Fragment>
      <Row>
          <Col>
      <form onSubmit={props.formSubmissionHandler}>
        <Form.Control
          type='text'
          name='title'
          required='required'
          placeholder='Title' /><br />
          <Form.Control
          type='text'
          name='userName'
          required='required'
          placeholder='user name' /><br />
          <Form.Control
          type='text'
          name='thoughts'
          required='required'
          placeholder='What\`s up?' /><br />
          <Form.Control
          type='string'
          name='postTime'
          required='required'
          placeholder='' /><br />
        <button className="btn btn-light" type='submit'>{props.buttonText}</button>
      </form>
      </Col>
      </Row>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};