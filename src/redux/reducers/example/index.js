import initialState from 'redux/initialStates';
import changeName from './changeName';

export default (state = initialState.example, action = {}) => ({
  ...state,
  ...changeName(state, action),
});
