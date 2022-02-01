const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  setting: {},
  loading: false,
  error: "",
  validation : {}
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    getSetting(state) {
      state.loading = true;
    },

    getSettingSuccess(state, action) {
      state.loading = false;
      state.setting = action.payload;
    },

    getSettingFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    verifiedPartner(state) {
      console.log("======verifiedPartner",verifiedPartner)
      state.loading = true;
    },

    verifiedPartnerSuccess(state, action) {
      console.log("======verifiedPartnerSuccess",action)
      state.loading = false;
      state.validation = action.payload;
    },

    verifiedPartnerFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    updateSetting(state) {
      state.loading = true;
    },

    updateSettingSuccess(state, action) {
      state.loading = false;
    },

    updateSettingFailed(state, action) {
      state.error = action.payload;
    },
  },
});

// actions
export const { getSetting, getSettingSuccess,getSettingFailed,verifiedPartner, verifiedPartnerSuccess,verifiedPartnerFailed,  updateSetting, updateSettingSuccess,  updateSettingFailed } =
  settingSlice.actions;

// selectors
// export const selectCurrentUser = (rootState) => rootState.auth.currentUser;

// reducer
const settingReducer = settingSlice.reducer;
export default settingReducer;
