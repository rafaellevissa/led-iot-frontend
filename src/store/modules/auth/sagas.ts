import type { Action, Auth } from './types';
import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from './consts';
import api from '../../../services/api';
import storage from 'redux-persist/lib/storage';


export function* login({ payload }: Action): Generator {
  try {
    const response: unknown = yield call(api.post, '/login', payload);

    const { data, status } = response as AxiosResponse<Auth>;

    if (status !== 200) {
      throw response;
    }

    yield put({
      type: ActionTypes.LOGIN_SUCCESS,
      payload: data,
    });

    window.location.reload()
  } catch (failed) {
    yield put({
      type: ActionTypes.LOGIN_FAILURE,
      payload: null,
    });
  }
}

export function* logout(): Generator {
  try {
    const response: unknown = yield call(api.post, '/logout');

    const { data, status } = response as AxiosResponse<{ revoked: boolean }>;

    if (status !== 200 || !data.revoked) {
      throw response;
    }

    storage.removeItem('persist:@rocketbank');

    yield put({ type: ActionTypes.LOGOUT_SUCCESS });
  } catch (failed) {
    yield put({ type: ActionTypes.LOGOUT_FAILURE });
  }
}

export default all([
  takeLatest(ActionTypes.LOGIN_REQUEST, login),
  takeLatest(ActionTypes.LOGOUT_REQUEST, logout),
]);
