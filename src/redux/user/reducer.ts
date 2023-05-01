import UserActionTypes from "./action-types";
import { IUser } from "./actions";

interface IinitialState {
  currentUser: null | IUser;
}
interface IAction {
  type: string;
  payload: IUser;
}

const initialState: IinitialState = {
  currentUser: null,
};

const userReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return { ...state, currentUser: action.payload };
    case UserActionTypes.LOGOUT:
      return { ...state, currentUser: null };
    default:
      return state;
  }
};

export default userReducer;
