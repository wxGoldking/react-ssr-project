import { CHANGE_LIST } from "./constanst";
const changeNewsList = (list) => ({
  type: CHANGE_LIST,
  data: list,
});

export const getNewsList = () => {
  return (dispatch, getState, http) => {
    return http.get('/api/news').then(({data}) => {
      dispatch(changeNewsList(data));
    }).catch(e => console.log(e))
  };
};
