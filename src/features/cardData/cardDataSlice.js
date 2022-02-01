const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cardData: {},
  error: "",
};

const cardDataSlice = createSlice({
  name: "cardData",
  initialState,
  reducers: {
    getCardData(state) {
      state.loading = true;
    },

    getCardDataSuccess(state, action) {
      state.loading = false;
      state.cardData = action.payload;
    },

    getCardDataFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// actions
export const { getCardData, getCardDataSuccess, getCardDataFailed } =
  cardDataSlice.actions;

// selectors
// export const selectCurrentUser = (rootState) => rootState.auth.currentUser;

// reducer
const cardDataReducer = cardDataSlice.reducer;
export default cardDataReducer;
