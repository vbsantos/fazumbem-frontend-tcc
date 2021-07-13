import { httpClient } from "../services/httpClient";

export async function loginUser(
  dispatch: any,
  loginPayload: Record<string, unknown>
) {
  try {
    let response = await httpClient<{ token: string }>({
      method: "POST",
      url: "/user/authenticate",
      data: loginPayload,
    });

    if (response?.data?.token) {
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      localStorage.setItem("currentUser", JSON.stringify(response.data));
      return response.data;
    }

    dispatch({ type: "LOGIN_ERROR", error: "No user token" });
    return;
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: error });
    console.log(error);
  }
}

export async function logout(dispatch: any) {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("currentUser");
}
