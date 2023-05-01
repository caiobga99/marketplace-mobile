interface IUserActionTypes {
  LOGIN: string;
  LOGOUT: string;
}

const UserActionTypes: IUserActionTypes = {
  LOGIN: "user/login",
  LOGOUT: "user/logout",
};

export default UserActionTypes;
