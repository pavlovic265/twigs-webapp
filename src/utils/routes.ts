import requets from "utils/request";

export function getLoginPath() {
  return ["/login/:code", "/login", "/"];
}

export function getDashboardPath() {
  return ["/dashboard", "/"];
}

export function goToGithubAuth() {
  return `${requets.defaults.baseURL}/auth/github`;
}

export function goToGoogleAuth() {
  return `${requets.defaults.baseURL}/auth/google`;
}

export function goToRoot() {
  return "/";
}

export function goToLogin() {
  return "/login";
}

export function goToDashboard() {
  return "/dashboard";
}
