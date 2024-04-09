import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
  bookmarkLoading: false,
  bookmarkMsg: null,
  updateLoading: false,
};

// if (typeof window !== 'undefined') {
//     initialState.currentUser = JSON.parse(localStorage.getItem("user"));
// }

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // process start (sign up and sign in and logout)
    authStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    // sucess
    signUpSuccess: (state) => {
      state.loading = false;
      state.error = null;
    },

    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
      // localStorage.setItem("user", JSON.stringify(state.currentUser));
    },

    updateStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    updateFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
      // localStorage.setItem("user", JSON.stringify(state.currentUser));
    },

    logoutSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
      state.error = null;
      // localStorage.removeItem("user");
    },

    // failure
    authFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Like
    likeStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    likeSuceess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.currentUser = action.payload;
      // localStorage.setItem("user", JSON.stringify(state.currentUser));
    },

    likeFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Bookmark
    bookmarkUpdateStart: (state) => {
      state.bookmarkLoading = true;
      state.error = null;
      state.bookmarkMsg = null;
    },

    bookmarkUpdateSuccess: (state, action) => {
      state.bookmarkLoading = false;
      state.error = null;
      state.bookmarkMsg = action.payload.msg;
      state.currentUser = action.payload.user;
      // localStorage.setItem("user", JSON.stringify(state.currentUser));
    },

    bookmarkUpdateFailure: (state, action) => {
      state.bookmarkLoading = false;
      state.error = action.payload;
      state.bookmarkMsg = "Error bookmarking blog";
    },

    bookmarkUpdateDone: (state) => {
      state.bookmarkMsg = null;
    },
  },
});

export const {
  authStart,
  signUpSuccess,
  signInSuccess,
  logoutSuccess,
  authFailure,
  likeStart,
  likeSuceess,
  likeFailure,
  updateStart,
  updateFailure,
  updateSuccess,
  bookmarkUpdateStart,
  bookmarkUpdateSuccess,
  bookmarkUpdateFailure,
  bookmarkUpdateDone,
} = userSlice.actions;

export default userSlice.reducer;
