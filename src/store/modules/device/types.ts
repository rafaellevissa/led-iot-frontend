export interface ActionTypesBase {
  DEVICE_DELETE_REQUEST: string;
  DEVICE_DELETE_SUCCESS: string;
  DEVICE_DELETE_FAILURE: string;

  DEVICE_LIST_REQUEST: string;
  DEVICE_LIST_SUCCESS: string;
  DEVICE_LIST_FAILURE: string;

  DEVICE_ADD_REQUEST: string;
  DEVICE_ADD_SUCCESS: string;
  DEVICE_ADD_FAILURE: string;

  DEVICE_FIND_REQUEST: string;
  DEVICE_FIND_SUCCESS: string;
  DEVICE_FIND_FAILURE: string;

  DEVICE_UPDATE_REQUEST: string;
  DEVICE_UPDATE_SUCCESS: string;
  DEVICE_UPDATE_FAILURE: string;
}

export interface Paginated<T = any> {
  meta: {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    first_page: number;
    first_page_url: string;
    last_page_url: string;
    next_page_url: string;
    previous_page_url: string
  },
  data: T[]
}

export interface Device {
  id: number;
  name?: string;
  topic?: string;
  created_at?: string;
  updated_at?: string;
}

export interface StateBase {
  item: string | Page | Device | Device[] | null;
  itemEdit: string | Device | Page | null;
  error: boolean;
  loading: boolean;
}

export interface Action {
  type: string;
  payload: string | Device | Page | null;
  meta: any;
  error: any;
}

export interface Page {
  currentPage: number;
  perPage: number;
}