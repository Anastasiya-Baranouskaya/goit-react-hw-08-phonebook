import { createSlice } from '@reduxjs/toolkit';
import {
  signupThunk,
  loginThunk,
  getCurrentUserThunk,
  logoutThunk,
} from './authThunks';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '' },
    token: '',
    error: 'null',
    isLoading: false,
    isAuth: false,
    myProp: 'Hello',
  },
  reducers: {
    renameProp: (state, action) => {
      return { ...state, myProp: action.payload };
    },
  },
  extraReducers: {
    [signupThunk.pending](state) {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    [signupThunk.fulfilled](state, action) {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoading: false,
        isAuth: true,
      };
    },
    [signupThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [loginThunk.pending](state) {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    [loginThunk.fulfilled](state, action) {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoading: false,
        isAuth: true,
      };
    },
    [loginThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [getCurrentUserThunk.pending](state) {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    [getCurrentUserThunk.fulfilled](state, action) {
      console.log('action: ', action);
      if (action.payload.message) {
        return {
          ...state,
          isLoading: false,
          isAuth: false,
          error: action.payload,
        };
      }
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isAuth: true,
      };
    },
    [getCurrentUserThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        error: action.payload,
      };
    },
    [logoutThunk.pending](state) {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    [logoutThunk.fulfilled](action) {
      console.log('action: ', action);
      return {
        user: { name: '', email: '' },
        token: '',
        error: 'null',
        isLoading: false,
        isAuth: false,
      };
    },
    [logoutThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        error: action.payload,
      };
    },
  },
});

export const { renameProp } = authSlice.actions;
export default authSlice.reducer;
