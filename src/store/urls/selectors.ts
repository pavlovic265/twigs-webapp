import { createSelector } from "reselect";
import { InitalState } from "store/types";
import { UrlObject, Url } from "store/urls/types";

const urlsState = (state: InitalState) => {
  return state.urls;
};

export const getUrls = createSelector(urlsState, ({ urls }) => urls);
export const getUrlError = createSelector(urlsState, ({ error }) => error);

export const getUrlTitles = createSelector(
  urlsState,
  ({ urlTitles }) => urlTitles,
);

export const getUrlsObject = createSelector(urlsState, ({ urls }) =>
  urls.reduce((acc, item: Url) => {
    acc[item.id] = item;
    return acc;
  }, {} as UrlObject),
);
export const getUrlsForTable = createSelector(urlsState, ({ urls }) =>
  urls.map((url: Url) => ({ key: url.id, ...url })),
);

export const getUrlTitlesState = createSelector(
  urlsState,
  ({ fetchUrlTitlesState }) => fetchUrlTitlesState,
);

export const getAddUrlState = createSelector(
  urlsState,
  ({ addUrlState }) => addUrlState,
);

export const getEditUrlState = createSelector(
  urlsState,
  ({ editUrlState }) => editUrlState,
);
