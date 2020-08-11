import { Draft } from "immer";
import { RequestOption } from "store/types";
import { Url, UrlsState } from "./types";
import message from "utils/message";

export function handleAddUrlRequest(draft: Draft<UrlsState>) {
  draft.addUrlState = RequestOption.REQUESTED;
}

export function handleAddUrlSuccess(draft: Draft<UrlsState>, payload: Url) {
  draft.urls.push(payload);
  draft.addUrlState = RequestOption.SUCCESS;

  draft.urlTitles = [];
  draft.fetchUrlTitlesState = RequestOption.NONE;
}

export function handleAddUrlFail(draft: Draft<UrlsState>, error: string) {
  draft.error = error;
  draft.addUrlState = RequestOption.FAIL;

  message.error(error);
}

export function handleRemoveUrlRequest(draft: Draft<UrlsState>) {
  draft.removeUrlState = RequestOption.REQUESTED;
}

export function handleRemoveUrlSuccess(
  draft: Draft<UrlsState>,
  payload: string,
) {
  draft.urls = draft.urls.filter(({ id }) => id !== payload);
  draft.removeUrlState = RequestOption.SUCCESS;
}

export function handleRemoveUrlFail(draft: Draft<UrlsState>, error: string) {
  draft.error = error;
  draft.removeUrlState = RequestOption.FAIL;

  message.error(error);
}

export function handleEditUrlRequest(draft: Draft<UrlsState>) {
  draft.editUrlState = RequestOption.REQUESTED;
}

export function handleEditUrlSuccess(draft: Draft<UrlsState>, payload: Url) {
  draft.urls = draft.urls.map((url) => {
    if (payload.id === url.id) {
      return payload;
    }
    return url;
  });
  draft.editUrlState = RequestOption.SUCCESS;
}

export function handleEditUrlFail(draft: Draft<UrlsState>, error: string) {
  draft.error = error;
  draft.editUrlState = RequestOption.FAIL;

  message.error(error);
}

export function handleFetchUrlTitlesRequest(draft: Draft<UrlsState>) {
  draft.fetchUrlTitlesState = RequestOption.REQUESTED;
}

export function handleFetchUrlTitlesReset(draft: Draft<UrlsState>) {
  draft.fetchUrlTitlesState = RequestOption.NONE;
  draft.urlTitles = [];
}

export function handleFetchUrlTitlesSuccess(
  draft: Draft<UrlsState>,
  payload: string[],
) {
  draft.urlTitles = payload;
  draft.fetchUrlTitlesState = RequestOption.SUCCESS;
}

export function handleFetchUrlTitlesFail(
  draft: Draft<UrlsState>,
  error: string,
) {
  draft.error = error;
  draft.fetchUrlTitlesState = RequestOption.FAIL;
  draft.urlTitles = [];

  message.error(error);
}
