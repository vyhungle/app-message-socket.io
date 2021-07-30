import {all, call, put, take, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {apiUrl} from '../constants';

import {
  messageFail,
  messagePending,
  messageSuccess,
  roomFail,
  roomPending,
  roomSuccess,
} from '../slice/roomSlice';

function* getRoom() {
  const {data} = yield call(axios.get, `${apiUrl}/room/get-my-rooms`);
  if (data.success) {
    yield put({type: roomSuccess.type, payload: {rooms: data.rooms}});
  } else {
    yield put({type: roomFail.type});
  }
}
function* getMessage(action) {
  const {payload} = action;
  const {data} = yield call(axios.get, `${apiUrl}/message/${payload._id}`);
  if (data.success) {
    yield put({type: messageSuccess.type, payload: {response: data.response}});
  } else {
    yield put({type: messageFail.type});
  }
}

function* workerRoomSaga() {
  yield takeEvery(roomPending.type, getRoom);
  yield takeEvery(messagePending.type, getMessage);
}

export default function* roomSaga() {
  console.log('room active');
  yield all([workerRoomSaga()]);
}
