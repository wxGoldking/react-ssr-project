import { CHANGE_LIST } from "./constanst";
const changeNewsList = (list) => ({
  type: CHANGE_LIST,
  data: list,
});

export const getNewsList = () => {
  return (dispatch) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { title: "1", content: "单方事故东方花园法规和地方骨灰级" },
          { title: "2", content: "闪光灯是否规范的话费孤岛惊魂规范" },
          { title: "3", content: "第三方和规范的合格分结果符合" },
        ]);
      }, 100);
    }).then((data) => {
      dispatch(changeNewsList(data));
    }).catch(e => console.log(e))
  };
};
