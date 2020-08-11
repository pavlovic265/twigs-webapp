import { fork } from "redux-saga/effects";

import userSaga from "store/user/saga";
import urlsSaga from "store/urls/saga";
import tagsSaga from "store/tags/saga";

export default function* rootSaga() {
  yield fork(userSaga);
  yield fork(urlsSaga);
  yield fork(tagsSaga);
}
