import axios, { AxiosResponse, AxiosPromise, AxiosRequestConfig } from "axios";

const defaultHeaders = () => {
  let token = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser") as string).token
    : "";

  return token
    ? {
        "Content-Type": "application/json",
        Accept: "application/json",
        apikey: "1",
        Authorization: `Bearer ${token}`,
      }
    : {
        "Content-Type": "application/json",
        Accept: "application/json",
      };
};

export const requestInterceptor = async (config: AxiosRequestConfig) => {
  try {
    config.headers = {
      ...defaultHeaders(),
      ...config.headers,
    };

    return config;
  } catch (err) {
    console.error(JSON.stringify({ "Error at requestInterceptor": err }));
    if (err.isAxiosError) {
      return Promise.reject({ ...err, config });
    }
    return Promise.reject({ redirectToLogin: true, config });
  }
};

const responseSuccessInterceptor = (response: AxiosResponse) => {
  if (response.status === 204) {
    return { ...response, data: {} };
  }

  return response;
};

const responseErrorInterceptor = (error: any) => {
  const response = error?.response as AxiosResponse;

  if (response.status === 401 && localStorage.getItem("currentUser")) {
    localStorage.removeItem("currentUser");
    alert("Sua sessão expirou, realize login novamente!");
    window.location.reload();
  }

  console.error(JSON.stringify({ "Response error": error }));
  return Promise.reject(error);
};

const instance = axios.create({
  baseURL: `https://faz-um-bem.herokuapp.com`,
});

instance.interceptors.request.use(requestInterceptor);
instance.interceptors.response.use(
  responseSuccessInterceptor,
  responseErrorInterceptor
);

export async function httpClient<T>(config: AxiosRequestConfig = {}) {
  return instance(config) as AxiosPromise<T>;
}
