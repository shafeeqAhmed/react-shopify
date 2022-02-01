import axiosClient from "./index";

const userApi = {
  createOrg(data) {
    const url = "/create-org";
    return axiosClient.post(url, data);
  },

  getUser() {
    const url = "/users";
    return axiosClient.get(url);
  },

  getUserById(id) {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },

  createNewUser(data) {
    const url = "/users";
    return axiosClient.post(url, data);
  },

  updateUser(data, id) {
    const url = `/users/${id}`;
    return axiosClient.put(url, data);
  },

  deleteUser(id) {
    const url = `/users/${id}`;
    return axiosClient.delete(url);
  },
};

export default userApi;
