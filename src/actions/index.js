// import { id } from "date-fns/locale";


export const deletePost = id => ({
  type: 'DELETE_POST',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addPost = (post) => {
  const { title, userName, thoughts, postTime, id } = post;
  return {
    type: 'ADD_POST',
    title: title,
    userName: userName,
    thoughts: thoughts,
    postTime: postTime,
    vote: 0,
    id: id
  }
};

export const downVote = id => ({
  type: 'DOWN_VOTE',
  id
});

export const upVote = id => ({
  type: 'UP_VOTE',
  id
});