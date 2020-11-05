import Home from "./containers/Home";
import Login from "./containers/Login"

const routes = [
  {
    path: "/",
    component: Home,
    // exact: true,
    loadData: Home.loadData,
    routes:[
      {
        path: "/tt",
        exact: true,
        component: Login,
      }
    ]
  },
  {
    path: "/login",
    exact: true,
    component: Login,
  }
]
export default routes;