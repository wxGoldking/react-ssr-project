import Koa from 'koa';
import React from 'React';
import {renderToString} from 'react-dom/server';
import Home from './containers/Home';

const app = new Koa();
const contents = renderToString(<Home />)

app.use(async (ctx, next) => {
  ctx.body = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React-SSR</title>
  </head>
  <body>
    ${contents}
  </body>
  </html>`
})

app.listen(3003, () => {
  console.log('server is running on port 3003')
})