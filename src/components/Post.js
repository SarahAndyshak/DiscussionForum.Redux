import React from "react";
import PropTypes from "prop-types";

function Post(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.onPostSelection(props.id)}>
        <h2>{props.title} - {props.userName}</h2>
        <h4><em>{props.thoughts}</em></h4>
        <h4>{props.postTime}</h4>
        <h4>{props.vote}</h4>
    
        </div>
        <button className="btn btn-light" style={{ margin: '0 auto', width: '50%' }} onClick={() => props.onUpVote(props.id)}>UpVote Post</button> 
        <br /><br />
        <button
          className="btn btn-light" style={{ margin: '0 auto', width: '50%' }}
          onClick={() => props.onDownVote(props.id)}>DownVote Post</button>
        <hr />
    </React.Fragment>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  thoughts: PropTypes.string.isRequired,
  postTime: PropTypes.string,
  vote: PropTypes.number.isRequired,
  id: PropTypes.string,
  onPostSelection: PropTypes.func 
};

export default Post;


// const date = new Date();
// console.log(`Today is: ${format(date, 'DD.MM.YYYY HH:mm')}`);
// const currentDate = new Date();
// const timestamp = format(currentDate, 'yyyy-MM-dd HH:mm:ss');

// MyExampleComponent.propTypes = {

// there are many different types of propTypes. Here's how to define a few of the most common:

//   exampleArray: PropTypes.array,
//   exampleBoolean: PropTypes.bool,
//   exampleFunction: PropTypes.func,
//   exampleNumber: PropTypes.number,
//   exampleObject: PropTypes.object,
//   exampleString: PropTypes.string,
//   exampleSymbol: PropTypes.symbol,
//   exampleReactElement: PropTypes.element,

// we can declare that a prop is an array full of a specific type of entries:

// exampleArrayOfNumbers: PropTypes.arrayOf(PropTypes.number),
// exampleArrayOfStrings: PropTypes.arrayOf(PropTypes.string),

// We can also declare that a prop is an instance of a class:

//   exampleClassTypeProp: PropTypes.instanceOf(ExampleClassName),
// }