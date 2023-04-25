import postListReducer from '../../reducers/post-list-reducer';

describe('postListReducer', () => {
  
  let action;

  const currentState = {
    1: {
      title: 'First Forum Post!',
      userName: 'epicodusStar',
      thoughts: 'Redux action is not working correctly.',
      postTime: '420',
      id: 1
    }, 2: {
      title: 'Second Post Ever!',
      userName: 'codingWizard',
      thoughts: 'Reducer has side effects',
      postTime: '555',
      id: 2
    }
  }

  const postData = {
    title: 'How do I learn how to code?',
    userName: 'n00bie',
    thoughts: 'Redux action is not working correctly.',
    postTime: '600',
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new post data to mainPostList', () => {
    const { title, userName, thoughts, postTime, id } = postData;
    action = { 
      type: 'ADD_POST',
      title: title,
      userName: userName,
      thoughts: thoughts,
      postTime: postTime,
      id: id
    };

    expect(postListReducer({}, action)).toEqual({
      [id] : {
        title: title,
        userName: userName,
        thoughts: thoughts,
        postTime: postTime,
        id: id
      }
    });
  });
  
  test('Should successfully delete a post', () => {
    action = {
      type: 'DELETE_POST',
      id: 1
    };
    expect(postListReducer(currentState, action)).toEqual({
      2: {
        title: 'Second Post Ever!',
      userName: 'codingWizard',
      thoughts: 'Reducer has side effects',
      postTime: '555',
      id: 2     
      }
    });
  });

});