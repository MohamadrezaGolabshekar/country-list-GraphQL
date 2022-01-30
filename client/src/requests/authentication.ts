import axios from "axios";
import { success, fail } from "./response-creator";
import { SERVER_ENDPOINT } from "../config";

export const login = async () => {
  try {
    const response = await axios.get(`${SERVER_ENDPOINT}/api/login`, {
      withCredentials: true,
    });
    return success({ status: response.status });
  } catch (e: any) {
    return fail({
      status: e?.response?.data?.status,
      message: e?.response?.data?.message || "Unknown error",
    });
  }
};

export const checkLogin = async () => {
  try {
    const response = await axios.get(`${SERVER_ENDPOINT}/api/check-login`, {
      withCredentials: true,
    });
    return success({ status: response.status });
  } catch (e: any) {
    return fail({
      status: e?.response?.data?.status,
      message: e?.response?.data?.message || "Unknown error",
    });
  }
};
