import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  userLoading: false,
  users: [],
  user: {},
};

const userOnlineSlice = createSlice({
  name: 'userOnline',
  initialState,
  reducers: {
    usersPending: state => {
      state.isLoading = true;
    },
    usersSuccess: (state, {payload}) => {
      state.isLoading = false;
      state.users = payload.users;
    },
    usersFail: state => {
      state.isLoading = false;
    },

    singleUserPending: state => {
      state.userLoading = true;
    },
    singleUserSuccess: (state, {payload}) => {
      console.log(payload.user, payload);
      state.userLoading = false;
      state.user = payload.user;
    },
    singleUserFail: state => {
      state.userLoading = false;
    },
  },
});

export const {
  usersPending,
  usersSuccess,
  usersFail,
  singleUserSuccess,
  singleUserPending,
  singleUserFail,
} = userOnlineSlice.actions;
export default userOnlineSlice.reducer;
