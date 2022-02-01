import axios from 'axios';
import {globalConstants} from 'global/globalVariables';
import StorageManager from "app/storageManager"
import AuthenticationService from "services/authentication"

axios.defaults.baseURL = globalConstants.BASE_URL + globalConstants.URL_INITIAL;

let instance = axios.create({
  baseURL: globalConstants.BASE_URL + globalConstants.URL_INITIAL
});

instance.interceptors.request.use(function (config) {
  let accessToken = StorageManager.getSessionDataValue("accessToken");
  let organization = StorageManager.getSessionDataValue("organization");

  if (accessToken) {
    config.headers['Authorization'] = 'Bearer ' + accessToken;
  }

  if (organization !== null) {
    config.headers["X-ORG-ID"] = organization.id;
  }

  return config;
}, function (error) {
  return Promise.reject(error);
});

instance.interceptors.response.use(null, (error) => {
  if (error.config && error.response && error.response.status === 401) {
    return AuthenticationService.refreshAccessToken().then((resp) => {
      if (resp && resp.access_token) {
        error.config.headers['Authorization'] = "Bearer " + resp.access_token;
        return axios.request(error.config);
      } else {
        return Promise.reject(error);
      }
    });
  }

  return Promise.reject(error);
});


export default instance;