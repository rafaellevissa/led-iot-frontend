import { action } from 'typesafe-actions';
import { ActionTypes } from './consts';
import { Device, Page } from './types';

export function remove(id: string) {
  return action(ActionTypes.DEVICE_DELETE_REQUEST, id);
}

export function list(page: Page) {
  return action(ActionTypes.DEVICE_LIST_REQUEST, page);
}

export function add(payload: any) {
  return action(ActionTypes.DEVICE_ADD_REQUEST, payload);
}

export function find(id: string) {
  return action(ActionTypes.DEVICE_FIND_REQUEST, id);
}

export function update(payload: Device) {
  return action(ActionTypes.DEVICE_UPDATE_REQUEST, payload);
}
