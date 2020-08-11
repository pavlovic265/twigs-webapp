import {
  ADD_URL_REQUESTED,
  ADD_URL_SUCCESS,
  ADD_URL_FAIL,
  FETCH_URL_TITLES_REQUESTED,
  FETCH_URL_TITLES_SUCCESS,
  FETCH_URL_TITLES_FAIL,
  REMOVE_URL_REQUESTED,
  REMOVE_URL_SUCCESS,
  REMOVE_URL_FAIL,
  EDIT_URL_REQUESTED,
  EDIT_URL_SUCCESS,
  EDIT_URL_FAIL,
  FETCH_URL_TITLES_RESET,
} from "./actionTypes";
import { UrlsActions, Url } from "./types";

export function addUrlRequest(payload: Url): UrlsActions {
  return {
    type: ADD_URL_REQUESTED,
    payload,
  };
}

export function addUrlSuccess(payload: Url): UrlsActions {
  return {
    type: ADD_URL_SUCCESS,
    payload,
  };
}

export function addUrlFailed(error: string): UrlsActions {
  return {
    type: ADD_URL_FAIL,
    error,
  };
}

export function removeUrlRequest(payload: string): UrlsActions {
  return {
    type: REMOVE_URL_REQUESTED,
    payload,
  };
}

export function removeUrlSuccess(payload: string): UrlsActions {
  return {
    type: REMOVE_URL_SUCCESS,
    payload,
  };
}

export function removeUrlFailed(error: string): UrlsActions {
  return {
    type: REMOVE_URL_FAIL,
    error,
  };
}

export function editUrlRequest(payload: Url): UrlsActions {
  return {
    type: EDIT_URL_REQUESTED,
    payload,
  };
}

export function editUrlSuccess(payload: Url): UrlsActions {
  return {
    type: EDIT_URL_SUCCESS,
    payload,
  };
}

export function editUrlFailed(error: string): UrlsActions {
  return {
    type: EDIT_URL_FAIL,
    error,
  };
}

export function fetchUrlTitlesRequest(payload: string): UrlsActions {
  return {
    type: FETCH_URL_TITLES_REQUESTED,
    payload,
  };
}

export function fetchUrlTitlesReset(): UrlsActions {
  return {
    type: FETCH_URL_TITLES_RESET,
  };
}

export function fetchUrlTitlesSuccess(payload: string[]): UrlsActions {
  return {
    type: FETCH_URL_TITLES_SUCCESS,
    payload,
  };
}

export function fetchUrlTitlesFailed(error: string): UrlsActions {
  return {
    type: FETCH_URL_TITLES_FAIL,
    error,
  };
}
