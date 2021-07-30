import {all} from 'redux-saga/effects';
import authSaga from './saga/authSaga';
import roomSaga from './saga/roomSaga';

export default function* rootSaga() {
  yield all([authSaga(), roomSaga()]);
}
