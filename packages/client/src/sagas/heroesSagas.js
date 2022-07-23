import { put } from 'redux-saga/effects';
import {
  createHeroError,
  createHeroRequest,
  createHeroSuccess,
  deleteHeroError,
  deleteHeroRequest,
  deleteHeroSuccess,
  getHeroesError,
  getHeroesRequest,
  getHeroesSuccess,
  updateHeroError,
  updateHeroRequest,
  updateHeroSuccess,
} from '../actions/actionCreators';
import * as api from './../api';

export function * createHeroSaga ({ data: newHero }) {
  yield put(createHeroRequest());
  try {
    const {
      data: { data },
    } = yield api.createHero(newHero);
    yield put(createHeroSuccess(data));
  } catch (err) {
    yield put(createHeroError(err));
  }
}

export function * getHeroesSaga () {
  yield put(getHeroesRequest());
  try {
    const {
      data: { data },
    } = yield api.getHeroes();
    yield put(getHeroesSuccess(data));
  } catch (err) {
    yield put(getHeroesError(err));
  }
}

export function * updateHeroSaga (values) {
  yield put(updateHeroRequest());
  try {
    const {
      data: { data },
    } = yield api.updateHero(values);
    yield put(updateHeroSuccess(data));
  } catch (err) {
    yield put(updateHeroError(err));
  }
}

export function * deleteHeroSaga ({ id }) {
  yield put(deleteHeroRequest());
  try {
    yield api.deleteHero(id);
    yield put(deleteHeroSuccess(id));
  } catch (err) {
    yield put(deleteHeroError(err));
  }
}
