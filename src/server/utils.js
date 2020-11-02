import React from 'React';
import {renderToString} from 'react-dom/server';
// react服务端渲染路由需要使用StaticRouter
import {StaticRouter} from 'react-router-dom';
import Router from '../Router';

export const render = (ctx) => {
  const contents = renderToString(
    <StaticRouter location={ctx.url} context={{}}>
      <Router></Router>
    </StaticRouter>
  );

  return `<!DOCTYPE html>
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
  </html>`;
}