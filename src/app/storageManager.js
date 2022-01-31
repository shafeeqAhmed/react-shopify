/**
 * shopify embedded app do not support session and local storage
 * so this class operates an simple js object
 */

window.sessionData = {
  refreshToken: null,
  accessToken: null,
  user: null,
  organization: null
};

function getSessionData() {
  return window.sessionData;
}

function getSessionDataValue(name) {
  return window.sessionData[name];
}

function setSessionData(name, value) {
  window.sessionData[name] = value;
}

function clearSessionData() {
  window.sessionData = {
    refreshToken: null,
    accessToken: null,
    user: null,
    organization: null
  };
}

export default {
  getSessionData,
  getSessionDataValue,
  clearSessionData,
  setSessionData
};
