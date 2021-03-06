import axiosLib from "axios";

/* Constants */
import ENV from "../constants/env";

const axios = axiosLib.create({
  baseURL: ENV.base_url,
  timeout: 300000
});

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with the response error
    return Promise.reject();
  }
);

export default axios;
