import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  error: null,
  powers: [],
};

const powersReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ACTION_TYPES.GET_POWERS_REQUEST: {
      return { ...state, isFetching: true, error: null };
    }
    case ACTION_TYPES.GET_POWERS_SUCCESS: {
      const { data } = action;
      return { ...state, isFetching: false, powers: data };
    }
    case ACTION_TYPES.GET_POWERS_ERROR: {
      const { err } = action;
      return { ...state, isFetching: false, error: err };
    }
    default:
      return state;
  }
};

export default powersReducer;
