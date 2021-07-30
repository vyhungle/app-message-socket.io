import {all, call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {apiUrl} from '../constants';

import {
  setAccessToken,
  getAccessToken,
  deleteAccessToken,
} from '../../utils/asyncStorage';
import setAuthToken from '../../utils/setAuthToken';
import {
  loginPending,
  loginSuccess,
  loginFail,
  authUser,
  registerSuccess,
  registerFail,
  logout,
} from '../slice/authSlice';
import {roomPending} from '../slice/roomSlice';

function* getUser() {
  var token = yield call(getAccessToken);
  if (token) {
    yield call(setAuthToken, token);

    var {data} = yield call(axios.get, `${apiUrl}/auth/user`);
    if (data.success) {
      var user = data.user;
      yield put({type: authUser.type, payload: {user: user}});
      yield put({type: roomPending.type});
    }
  } else yield call(setAuthToken, null);
}

function* logoutUser() {
  yield call(setAuthToken, null);
  yield call(deleteAccessToken);
}

export function* loginUser(action) {
  try {
    const {payload} = action;
    const {data} = yield call(
      axios.post,
      `${apiUrl}/auth/login`,
      payload.values,
    );
    if (data.success) {
      yield put({type: loginSuccess.type});
      yield call(setAccessToken, data.token);
      yield call(getUser);
    } else {
      yield put({type: loginFail.type, payload: {errors: data.errors}});
    }
  } catch (error) {
    console.log(error);
  }
}

export function* registerUser(action) {
  try {
    const {payload} = action;
    const {data} = yield call(
      axios.post,
      `${apiUrl}/auth/register`,
      payload.values,
    );
    if (data.success) {
      yield put({type: registerSuccess.type});
      yield call(setAccessToken, data.token);
      yield call(getUser);
    } else {
      yield put({type: registerFail.type, payload: {errors: data.errors}});
    }
  } catch (error) {
    console.log(error);
  }
}

function* workerProductSaga() {
  yield takeEvery(loginPending.type, loginUser);
  yield takeEvery(loginPending.type, registerUser);
  yield takeEvery(logout.type, logoutUser);
}

export default function* productSaga() {
  console.log('authSaga active');
  yield all([getUser(), workerProductSaga()]);
}
