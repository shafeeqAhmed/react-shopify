import { call, put, takeLatest } from "redux-saga/effects";
import userApi from "api/userApi";
import {
  getAllUser,
  getUserByIdSuccess,
  getUserByIdFailed,
  getAllUserFailed,
  getUserById,
  createUserSuccess,
  createUserFailed,
  createUser,
  updateUserById,
  updateUserByIdFailed,
  createOrgSuccess,
  createOrgFailed,
  createOrg,
  getAllUserSuccess,
  updateUserByIdSuccess,
} from "./userSlice";

function* fetchAllUserSaga() {
  try {
    const user = yield call(userApi.getUser);
    yield put(getAllUserSuccess(user));
  } catch (error) {
    yield put(getAllUserFailed(error));
  }
}

function* fetchUserByIdSaga(action) {
  try {
    const user = yield call(userApi.getUserById, action.payload);
    yield put(getUserByIdSuccess(user));
  } catch (error) {
    yield put(getUserByIdFailed(error));
  }
}

function* createNewUserSaga(action) {
  try {
    yield call(userApi.createNewUser, action.payload);
    yield put(createUserSuccess());
  } catch (error) {
    yield put(createUserFailed(error));
  }
}

function* updateUserSaga(action) {
  try {
   yield call(
      userApi.updateUser,
      action.payload.data,
      action.payload.id
    );
    yield put(updateUserByIdSuccess());
  } catch (error) {
    yield put(updateUserByIdFailed(error));
  }
}

function* createNewOrgSaga(action) {
  try {
    yield call(userApi.createOrg, action.payload);
    yield put(createOrgSuccess());
  } catch (error) {
    yield put(createOrgFailed(error));
  }
}

export default function* authSaga() {
  yield takeLatest(getAllUser, fetchAllUserSaga);
  yield takeLatest(getUserById, fetchUserByIdSaga);
  yield takeLatest(createUser, createNewUserSaga);
  yield takeLatest(updateUserById, updateUserSaga);
  yield takeLatest(createOrg, createNewOrgSaga);
}
