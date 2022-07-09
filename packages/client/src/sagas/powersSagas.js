import { put } from 'redux-saga/effects';
import {
  getPowersError,
  getPowersRequest,
  getPowersSuccess,
} from '../actions/actionCreators';
import * as api from './../api';

export function * getPowersSaga () {
  yield put(getPowersRequest());
  try {
    const {
      data: { data },
    } = yield api.getPowers();
    yield put(getPowersSuccess(data));
  } catch (err) {
    yield put(getPowersError(err));
  }
}
