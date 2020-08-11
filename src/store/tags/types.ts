import * as actionTypes from "./actionTypes";
import { RequestOption } from "store/types";

export interface Tag {
  id: string;
  value: string;
  color: string;
}

export interface AddTag {
  value: string;
  color: string;
}

export interface AddTagRequestedAction {
  type: typeof actionTypes.ADD_TAG_REQUESTED;
  payload: AddTag;
}

export interface AddTagSuccessAction {
  type: typeof actionTypes.ADD_TAG_SUCCESS;
  payload: Tag;
}

export interface AddTagFailedAction {
  type: typeof actionTypes.ADD_TAG_FAIL;
  error: string;
}

export interface RemoveTagRequestedAction {
  type: typeof actionTypes.REMOVE_TAG_REQUESTED;
  payload: string;
}

export interface RemoveTagSuccessAction {
  type: typeof actionTypes.REMOVE_TAG_SUCCESS;
  payload: string;
}

export interface RemoveTagFailedAction {
  type: typeof actionTypes.REMOVE_TAG_FAIL;
  error: string;
}

export interface EditTagRequestedAction {
  type: typeof actionTypes.EDIT_TAG_REQUESTED;
  payload: Tag;
}

export interface EditTagSuccessAction {
  type: typeof actionTypes.EDIT_TAG_SUCCESS;
  payload: Tag;
}

export interface EditTagFailedAction {
  type: typeof actionTypes.EDIT_TAG_FAIL;
  error: string;
}

export type TagActions =
  | AddTagRequestedAction
  | AddTagSuccessAction
  | AddTagFailedAction
  | RemoveTagRequestedAction
  | RemoveTagSuccessAction
  | RemoveTagFailedAction
  | EditTagRequestedAction
  | EditTagSuccessAction
  | EditTagFailedAction;

export interface TagState {
  tags: Tag[];
  addTagState: RequestOption;
  editTagState: RequestOption;
  error: string;
}
