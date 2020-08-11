import produce from "immer";
import {
  ADD_TAG_SUCCESS,
  ADD_TAG_FAIL,
  REMOVE_TAG_SUCCESS,
  REMOVE_TAG_FAIL,
  EDIT_TAG_FAIL,
  EDIT_TAG_REQUESTED,
  EDIT_TAG_SUCCESS,
} from "./actionTypes";
import { TagActions, TagState } from "./types";
import { RequestOption } from "store/types";

import {
  handleAddTagSuccess,
  handleAddTagFail,
  handleRemoveTagSuccess,
  handleRemoveTagFail,
  handleEditTagRequest,
  handleEditTagSuccess,
  handleEditTagFail,
} from "./reducerHendler";

export const initialState: TagState = {
  tags: [],
  addTagState: RequestOption.NONE,
  editTagState: RequestOption.NONE,
  error: "",
};

export default function userReducer(state = initialState, action: TagActions) {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_TAG_SUCCESS:
        handleAddTagSuccess(draft, action.payload);
        break;

      case ADD_TAG_FAIL:
        handleAddTagFail(draft, action.error);
        break;

      case REMOVE_TAG_SUCCESS:
        handleRemoveTagSuccess(draft, action.payload);
        break;

      case REMOVE_TAG_FAIL:
        handleRemoveTagFail(draft, action.error);
        break;

      case EDIT_TAG_REQUESTED:
        handleEditTagRequest(draft);
        break;

      case EDIT_TAG_SUCCESS:
        handleEditTagSuccess(draft, action.payload);
        break;

      case EDIT_TAG_FAIL:
        handleEditTagFail(draft, action.error);
        break;
    }
  });
}
