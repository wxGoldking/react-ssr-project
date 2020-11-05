import Koa from 'koa';
import KoaRouter from 'koa-router';
import KoaStatic from 'koa-static';
import { matchRoutes } from "react-router-config";
import React from 'React';
import {renderToString} from 'react-dom/server';
import { renderRoutes } from "react-router-config";

// react服务端渲染路由需要使用StaticRouter
import {StaticRouter} from 'react-router-dom';
import routes from '../Router';
import {Provider} from 'react-redux';
import getStore from '../containers/store';

import path from 'path';
import {render} from './utils';

const app = new Koa();
const router = new KoaRouter();

app.use(KoaStatic(path.join(__dirname, '../public'))); // 放在最后表示先匹配路由，放在最前表示先匹配静态资源

router.get("/(.*)", async ctx => {
  const contents = renderToString(
    <Provider store={getStore()}>
      <StaticRouter location={ctx.url} context={{}}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  );
  ctx.body = render(contents);
})
app.use(router.routes()).use(router.allowedMethods()); // use(router.allowedMethods()) 会在接口地址正确，请求方法错误时返回Method Not Allowed 405

app.listen(3003, () => {
  console.log('server is running on port 3003')
})