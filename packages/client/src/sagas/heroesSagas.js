import { put } from 'redux-saga/effects';
import {
  createHeroError,
  createHeroRequest,
  createHeroSuccess,
  getHeroesError,
  getHeroesRequest,
  getHeroesSuccess,
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
