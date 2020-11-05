import Home from "./containers/Home";
import Login from "./containers/Login"

const routes = [
  {
    path: "/login",
    exact: true,
    component: Login,
  },
  {
    path: "/",
    component: Home,
    // 每个路由组件的静态方法就是为在服务端的store灌入初始数据
    loadData: Home.loadData,
    routes:[
      {
        path: "/tt",
        exact: true,
        component: Login,
      }
    ]
  },
]
export default routes;