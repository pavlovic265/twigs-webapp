import { UserState } from "store/user/types";
import { UrlsState } from "store/urls/types";
import { TagState } from "store/tags/types";

export enum RequestOption {
  NONE = "NONE",
  REQUESTED = "REQUESTED",
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
}

export interface InitalState {
  user: UserState;
  tags: TagState;
  urls: UrlsState;
}
