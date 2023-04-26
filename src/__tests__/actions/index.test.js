import * as actions from './../../actions';
import * as c from '../../actions/ActionTypes';

describe('Discussion Forum actions', () => {

  it('deletePost should create DELETE_POST action', () => {
    expect(actions.deletePost(1)).toEqual({
      type: c.DELETE_POST,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('addPost should create ADD_POST action', () => {
    expect(actions.addPost({
      type: c.ADD_POST,
      title: 'Second Post Ever!',
      userName: 'codingWizard',
      thoughts: 'Reducer has many frustrating effects',
      postTime: '555',
      vote: 0,
      id: 1    
    })).toEqual({
      type: c.ADD_POST,
      title: 'Second Post Ever!',
      userName: 'codingWizard',
      thoughts: 'Reducer has many frustrating effects',
      postTime: '555',
      vote: 0,
      id: 1    
    });
  });

  it('downVote should create DOWN_VOTE action', () => {
    expect(actions.downVote(1)).toEqual ({
      type: c.DOWN_VOTE,
      id: 1    
    });
  });

  it('upVote should create UP_VOTE action', () => {
    expect(actions.upVote(1)).toEqual ({
      type: c.UP_VOTE,
      id: 1    
    });
  });

});