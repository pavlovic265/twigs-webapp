import { Draft } from "immer";
import { RequestOption } from "store/types";
import message from "utils/message";

import { Tag, TagState } from "./types";

export function handleAddTagSuccess(draft: Draft<TagState>, payload: Tag) {
  draft.tags.push(payload);
}

export function handleAddTagFail(draft: Draft<TagState>, error: string) {
  draft.error = error;

  message.error(error);
}

export function handleEditTagRequest(draft: Draft<TagState>) {
  draft.editTagState = RequestOption.REQUESTED;
}

export function handleEditTagSuccess(draft: Draft<TagState>, payload: Tag) {
  draft.tags = draft.tags.map((tag) => {
    if (payload.id === tag.id) {
      return payload;
    }
    return tag;
  });
  draft.editTagState = RequestOption.SUCCESS;
}

export function handleEditTagFail(draft: Draft<TagState>, error: string) {
  draft.error = error;
  draft.editTagState = RequestOption.FAIL;

  message.error(error);
}

export function handleRemoveTagSuccess(
  draft: Draft<TagState>,
  payload: string,
) {
  draft.tags = draft.tags.filter(({ id }: Tag) => id !== payload);
}

export function handleRemoveTagFail(draft: Draft<TagState>, error: string) {
  draft.error = error;
  message.error(error);
}
