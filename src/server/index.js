import Koa from 'koa';
import KoaRouter from 'koa-router';
import KoaStatic from 'koa-static';
import path from 'path';
import {render} from './utils';

const app = new Koa();
const router = new KoaRouter();

app.use(KoaStatic(path.join(__dirname, '../public'))); // 放在最后表示先匹配路由，放在最前表示先匹配静态资源

router.get("/(.*)", async ctx => {
  ctx.body = render(ctx);
})
app.use(router.routes()).use(router.allowedMethods()); // use(router.allowedMethods()) 会在接口地址正确，请求方法错误时返回Method Not Allowed 405

app.listen(3003, () => {
  console.log('server is running on port 3003')
})