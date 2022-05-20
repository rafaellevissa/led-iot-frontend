import type { ActionTypesBase, StateBase } from './types';

export const ActionTypes: ActionTypesBase = {
  LOGIN_REQUEST: '@oauth/LOGIN_REQUEST',
  LOGIN_SUCCESS: '@oauth/LOGIN_SUCCESS',
  LOGIN_FAILURE: '@oauth/LOGIN_FAILURE',

  LOGOUT_REQUEST: '@oauth/LOGOUT_REQUEST',
  LOGOUT_SUCCESS: '@oauth/LOGOUT_SUCCESS',
  LOGOUT_FAILURE: '@oauth/LOGOUT_FAILURE',
};

export const InitialState: StateBase = {
  item: null,
  error: false,
  loading: false,
};
