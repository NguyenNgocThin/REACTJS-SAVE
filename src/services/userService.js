import axios from "../axios";

const handleLoginApi = (userEmail, userPassword) => {
  return axios.post("/api/login", { email: userEmail, password: userPassword });
};

const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`);
};

const createNewUserServices = (data) => {
  return axios.post("/api/create-new-user", data);
};

const deleteUserServices = (userId) => {
  // return axios.delete('/api/delete-user', {id : userId})
  return axios.delete("/api/delete-user", {
    data: {
      id: userId,
    },
  });
};

const editUserServices = (inputData) => {
  return axios.put("/api/edit-user", inputData);
};

export {
  handleLoginApi,
  getAllUsers,
  createNewUserServices,
  deleteUserServices,
  editUserServices,
};
