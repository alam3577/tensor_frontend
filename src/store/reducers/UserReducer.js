import { GET_CV, GET_USER, GET_USERS, UPDATE_USER } from "../types/Types";

const initialState = {
  loading: true,
  user: {},
  users: [],
};

const userReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_USERS:
      return {
        ...state,
        loading: false,
        users: actions.payload,
      };
    case GET_USER:
      return {
        ...state,
        loading: false,
        user: actions.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        loading: false,
      };
      case GET_CV:
        return {
          ...state,
          loading: false,
        };
    default:
      return state;
  }
};

export default userReducer;
