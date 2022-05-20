import produce from 'immer';

import type { Action, StateBase } from './types';

import { ActionTypes, InitialState } from './consts';

function reducer(state = InitialState, action: Action): StateBase {
  switch (action.type) {
    case ActionTypes.LOGOUT_REQUEST:
    case ActionTypes.LOGIN_REQUEST:
      return produce(state, draft => {
        draft.item = action.payload;
        draft.loading = true;
        draft.error = false;
      });
    case ActionTypes.LOGOUT_SUCCESS:
    case ActionTypes.LOGIN_SUCCESS:
      return produce(state, draft => {
        draft.item = action.payload;
        draft.loading = false;
        draft.error = false;
      });
    case ActionTypes.LOGOUT_FAILURE:
    case ActionTypes.LOGIN_FAILURE:
      return produce(state, draft => {
        draft.item = action.payload;
        draft.loading = false;
        draft.error = true;
      });
    default:
      return state;
  }
}

export default reducer;
