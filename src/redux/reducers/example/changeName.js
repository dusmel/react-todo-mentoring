import {
  CHANGE_NAME_START,
  CHANGE_NAME_ERROR,
  CHANGE_NAME_SUCCESS,
} from 'redux/action-types/example/name';

export default (state, { type, payload }) => {
  switch (type) {
    case CHANGE_NAME_START:
      return {
        ...state,
        name: {
          ...state.name,
          loading: true,
          error: null,
        },
      };
    case CHANGE_NAME_ERROR:
      return {
        ...state,
        name: {
          ...state.name,
          error: payload,
          loading: false,
        },
      };
    case CHANGE_NAME_SUCCESS:
      return {
        ...state,
        name: {
          currentName: payload,
          loading: false,
          error: null,
        },
      };
    default:
      return null;
  }
};
