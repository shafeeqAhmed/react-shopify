const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  listUser: [],
  user: {},
  error: "",
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getAllUser(state) {
      state.loading = true;
    },

    getAllUserSuccess(state, action) {
      state.loading = false;
      state.listUser = action.payload;
    },

    getAllUserFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    getUserById(state, action) {
      state.loading = true;
    },

    getUserByIdSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
    },

    getUserByIdFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    createUser(state) {
      state.loading = true;
    },

    createUserSuccess(state) {
      state.loading = false;
    },

    createUserFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    updateUserById(state, action) {
      state.loading = true;
    },

    updateUserByIdSuccess(state, action) {
      state.loading = false;
    },

    updateUserByIdFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    createOrg(state) {
      state.loading = true;
    },

    createOrgSuccess(state) {
      state.loading = false;
    },

    createOrgFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// actions
export const {
  getAllUser,
  getAllUserSuccess,
  getAllUserFailed,
  getUserById,
  getUserByIdSuccess,
  getUserByIdFailed,
  createUser,
  createUserFailed,
  createUserSuccess,
  updateUserById,
  updateUserByIdSuccess,
  updateUserByIdFailed,
  createOrg,
  createOrgFailed,
  createOrgSuccess,
} = userSlice.actions;

// selectors
// export const selectCurrentUser = (rootState) => rootState.auth.currentUser;

// reducer
const userReducer = userSlice.reducer;
export default userReducer;
