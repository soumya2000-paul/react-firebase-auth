import { INITIAL_STATE } from "./state";

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  console.log({ type });
  console.log({ payload });
  switch (type) {
    case "USER_LOGIN_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        ...state,
        user: payload,
        isLoading: false,
        authenticated: true,
      };
    case "USER_LOGIN_FAILURE":
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    case "USER_LOGOUT":
      return {
        ...state,
        user: null,
      };
    case "GET_CURRENT_USER":
      return {
        ...state,
        user: payload,
        authenticated: true,
      };
    case "CLEAR_ERROR":
      return {
        ...state,
        error: null,
      };
    case "EMAIL_SENT":
      return {
        ...state,
        isLoading: false,
      };
    case "SEND_EMAIL_LINK_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "SEND_EMAIL_LINK_SUCCESS":
      return {
        ...state,
        isLoading: false,
      };

    case "SEND_EMAIL_LINK_FAILURE":
      return {
        ...state,
        error: payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
