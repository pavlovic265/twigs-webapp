import produce from "immer";
import {
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
} from "./actionTypes";
import { RequestOption } from "store/types";
import { UserActions, UserState } from "./types";

import {
  handleFetchUserFail,
  handleFetchUserSuccess,
  handleLogoutUserSuccess,
  handleLogoutUserFail,
} from "store/user/reducerHendler";

export const initialState: UserState = {
  user: {
    id: "",
    username: "",
    avatar: "",
    email: "",
    name: "",
  },
  isFetched: false,
  error: "",
  logoutUserState: RequestOption.NONE,
};

export default function userReducer(state = initialState, action: UserActions) {
  return produce(state, (draft) => {
    switch (action.type) {
      case FETCH_USER_SUCCESS:
        handleFetchUserSuccess(draft, action.payload);
        break;

      case FETCH_USER_FAIL:
        handleFetchUserFail(draft, action.error);
        break;

      case LOGOUT_USER_SUCCESS:
        handleLogoutUserSuccess(draft);
        break;

      case LOGOUT_USER_FAIL:
        handleLogoutUserFail(draft, action.error);
        break;
    }
  });
}
