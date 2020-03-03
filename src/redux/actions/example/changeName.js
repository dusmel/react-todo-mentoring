import { CHANGE_NAME_SUCCESS } from 'redux/action-types/example/name';

export default name => dispatch => {
  dispatch({
    type: CHANGE_NAME_SUCCESS,
    payload: name,
  });
};
