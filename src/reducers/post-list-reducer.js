import * as c from './../actions/ActionTypes';

const reducer = (state = {}, action) => {
  const { title, userName, thoughts, postTime, id } = action;
  switch (action.type){
  case c.ADD_POST:
    return Object.assign({}, state, {
    [id]: {
      title: title,
      userName: userName,
      thoughts: thoughts,
      postTime: postTime,
      vote: 0,
      id: id
      }
    });
    case c.DELETE_POST:
      let newState = { ...state };
      delete newState[id];
      return newState;
    
    case c.DOWN_VOTE:
      let newState1 = { ...state };
      newState1[id].vote -= 1;
      console.log(newState1);
      return newState1;
    
      default:
      return state;
  }
};

export default reducer;

//case c.DOWN_VOTE
//return {
//...state,
//state.posts.