import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import device from './device/sagas';

export default function* rootSaga(): Generator {
  yield all([
    auth,
    device
  ]);
}
