import {
  FETCH_USER_REQUESTED,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
  LOGOUT_USER_REQUESTED,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
} from "./actionTypes";
import { UserActions, User } from "./types";

export function logoutUsertRequest(): UserActions {
  return {
    type: LOGOUT_USER_REQUESTED,
  };
}

export function logoutUserSuccess(): UserActions {
  return {
    type: LOGOUT_USER_SUCCESS,
  };
}

export function logoutUserFailed(error: string): UserActions {
  return {
    type: LOGOUT_USER_FAIL,
    error,
  };
}

export function fetchUserRequest(): UserActions {
  return {
    type: FETCH_USER_REQUESTED,
  };
}

export function fetchUserSuccess(payload: User): UserActions {
  return {
    type: FETCH_USER_SUCCESS,
    payload,
  };
}

export function fetchUserFailed(error: string): UserActions {
  return {
    type: FETCH_USER_FAIL,
    error,
  };
}
