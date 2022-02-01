import { all } from 'redux-saga/effects';

import settingSaga from 'features/setting/settingSaga';
import userSaga from 'features/user/userSaga';
import cardDataSaga from 'features/cardData/cardDataSaga';

export default function* rootSaga() {
  yield all([userSaga(), settingSaga(), cardDataSaga()]);
}
