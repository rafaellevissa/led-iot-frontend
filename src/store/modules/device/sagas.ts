import type { Action, Device, Page, Paginated } from './types';
import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from './consts';
import api from '../../../services/api';

export function* add({ payload }: Action): Generator {
  try {
    const response: unknown = yield call(api.post, '/devices', payload);

    const { data, status } = response as AxiosResponse<Device>;

    if (status !== 200) {
      throw response;
    }

    yield put({
      type: ActionTypes.DEVICE_ADD_SUCCESS,
      payload: data,
    });

    window.location.reload()
  } catch (failed) {
    yield put({
      type: ActionTypes.DEVICE_ADD_FAILURE,
      payload: null,
    });
  }
}

export function* find({ payload }: Action): Generator {
  try {
    const response: unknown = yield call(api.get, '/devices/' + payload);

    const { data, status } = response as AxiosResponse<Device>;

    if (status !== 200) {
      throw response;
    }

    yield put({
      type: ActionTypes.DEVICE_FIND_SUCCESS,
      payload: data,
    });
  } catch (failed) {
    yield put({
      type: ActionTypes.DEVICE_FIND_FAILURE,
      payload: null,
    });
  }
}

export function* list({ payload }: Action): Generator {
  try {
    const request = payload as Page;
    const url = request.currentPage ?
      `/devices?page=${request.currentPage + 1}&perPage=${request.perPage}` :
      '/devices';

    const response: unknown = yield call(api.get, url);

    const { data, status } = response as AxiosResponse<Paginated<Device>>;

    if (status !== 200) {
      throw response;
    }

    yield put({
      type: ActionTypes.DEVICE_LIST_SUCCESS,
      payload: data,
    });
  } catch (failed) {
    yield put({
      type: ActionTypes.DEVICE_LIST_FAILURE,
      payload: null,
    });
  }
}

export function* remove({ payload }: Action): Generator {
  try {
    const response: unknown = yield call(api.delete, '/devices/' + payload);

    const { data, status } = response as AxiosResponse<any>;

    if (status !== 200) {
      throw response;
    }

    yield put({
      type: ActionTypes.DEVICE_DELETE_SUCCESS,
      payload: data,
    });

    window.location.reload()
  } catch (failed) {
    yield put({
      type: ActionTypes.DEVICE_DELETE_FAILURE,
      payload: null,
    });
  }
}

export function* update({ payload }: Action): Generator {
  try {
    const request = payload as Device;

    const { id, ...requestPayload } = request;
    const response: unknown = yield call(api.put, '/devices/' + id, requestPayload);

    const { data, status } = response as AxiosResponse<Device>;

    if (status !== 200) {
      throw response;
    }

    yield put({
      type: ActionTypes.DEVICE_UPDATE_SUCCESS,
      payload: data,
    });

    window.location.reload()
  } catch (failed) {
    yield put({
      type: ActionTypes.DEVICE_UPDATE_FAILURE,
      payload: null,
    });
  }
}

export default all([
  takeLatest(ActionTypes.DEVICE_DELETE_REQUEST, remove),
  takeLatest(ActionTypes.DEVICE_LIST_REQUEST, list),
  takeLatest(ActionTypes.DEVICE_ADD_REQUEST, add),
  takeLatest(ActionTypes.DEVICE_FIND_REQUEST, find),
  takeLatest(ActionTypes.DEVICE_UPDATE_REQUEST, update),
]);
