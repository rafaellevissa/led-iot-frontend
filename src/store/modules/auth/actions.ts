import type { Login } from './types';

import { action } from 'typesafe-actions';
import { ActionTypes } from './consts';

export function login(payload: Login) {
  return action(ActionTypes.LOGIN_REQUEST, payload);
}

export function logout() {
  return action(ActionTypes.LOGOUT_REQUEST);
}
