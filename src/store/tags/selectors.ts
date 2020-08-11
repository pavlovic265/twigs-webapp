import { createSelector } from "reselect";
import { InitalState } from "store/types";

const tagsState = (state: InitalState) => {
  return state.tags;
};

export const getTags = createSelector(tagsState, ({ tags }) => tags);
export const getTagError = createSelector(tagsState, ({ error }) => error);

export const getEditTagState = createSelector(
  tagsState,
  ({ editTagState }) => editTagState,
);

export const getAddTagState = createSelector(
  tagsState,
  ({ editTagState }) => editTagState,
);
