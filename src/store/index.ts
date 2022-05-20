import type { EnhancedStore, Reducer } from '@reduxjs/toolkit';
import type { Persistor } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import persistReducer from './persistReducer';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSagas';

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

const middlewareList = [sagaMiddleware];

const store: EnhancedStore = configureStore({
  reducer: persistReducer(rootReducer as Reducer),
  devTools: true,
  middleware: middlewareList,
});

const persistor: Persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export { store, persistor };
