import App from "./containers/App"
import Home from "./containers/Home";
import Login from "./containers/Login";
import Personal from "./containers/Personal";
import NotFound from "./containers/NotFound";

const routes = [
  {
    path: "/",
    component: App,
    loadData: App.loadData,
    routes:[
      {
        path: "/",
        component: Home,
        exact: true,
        // 每个路由组件的静态方法就是为在服务端的store灌入初始数据
        loadData: Home.loadData,
      },
      {
        path: "/login",
        exact: true,
        component: Login,
      },
      {
        path: "/personal",
        exact: true,
        component: Personal
      },
      {
        component: NotFound,
      }
    ]
  }
]

export default routes;