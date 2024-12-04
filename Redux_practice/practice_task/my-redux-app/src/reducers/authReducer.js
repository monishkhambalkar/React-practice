const initialState = {
  isLoggedIn: false,
  userName: "",
  userId: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoggedIn: true,
        userName: action.payload.userName,
        userId: action.payload.userId,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        userName: "",
        userId: null,
      };
    default:
      return state;
  }
};

export default authReducer;
