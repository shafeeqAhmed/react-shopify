import axiosClient from "./index";

const settingApi = {
  getSettings() {
    const url = "/settings";
    return axiosClient.get(url);
  },

  verifiedPartner(data) {
    console.log("=====call api")
    const url = "/settings/partner/validate";
    axiosClient.interceptors.request.use(
      function (config) {
        const customHeaders = {};
        customHeaders['X-SHOPIFY-PARTNER-CODE']=data
        return {
          ...config,
          headers: {
            ...customHeaders, 
            ...config.headers, 
          },
        };
      },
    
      function (error) {
        return Promise.reject(error);
      }
    );
    return axiosClient.post(url, []);
  },

  updateSettings(data) {
    const url = "/settings";
    return axiosClient.put(url, data);
  },
 };

export default settingApi;
