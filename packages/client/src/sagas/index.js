import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes';
import { createHeroSaga, getHeroesSaga, updateHeroSaga } from './heroesSagas';
import { getPowersSaga } from './powersSagas';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.GET_POWERS_ACTION, getPowersSaga);
  yield takeLatest(ACTION_TYPES.CREATE_HERO_ACTION, createHeroSaga);
  yield takeLatest(ACTION_TYPES.GET_HEROES_ACTION, getHeroesSaga);
  yield takeLatest(ACTION_TYPES.UPDATE_HERO_ACTION, updateHeroSaga);
}

export default rootSaga;
