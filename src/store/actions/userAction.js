import { GET_CV, GET_USER, GET_USERS, UPDATE_USER } from "../types/Types";

  
  export const getUsers = (users) => ({
    type: GET_USERS,
    payload: users,
  });
  
  export const getUserById = (user) => ({
    type: GET_USER,
    payload: user,
  });
  
  export const updateUser = (user) => ({
    type: UPDATE_USER,
  });

  export const getCvFile = () => ({
    type: GET_CV,
  });
  