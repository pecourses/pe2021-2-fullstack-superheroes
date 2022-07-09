import ACTION_TYPES from './actionTypes';

export const getPowersAction = () => ({
  type: ACTION_TYPES.GET_POWERS_ACTION,
});

export const getPowersRequest = () => ({
  type: ACTION_TYPES.GET_POWERS_REQUEST,
});

export const getPowersSuccess = data => ({
  type: ACTION_TYPES.GET_POWERS_SUCCESS,
  data,
});

export const getPowersError = err => ({
  type: ACTION_TYPES.GET_POWERS_ERROR,
  err,
});

export const createHeroAction = data => ({
  type: ACTION_TYPES.CREATE_HERO_ACTION,
  data,
});

export const createHeroRequest = () => ({
  type: ACTION_TYPES.CREATE_HERO_REQUEST,
});

export const createHeroSuccess = data => ({
  type: ACTION_TYPES.CREATE_HERO_SUCCESS,
  data,
});

export const createHeroError = err => ({
  type: ACTION_TYPES.CREATE_HERO_ERROR,
  err,
});

export const getHeroesAction = () => ({
  type: ACTION_TYPES.GET_HEROES_ACTION,
});

export const getHeroesRequest = () => ({
  type: ACTION_TYPES.GET_HEROES_REQUEST,
});

export const getHeroesSuccess = data => ({
  type: ACTION_TYPES.GET_HEROES_SUCCESS,
  data,
});

export const getHeroesError = err => ({
  type: ACTION_TYPES.GET_HEROES_ERROR,
  err,
});
