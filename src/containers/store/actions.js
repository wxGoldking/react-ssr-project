import { SET_LOGIN, LOGIN_OUT } from "./constanst";
export const setLogin = (data = true) => ({
  type: SET_LOGIN,
  data
});
export const login = (params) => {
  return (dispatch, getState, http) => {
    return http.post('/api/login', params).then((res) => {
      dispatch(setLogin());
    }).catch(e => console.log(e))
  };
};
export const getLoginStatus = () => {
  return (dispatch, getState, http) => {
    return http.get('/api/isLogin').then(({data}) => {
      dispatch(setLogin(data));
    }).catch(e => console.log(e))
  };
};

export const logOut = (params) => {
  return (dispatch, getState, http) => {
    return http.post('/api/logOut').then((res) => {
      dispatch(setLogin(false));
    }).catch(e => console.log(e))
  };
};
