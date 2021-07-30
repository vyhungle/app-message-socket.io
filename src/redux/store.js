import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import authReducer from './slice/authSlice';
import roomReducer from './slice/roomSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    room: roomReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
