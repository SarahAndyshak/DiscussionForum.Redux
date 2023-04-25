import * as actions from './../../actions';

describe('Discussion Forum actions', () => {

  it('deletePost should create DELETE_POST action', () => {
    expect(actions.deletePost(1)).toEqual({
      type: 'DELETE_POST',
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it('addPost should create ADD_POST action', () => {
    expect(actions.addPost({
      type: 'ADD_POST',
      title: 'Second Post Ever!',
      userName: 'codingWizard',
      thoughts: 'Reducer has many frustrating effects',
      postTime: '555',
      id: 1    
    })).toEqual({
      type: 'ADD_POST',
      title: 'Second Post Ever!',
      userName: 'codingWizard',
      thoughts: 'Reducer has many frustrating effects',
      postTime: '555',
      id: 1    
    });
  });

});