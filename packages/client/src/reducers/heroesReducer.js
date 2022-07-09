import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  error: null,
  heroes: [],
};

const heroesReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ACTION_TYPES.CREATE_HERO_REQUEST:
    case ACTION_TYPES.GET_HEROES_REQUEST: {
      return { ...state, isFetching: true, error: null };
    }
    case ACTION_TYPES.CREATE_HERO_SUCCESS: {
      const { data } = action;
      const { heroes } = state;
      return { ...state, isFetching: false, heroes: [...heroes, data] };
    }
    case ACTION_TYPES.GET_HEROES_SUCCESS: {
      const { data } = action;

      return { ...state, isFetching: false, heroes: [...data] };
    }
    case ACTION_TYPES.CREATE_HERO_ERROR:
    case ACTION_TYPES.GET_HEROES_ERROR: {
      const { err } = action;
      return { ...state, isFetching: false, error: err };
    }
    default:
      return state;
  }
};

export default heroesReducer;
