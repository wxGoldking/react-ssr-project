import Koa from 'koa';
import Router from 'koa-router';
import KoaStatic from 'koa-static';
import path from 'path';
import React from 'React';
import {renderToString} from 'react-dom/server';
import Home from '../containers/Home';
const app = new Koa();
const router = new Router();
const contents = renderToString(<Home />)



router.get('/', async ctx => {
  ctx.body = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React-SSR</title>
  </head>
  <body>
    <div id="root">${contents}</div>
    <script src="/index.js"></script>
  </body>
  </html>`
})

app.use(router.routes()).use(router.allowedMethods()); // use(router.allowedMethods()) 会在接口地址正确，请求方法错误时返回Method Not Allowed 405
app.use(KoaStatic(path.join(__dirname, '../../public'))); // 放在最后表示先匹配路由，放在最前表示先匹配静态资源

app.listen(3003, () => {
  console.log('server is running on port 3003')
})