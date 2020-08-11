import {
  call,
  put,
  fork,
  cancel,
  delay,
  takeLatest,
  takeEvery,
} from "redux-saga/effects";

import * as urlService from "services/urls";
import {
  ADD_URL_REQUESTED,
  REMOVE_URL_REQUESTED,
  EDIT_URL_REQUESTED,
  FETCH_URL_TITLES_REQUESTED,
} from "./actionTypes";

import {
  addUrlSuccess,
  addUrlFailed,
  fetchUrlTitlesSuccess,
  fetchUrlTitlesFailed,
  removeUrlSuccess,
  removeUrlFailed,
  editUrlSuccess,
  editUrlFailed,
} from "./actionCreators";

import {
  AddUrlRequestedAction,
  FetchUrlTitlesRequestedAction,
  RemoveUrlRequestedAction,
  EditUrlRequestedAction,
} from "./types";

function* addUrl(action: AddUrlRequestedAction) {
  try {
    const { payload } = action;

    const response = yield call(urlService.addUrl, payload);

    yield put(addUrlSuccess(response));
  } catch (err) {
    yield put(addUrlFailed(err.response.data.message));
  }
}

function* removeUrl(action: RemoveUrlRequestedAction) {
  try {
    const { payload } = action;

    yield call(urlService.removeUrl, payload);

    yield put(removeUrlSuccess(payload));
  } catch (err) {
    yield put(removeUrlFailed(err.response.data.message));
  }
}

function* editUrl(action: EditUrlRequestedAction) {
  try {
    const { payload } = action;

    yield call(urlService.editUrl, payload);

    yield put(editUrlSuccess(payload));
  } catch (err) {
    yield put(editUrlFailed(err.response.data.message));
  }
}

function* startFetchUrlTitles(action: FetchUrlTitlesRequestedAction) {
  try {
    yield delay(1000);
    const { payload } = action;

    const response = yield call(urlService.fetchTitles, payload);

    yield put(fetchUrlTitlesSuccess(response));
  } catch (err) {
    yield put(fetchUrlTitlesFailed(err.response.data.message));
  }
}

let task: any;
function* fetchUrlTitles(action: FetchUrlTitlesRequestedAction) {
  if (task) {
    yield cancel(task);
  }
  task = yield fork(startFetchUrlTitles, action);
}

export default function* urlsSaga() {
  yield takeLatest(ADD_URL_REQUESTED, addUrl);
  yield takeLatest(EDIT_URL_REQUESTED, editUrl);
  yield takeEvery(REMOVE_URL_REQUESTED, removeUrl);
  yield takeLatest(FETCH_URL_TITLES_REQUESTED, fetchUrlTitles);
}
