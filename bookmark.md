1. bable v7版本以上 stage-0 已经移除， 以 @babel/plugin-proposal-function-bind 插件代替 -- https://github.com/babel/babel/blob/755ec192e22c6b6e00782e4810366d0166fdbebd/packages/babel-preset-stage-0/README.md
2. react-router-config 一个方便统一管理路由的依赖 ---https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config (对应的路由异步加载貌似需使用react-loadable)
3. 服务端渲染之后，客户端会再次渲染，因为我们的客户端创建的store为空。解决办法：在服务端渲染的时候将获取到的数据赋值一个全局变量（注水），客户端创建的store以这个变量的值作为初始值（脱水）
4. 服务器端的 Store 是所有用户都要用的，每个用户访问的时候，这个函数重新执行，为每个用户提供一个独立的 Store, 而不是提前创建好的一个单例
5. 中间层代理client接口请求、server的请求直接请求绝对地址