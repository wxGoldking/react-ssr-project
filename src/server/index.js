import Koa from 'koa';
import KoaRouter from 'koa-router';
import KoaStatic from 'koa-static';
import { matchRoutes } from "react-router-config";
import routes from '../Router';
import {getServerStore} from '../containers/store';
import proxy from 'koa-server-http-proxy';

import path from 'path';
import {render} from './utils';

const app = new Koa();
const router = new KoaRouter();

app.use(KoaStatic(path.join(__dirname, '../public'))); // 放在最后表示先匹配路由，放在最前表示先匹配静态资源

app.use(proxy('/api', {
  target: 'http://jianjiyudao.com:8888',
  // pathRewrite: { '^/api': 'api/4/' },
  changeOrigin: true
}))

router.get("/(.*)", async ctx => {
  const store = getServerStore(ctx);
  // 获取匹配到的路由
  const matchedRoutes = matchRoutes(routes, ctx.url);
  // 得到数据请求数组 --- 一组promise
  const promiseDatas =  [];
  matchedRoutes.forEach(({route}) => {
    if(route.loadData) {
      promiseDatas.push(route.loadData(store));
    }
  })
  // 执行数据请求，为store灌入初始数据
  await Promise.all(promiseDatas);
  const context = {};
  const html = render(store, routes, ctx.url, context);
  console.log(context)
  if(context.action === "REPLACE") {
    // 301 重定向, StaticRouter 发现有 Redict 就会注入 context 301 重定向内容
    ctx.status = 301;
    ctx.redirect(context.url);
  }
  if(context.NOT_FOUND) {
    ctx.status = 404;
  }
  ctx.body = html;
})
app.use(router.routes()).use(router.allowedMethods()); // use(router.allowedMethods()) 会在接口地址正确，请求方法错误时返回Method Not Allowed 405

app.listen(3003, () => {
  console.log('server is running on port 3003')
})