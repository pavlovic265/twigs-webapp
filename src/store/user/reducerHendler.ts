import { Draft } from "immer";
import { RequestOption } from "store/types";
import message from "utils/message";
import { initialState } from "./reducer";
import { UserState } from "./types";

export function handleFetchUserSuccess(draft: Draft<UserState>, user: any) {
  const { _id, username, avatar, email, name, labels, urls } = user;

  draft.user.id = _id;
  draft.user.username = username;
  draft.user.avatar = avatar;
  draft.user.email = email;
  draft.user.name = name;
}

export function handleFetchUserFail(draft: Draft<UserState>, error: string) {
  draft.error = error;
  draft.isFetched = false;
  message.error(error);
}

export function handleLogoutUserSuccess(draft: Draft<UserState>) {
  draft.error = initialState.error;
  draft.logoutUserState = RequestOption.SUCCESS;
  draft.user = initialState.user;
}

export function handleLogoutUserFail(draft: Draft<UserState>, error: string) {
  draft.error = error;
  message.error(error);
}
