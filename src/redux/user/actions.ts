import UserActionTypes from "./action-types";

export interface IUser {
  name: string;
  email: string;
  password: string;
  bio: string;
}

export const loginUser = (payload: IUser) => ({
  type: UserActionTypes.LOGIN,
  payload,
});

export const logoutUser = () => ({
  type: UserActionTypes.LOGOUT,
});