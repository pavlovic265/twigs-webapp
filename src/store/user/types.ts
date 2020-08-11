import {
  FETCH_USER_REQUESTED,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
  LOGOUT_USER_REQUESTED,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
} from "./actionTypes";
import { RequestOption } from "store/types";

export interface User {
  id: string;
  username: string;
  avatar: string;
  email: string;
  name: string;
}

export interface UserState {
  user: User;
  isFetched: boolean;
  error: string;
  logoutUserState: RequestOption;
}

export interface FetchUserRequestedAction {
  type: typeof FETCH_USER_REQUESTED;
}

export interface FetchUserSuccessAction {
  type: typeof FETCH_USER_SUCCESS;
  payload: User;
}

export interface FetchUserFailedAction {
  type: typeof FETCH_USER_FAIL;
  error: string;
}

export interface LogoutUserRequestedAction {
  type: typeof LOGOUT_USER_REQUESTED;
}

export interface LogoutUserSuccessAction {
  type: typeof LOGOUT_USER_SUCCESS;
}

export interface LogoutUserFailedAction {
  type: typeof LOGOUT_USER_FAIL;
  error: string;
}

export type UserActions =
  | FetchUserRequestedAction
  | FetchUserSuccessAction
  | FetchUserFailedAction
  | LogoutUserRequestedAction
  | LogoutUserSuccessAction
  | LogoutUserFailedAction;
