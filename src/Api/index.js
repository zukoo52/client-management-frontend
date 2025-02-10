import axios from "axios";
import { toast } from "@/Toast/toast";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
});

api.interceptors.request.use(
  function (config) {
    if (localStorage.token) {
      config.headers.Authorization = `Bearer ${localStorage.token}`;
    }

    return config;
  },
  function (error) {
    // Do something with request errora
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    if (
      response.status === 200 &&
      response.config.method != "get" &&
      response.data.message
    ) {
      toast(response.data.message, "success");
    }
    return response;
  },

  function (error) {
    if (typeof error.response !== "undefined") {
      //Setup Generic Response Messages

      if (error.response.status === 401) {
        toast(error.response.data.message, "error");
      } else if (error.response.status === 403) {
        toast(error.response.data.message, "error");
      } else if (error.response.status === 404) {
        toast(error.response.data.message, "error");
      } else if (error.response.status === 405) {
        toast(error.response.data.message, "warning");
      } else if (error.response.status === 422) {
        toast(error.response.data.message, "error");
      } else if (error.response.status === 500) {
        toast(error.response.data.error, "error");
      }
    }
    return Promise.reject(error);
  }
);
