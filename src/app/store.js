import { combineReducers, configureStore} from '@reduxjs/toolkit';
import cardDataReducer from 'features/cardData/cardDataSlice';
import settingReducer from 'features/setting/settingSlice';
import userReducer from 'features/user/userSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  user: userReducer,
  setting: settingReducer,
  cardData: cardDataReducer
});

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
