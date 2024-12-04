export const login = (credential) => {
  return (dispatch) => {
    const { userName, password } = credential;

    if (userName === "admin" && password === "password") {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { userName: "admin", userID: 1 },
      });
    } else {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: "invalid credentials",
      });
    }
  };
};

export const LOGOUT = () => ({
  type: "LOGOUT",
});
