import * as actionTypes from "./actionTypes";
import { RequestOption } from "store/types";

export interface Url {
  id: string;
  href: string;
  title: string;
  labels: string[];
}

export interface UrlObject {
  [id: string]: { id: string; href: string; labels: string[] };
}

export interface UrlsState {
  urls: Url[];
  error: string;
  urlTitles: string[];
  addUrlState: RequestOption;
  removeUrlState: RequestOption;
  editUrlState: RequestOption;
  fetchUrlTitlesState: RequestOption;
}

export interface AddUrl {
  href: string;
  labels: string[];
}

export interface AddUrlRequestedAction {
  type: typeof actionTypes.ADD_URL_REQUESTED;
  payload: AddUrl;
}

export interface AddUrlSuccessAction {
  type: typeof actionTypes.ADD_URL_SUCCESS;
  payload: Url;
}

export interface AddUrlFailedAction {
  type: typeof actionTypes.ADD_URL_FAIL;
  error: string;
}

export interface RemoveUrlRequestedAction {
  type: typeof actionTypes.REMOVE_URL_REQUESTED;
  payload: string;
}

export interface RemoveUrlSuccessAction {
  type: typeof actionTypes.REMOVE_URL_SUCCESS;
  payload: string;
}

export interface RemoveUrlFailedAction {
  type: typeof actionTypes.REMOVE_URL_FAIL;
  error: string;
}

export interface EditUrlRequestedAction {
  type: typeof actionTypes.EDIT_URL_REQUESTED;
  payload: Url;
}

export interface EditUrlSuccessAction {
  type: typeof actionTypes.EDIT_URL_SUCCESS;
  payload: Url;
}

export interface EditUrlFailedAction {
  type: typeof actionTypes.EDIT_URL_FAIL;
  error: string;
}

export interface FetchUrlTitlesRequestedAction {
  type: typeof actionTypes.FETCH_URL_TITLES_REQUESTED;
  payload: string;
}

export interface FetchUrlTitlesResetAction {
  type: typeof actionTypes.FETCH_URL_TITLES_RESET;
}

export interface FetchUrlTitlesSuccessAction {
  type: typeof actionTypes.FETCH_URL_TITLES_SUCCESS;
  payload: string[];
}

export interface FetchUrlTitlesFailedAction {
  type: typeof actionTypes.FETCH_URL_TITLES_FAIL;
  error: string;
}

export type UrlsActions =
  | AddUrlRequestedAction
  | AddUrlSuccessAction
  | AddUrlFailedAction
  | RemoveUrlRequestedAction
  | RemoveUrlSuccessAction
  | RemoveUrlFailedAction
  | EditUrlRequestedAction
  | EditUrlSuccessAction
  | EditUrlFailedAction
  | FetchUrlTitlesRequestedAction
  | FetchUrlTitlesResetAction
  | FetchUrlTitlesSuccessAction
  | FetchUrlTitlesFailedAction;
