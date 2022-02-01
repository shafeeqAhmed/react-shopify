import { call, put, takeLatest } from "redux-saga/effects";
import cardDataApi from "api/cardDataApi";
import { getCardData, getCardDataFailed, getCardDataSuccess } from "./cardDataSlice";

function* fetchCardDataSaga(date) {
    try {
        const cardData = yield call(cardDataApi.getCardData, date);
        yield put(getCardDataSuccess(cardData));
    } catch (error) {
        yield put(getCardDataFailed(error));
    }
}

export default function* authSaga() {
    yield takeLatest(getCardData, fetchCardDataSaga)
}
