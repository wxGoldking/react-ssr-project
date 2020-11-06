# react-ssr-project
react-ssr-project
**同构：同构这个概念存在于 Vue，React 这些新型的前端框架中，同构实际上是客户端渲染和服务器端渲染的一个整合。我们把页面的展示内容和交互写在一起，让代码执行两次。在服务器端执行一次，用于实现服务器端渲染，在客户端再执行一次，用于接管页面交互**
1. react-ssr 刷新页面，需要服务端渲染出页面结构，浏览器端再执行js渲染一遍，前端的路由跳转是执行js不涉及服务端
2. 服务端（StaticRouter）和浏览器端都要配置路由 --- react-router-config；
3. 服务端渲染之后，客户端会再次渲染，因为我们的客户端创建的store为空。解决办法：在服务端渲染的时候将获取到的数据赋值一个全局变量（注水），客户端创建的store以这个变量的值作为初始值（脱水）
4. 中间层要做客户端的接口请求代理，koa推荐koa-server-http-proxy，
5. 单同构的存在服务端的初始页面数据请求不需要代理，解决方案：
    axios构建两个实例，设置不同的baseURL, 在createStore应用redux-thunk中间件时 thunk.withExtraArgument(api)传入
    在异步dispatch的第三个参数获取到axios实例，通过该实例派发请求