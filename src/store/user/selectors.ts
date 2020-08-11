import { createSelector } from "reselect";
import { InitalState } from "store/types";

const userState = (state: InitalState) => state.user;

export const getUser = createSelector(userState, ({ user }) => user);

export const getAvatarInfo = createSelector(getUser, (user) => ({
  username: user.username,
  name: user.name,
  avatar: user.avatar,
}));
