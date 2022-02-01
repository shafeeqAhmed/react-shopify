import axios from 'axios';

const axiosClient = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}/api/shopify`,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    const customHeaders = {};
    customHeaders['X-SHOPIFY-TOKEN']='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2Rpc3RpbC1haS5teXNob3BpZnkuY29tL2FkbWluIiwiZGVzdCI6Imh0dHBzOi8vZGlzdGlsLWFpLm15c2hvcGlmeS5jb20iLCJhdWQiOiIwYzA3NWQ1ZDA4ODMxYTYxZDE1YzI4NDM1MWY4M2Q4OCIsInN1YiI6Ijc3NTgyMjA1MTM1IiwiZXhwIjoxNzQxODk0ODUzLCJuYmYiOjE2NDE4OTQ3OTMsImlhdCI6MTY0MTg5NDc5MywianRpIjoiODcyYTliYjMtYjBmYi00M2FhLWE0NDMtYzA1Yzc3NzYxYjQ1Iiwic2lkIjoiMWYxZmIzMDM3YTliZmQ1MzQ4ZDZjNjlkMzEwMWZlNGVlZGZmYmFiN2JlOGQ1NTYyYjM0ZDlkYjA0NmNkMDYwZSJ9.q06HMRtdzXWfGk5vlaH4do6M56Qyt4JXTvw0rahbwSs'
    return {
      ...config,
      headers: {
        ...customHeaders, // auto attach token
        ...config.headers, // can override for some requests
      },
    };
  },

  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },

  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
