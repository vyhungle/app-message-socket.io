import {createSlice} from '@reduxjs/toolkit';
import {Platform} from 'react-native';

const initialState = {
  isLoading: false,
  isLoadingMessage: false,
  isSend: false,
  room: [],
  message: [],
};

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    roomPending: state => {
      state.isLoading = true;
    },
    roomSuccess: (state, {payload}) => {
      state.isLoading = false;
      state.room = payload.rooms;
    },
    roomFail: state => {
      state.isLoading = false;
    },

    messagePending: state => {
      state.isLoadingMessage = true;
    },
    messageSuccess: (state, {payload}) => {
      state.isLoadingMessage = false;
      state.message = payload.response.messages;
    },
    messageFail: state => {
      state.isLoadingMessage = false;
    },

    messageReceive: (state, {payload}) => {
      state.message.push(payload.message);
    },

    sendMessagePending: state => {
      state.isSend = true;
    },
    sendMessageSuccess: (state, {payload}) => {
      state.isSend = false;
      state.message.push(payload.message);
    },
    sendMessageFail: state => {
      state.isSend = false;
    },
  },
});

export const {
  roomPending,
  roomSuccess,
  roomFail,
  messagePending,
  messageSuccess,
  messageFail,
  sendMessagePending,
  sendMessageSuccess,
  sendMessageFail,
  messageReceive,
} = roomSlice.actions;
export default roomSlice.reducer;
