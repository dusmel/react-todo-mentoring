import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';
import initialState from '../initialStates';

const store = createStore(combineReducers(reducers), initialState, composeWithDevTools());

export default store;
