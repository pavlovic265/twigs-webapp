import {
  ADD_TAG_REQUESTED,
  ADD_TAG_SUCCESS,
  ADD_TAG_FAIL,
  REMOVE_TAG_REQUESTED,
  REMOVE_TAG_SUCCESS,
  REMOVE_TAG_FAIL,
  EDIT_TAG_REQUESTED,
  EDIT_TAG_SUCCESS,
  EDIT_TAG_FAIL,
} from "./actionTypes";
import {
  AddTagSuccessAction,
  AddTagRequestedAction,
  AddTagFailedAction,
  RemoveTagRequestedAction,
  RemoveTagSuccessAction,
  RemoveTagFailedAction,
  EditTagRequestedAction,
  EditTagSuccessAction,
  EditTagFailedAction,
} from "./types";
import { Tag, AddTag } from "./types";

export function addTagRequest(payload: AddTag): AddTagRequestedAction {
  return {
    type: ADD_TAG_REQUESTED,
    payload,
  };
}

export function addTagSuccess(payload: Tag): AddTagSuccessAction {
  return {
    type: ADD_TAG_SUCCESS,
    payload,
  };
}

export function addTagFailed(error: string): AddTagFailedAction {
  return {
    type: ADD_TAG_FAIL,
    error,
  };
}

export function removeTagRequest(payload: string): RemoveTagRequestedAction {
  return {
    type: REMOVE_TAG_REQUESTED,
    payload,
  };
}

export function removeTagSuccess(payload: string): RemoveTagSuccessAction {
  return {
    type: REMOVE_TAG_SUCCESS,
    payload,
  };
}

export function removeTagFailed(error: string): RemoveTagFailedAction {
  return {
    type: REMOVE_TAG_FAIL,
    error,
  };
}

export function editTagRequest(payload: Tag): EditTagRequestedAction {
  return {
    type: EDIT_TAG_REQUESTED,
    payload,
  };
}

export function editTagSuccess(payload: Tag): EditTagSuccessAction {
  return {
    type: EDIT_TAG_SUCCESS,
    payload,
  };
}

export function editTagFailed(error: string): EditTagFailedAction {
  return {
    type: EDIT_TAG_FAIL,
    error,
  };
}
