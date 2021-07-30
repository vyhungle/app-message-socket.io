import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isLoadingMessage: false,
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
  },
});

export const {
  roomPending,
  roomSuccess,
  roomFail,
  messagePending,
  messageSuccess,
  messageFail,
} = roomSlice.actions;
export default roomSlice.reducer;
