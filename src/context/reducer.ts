let oldState = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser") as string)
  : "";

export const initialState = {
  ...oldState,
};

export const AuthReducer = (
  _initialState: Record<string, any>,
  action: { type: string; payload?: Record<string, any>; error?: string }
) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...action?.payload,
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
