import { combineReducers } from 'redux';

import auth from './auth/reducer';
import device from './device/reducer';

export default combineReducers({
  auth,
  device
});
