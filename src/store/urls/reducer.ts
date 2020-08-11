import produce from "immer";
import { RequestOption } from "store/types";
import { UrlsActions, UrlsState } from "./types";

import * as actionsTypes from "./actionTypes";
import * as reducerHendler from "./reducerHendler";

export const initialState: UrlsState = {
  urls: [],
  error: "",
  urlTitles: [],
  addUrlState: RequestOption.NONE,
  removeUrlState: RequestOption.NONE,
  editUrlState: RequestOption.NONE,
  fetchUrlTitlesState: RequestOption.NONE,
};

export default function urlReducer(state = initialState, action: UrlsActions) {
  return produce(state, (draft) => {
    switch (action.type) {
      case actionsTypes.ADD_URL_REQUESTED:
        reducerHendler.handleAddUrlRequest(draft);
        break;

      case actionsTypes.ADD_URL_SUCCESS:
        reducerHendler.handleAddUrlSuccess(draft, action.payload);
        break;

      case actionsTypes.ADD_URL_FAIL:
        reducerHendler.handleAddUrlFail(draft, action.error);
        break;

      case actionsTypes.REMOVE_URL_SUCCESS:
        reducerHendler.handleRemoveUrlSuccess(draft, action.payload);
        break;

      case actionsTypes.REMOVE_URL_FAIL:
        reducerHendler.handleRemoveUrlFail(draft, action.error);
        break;

      case actionsTypes.EDIT_URL_REQUESTED:
        reducerHendler.handleEditUrlRequest(draft);
        break;

      case actionsTypes.EDIT_URL_SUCCESS:
        reducerHendler.handleEditUrlSuccess(draft, action.payload);
        break;

      case actionsTypes.EDIT_URL_FAIL:
        reducerHendler.handleRemoveUrlFail(draft, action.error);
        break;

      case actionsTypes.FETCH_URL_TITLES_REQUESTED:
        reducerHendler.handleFetchUrlTitlesRequest(draft);
        break;

      case actionsTypes.FETCH_URL_TITLES_RESET:
        reducerHendler.handleFetchUrlTitlesReset(draft);
        break;

      case actionsTypes.FETCH_URL_TITLES_SUCCESS:
        reducerHendler.handleFetchUrlTitlesSuccess(draft, action.payload);
        break;

      case actionsTypes.FETCH_URL_TITLES_FAIL:
        reducerHendler.handleFetchUrlTitlesFail(draft, action.error);
        break;
    }
  });
}
