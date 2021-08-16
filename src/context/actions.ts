import { httpClient } from "../services/httpClient";
import jwt_decode from "jwt-decode";

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
      const decoded: any = jwt_decode(response?.data?.token);

      const user = await httpClient<any>({
        method: "GET",
        url: "/user/" + decoded?.sub,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          apikey: "1",
          Authorization: `Bearer ${response?.data?.token}`,
        },
      });

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { ...response.data, user: user.data },
      });
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ ...response.data, user })
      );
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
