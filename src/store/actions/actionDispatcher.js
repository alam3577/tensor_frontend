import API from "./API";
import { getCvFile, getUserById, getUsers, updateUser } from "./userAction";
import axios from "axios";

export const loadUsers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${API}/getusers`);
      console.log(data);
      dispatch(getUsers(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const loadUser = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${API}/getuserbyId/${id}`);
      console.log({ data });
      dispatch(getUserById(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateUserdispatch = (id, data) => {
  return async (dispatch) => {
    try {
     await axios.put(`${API}/updateuser/${id}`, data);
      dispatch(updateUser());
    } catch (err) {
      console.log(err);
    }
  };
};

export const downloadCsv = () => {
    return async (dispatch) => {
      try {
       await axios.get(`${API}/getCsvFile`);
        dispatch(getCvFile());
      } catch (err) {
        console.log(err);
      }
    };
  };