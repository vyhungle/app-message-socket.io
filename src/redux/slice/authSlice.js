import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isAuthLoading: true,
  isAuth: false,
  errors: [],
  registerErrors: [],
  user: {},
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authUser: (state, {payload}) => {
      console.log('get user success');
      state.user = payload.user;
      state.isAuth = true;
      state.isAuthLoading = false;
    },
    //logout
    logout: state => {
      state.isAuth = false;
      state.user = {};
    },
    //login
    loginPending: state => {
      state.isLoading = true;
    },
    loginSuccess: state => {
      state.isLoading = false;
      state.isAuth = true;
      state.errors = [];
      state.registerErrors = [];
    },
    loginFail: (state, {payload}) => {
      state.isLoading = false;
      state.isAuth = false;
      state.errors = payload.errors;
      state.user = {};
    },
    //register
    registerPending: state => {
      state.isLoading = true;
    },
    registerSuccess: state => {
      state.isLoading = false;
      state.isAuth = true;
      state.registerErrors = [];
      state.errors = [];
    },
    registerFail: (state, {payload}) => {
      state.isLoading = false;
      state.isAuth = false;
      state.registerErrors = payload.errors;
      state.user = {};
    },
  },
});

export const {
  loginPending,
  loginSuccess,
  loginFail,
  authUser,
  registerPending,
  registerSuccess,
  registerFail,
  logout,
} = AuthSlice.actions;

export default AuthSlice.reducer;
