import requests from "utils/request";

export async function getUserInfo() {
  const response = await requests.get("/auth/user/me");

  return response.data.data;
}

export async function logoutUser() {
  return await requests.get("/auth/logout");
}
