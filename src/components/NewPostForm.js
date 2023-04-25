import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types"; 
import ReusableForm from "./ReusableForm";

function NewPostForm(props){

  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    let date = new Date();
    props.onNewPostCreation({
      title: event.target.title.value, 
      userName: event.target.userName.value, 
      thoughts: event.target.thoughts.value, 
      postTime: date.getHours() + ":" + date.getMinutes()  + " " + (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear(),
      id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewPostFormSubmission}
        className="btn btn-light" buttonText="Save" />
    </React.Fragment>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;