import { call, put, takeLatest } from "redux-saga/effects";
import settingApi from "api/settingApi";
import { getSetting, getSettingFailed, getSettingSuccess,verifiedPartner, verifiedPartnerFailed, updateSettingSuccess, updateSettingFailed, verifiedPartnerSuccess, updateSetting } from "./settingSlice";

function* fetchSettingSaga() {
  try {
    const settings = yield call(settingApi.getSettings);
    yield put(getSettingSuccess(settings));
  } catch (error) {
    yield put(getSettingFailed(error));
  }
}

function* verifiedPartnerSaga(action) {
  try {
    const dataSetting =  yield call(settingApi.verifiedPartner, action.payload);
    yield put(verifiedPartnerSuccess(dataSetting));
  } catch (error) {
    yield put(verifiedPartnerFailed(error));
  }
}

function* updateSettingSaga(action) {
    try {
     yield call(settingApi.updateSettings, action.payload);
      yield put(updateSettingSuccess());
    } catch (error) {
      yield put(updateSettingFailed(error));
    }
  }
  

export default function* authSaga() {
  yield takeLatest(getSetting, fetchSettingSaga);
  yield takeLatest(verifiedPartner, verifiedPartnerSaga);
  yield takeLatest(updateSetting, updateSettingSaga);
}
