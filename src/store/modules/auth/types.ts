export interface ActionTypesBase {
  LOGIN_REQUEST: string;
  LOGIN_SUCCESS: string;
  LOGIN_FAILURE: string;
  LOGOUT_REQUEST: string;
  LOGOUT_SUCCESS: string;
  LOGOUT_FAILURE: string;
}

export interface Auth {
  type: string;
  token: string;
  expires_at: string;
}

export interface Login {
  email: string;
  password: string;
}


export interface StateBase {
  item: Auth | Login | null;
  error: boolean;
  loading: boolean;
}

export interface Action {
  type: string;
  payload: Auth | Login | null;
  meta: any;
  error: any;
}
