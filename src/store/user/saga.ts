import { call, put, takeLatest } from "redux-saga/effects";
import * as authentiactionService from "services/authentiaction";

import { FETCH_USER_REQUESTED, LOGOUT_USER_REQUESTED } from "./actionTypes";
import {
  fetchUserSuccess,
  fetchUserFailed,
  logoutUserSuccess,
  logoutUserFailed,
} from "./actionCreators";

function* fetchUser() {
  try {
    const user = yield call(authentiactionService.getUserInfo);

    yield put(fetchUserSuccess(user));
  } catch (err) {
    yield put(fetchUserFailed(err.response.data.message));
  }
}

function* logoutUser() {
  try {
    yield call(authentiactionService.logoutUser);

    yield put(logoutUserSuccess());
  } catch (err) {
    console.log(err);
    yield put(logoutUserFailed(err.response.data.message));
  }
}

function* userSaga() {
  yield takeLatest(LOGOUT_USER_REQUESTED, logoutUser);
  yield takeLatest(FETCH_USER_REQUESTED, fetchUser);
}

export default userSaga;
