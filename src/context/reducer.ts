let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser") as string).token
  : "";

export const initialState = {
  token: "" || token,
};

export const AuthReducer = (
  _initialState: Record<string, any>,
  action: { type: string; payload?: Record<string, any>; error?: string }
) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        token: action?.payload?.token,
      };
    case "LOGOUT":
      return {
        token: "",
      };

    case "LOGIN_ERROR":
      return {
        token: "",
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
