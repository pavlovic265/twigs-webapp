import { call, put, takeLatest } from "redux-saga/effects";

import * as tagService from "services/tags";
import {
  ADD_TAG_REQUESTED,
  REMOVE_TAG_REQUESTED,
  EDIT_TAG_REQUESTED,
} from "./actionTypes";

import {
  addTagSuccess,
  addTagFailed,
  removeTagSuccess,
  removeTagFailed,
  editTagSuccess,
  editTagFailed,
} from "./actionCreators";

import {
  AddTagRequestedAction,
  RemoveTagRequestedAction,
  EditTagRequestedAction,
} from "./types";

function* addTag(action: AddTagRequestedAction) {
  try {
    const { payload } = action;

    const response = yield call(tagService.addTag, payload);
    yield put(addTagSuccess(response));
  } catch (err) {
    yield put(addTagFailed(err.response.data.message));
  }
}

function* removeTag(action: RemoveTagRequestedAction) {
  try {
    const { payload } = action;

    yield call(tagService.removeTag, payload);

    yield put(removeTagSuccess(payload));
  } catch (err) {
    yield put(removeTagFailed(err.response.data.message));
  }
}

function* editTag(action: EditTagRequestedAction) {
  try {
    const { payload } = action;

    yield call(tagService.editTag, payload);

    yield put(editTagSuccess(payload));
  } catch (err) {
    yield put(editTagFailed(err.response.data.message));
  }
}

function* tagSaga() {
  yield takeLatest(ADD_TAG_REQUESTED, addTag);
  yield takeLatest(REMOVE_TAG_REQUESTED, removeTag);
  yield takeLatest(EDIT_TAG_REQUESTED, editTag);
}

export default tagSaga;
