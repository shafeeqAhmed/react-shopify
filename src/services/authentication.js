import jwtDecode from "jwt-decode";
import ApiService from "services/apiService";
import axios from "axios";
import StorageManager from 'app/storageManager'
import {paths} from "global/globalVariables";

let sessionUser = StorageManager.getSessionDataValue("user");
let refreshToken = StorageManager.getSessionDataValue("refreshToken");

let refreshPromise = null;

function handleAuth(response) {
  // successful response if there's a jwt token in the response
  if (response && response.access_token) {
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    let decodedToken = jwtDecode(response.access_token) || {};

    let userData = {
      ...response,
      decoded_token: decodedToken,
      admin: decodedToken.isAdmin
    };

    // store session user in storage
    sessionUser = userData;
    StorageManager.setSessionData("user", sessionUser);

    // if refresh token is null, keep the current token
    if (response.refresh_token) {
      refreshToken = response.refresh_token;
      StorageManager.setSessionData("refreshToken", refreshToken);
    }

    ApiService.defaults.headers.common["Authorization"] = "Bearer " + response.access_token;

    return userData;
  }

  return null;
}

function getLoginData(email, password) {
  const requestUrl = "auth/login";
  const data = {email, password};

  // use axios rather than API service for login, so 401 doesn't redirect
  return axios
    .post(requestUrl, data)
    .then(response => {
      return response.data;
    });
}

function login(email, password) {
  return getLoginData(email, password).then(handleAuth);
}

function logout() {
  StorageManager.clearSessionData()
  window.location = paths.analyticsPath;
}

function getAccessToken(currentRefreshToken) {
  const params = new URLSearchParams();
  params.append("refreshToken", currentRefreshToken);

  return ApiService.post("auth/refresh", params)
    .then(response => {
      return response.data;
    })
    .then(resp => {
      refreshPromise = null;
      if (resp && resp.access_token) {
        return handleAuth(resp);
      } else {
        throw new Error("No access token returned");
      }
    })
    .catch(logout);
}

function refreshAccessToken() {
  if (!refreshToken) {
    logout();
  }

  let promise = refreshPromise;

  if (!promise) {
    promise = getAccessToken(refreshToken).then(resp => {
      refreshPromise = null;
      return handleAuth(resp);
    });

    refreshPromise = promise;
  }

  return promise;
}

export default {
  login,
  logout,
  getLoginData,
  refreshAccessToken,
};
