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
  sendMessageFail,
  sendMessagePending,
  sendMessageSuccess,
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

function* sendMessage(action) {
  const {payload} = action;
  const {data} = yield call(
    axios.post,
    `${apiUrl}/message/${payload._id}/send-message`,
    payload.values,
  );
  if (data.success) {
    yield put({
      type: sendMessageSuccess.type,
      payload: {message: data.sendContent},
    });
  } else {
    yield put({type: sendMessageFail.type});
  }
}

function* workerRoomSaga() {
  yield takeEvery(roomPending.type, getRoom);
  yield takeEvery(messagePending.type, getMessage);
  yield takeEvery(sendMessagePending.type, sendMessage);
}

export default function* roomSaga() {
  console.log('room active');
  yield all([workerRoomSaga()]);
}
