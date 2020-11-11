import React from 'React';
import {renderToString} from 'react-dom/server';
import { renderRoutes } from "react-router-config";
import StyleContext from 'isomorphic-style-loader/StyleContext';
// react服务端渲染路由需要使用StaticRouter
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

export const render = (store, routes, url, context) => {
  const css = new Set();
  const insertCss = (...styles) => {
    styles.forEach(style => {
      css.add(style._getCss());
    })
  };
  const contents = renderToString(
    <StyleContext.Provider value={{ insertCss }}>
      <Provider store={store}>
        <StaticRouter location={url} context={context}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    </StyleContext.Provider>
  )
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style id="ssr-style">${[...css].join('\n')}</style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.8.2/antd.min.css" integrity="sha512-CPolmBEaYWn1PClN5taQQ0ucEhAt+9j7+Tiog/SblkFjZ5k6M3TioqmlpcHKwUhIcsu1s7lgnX4Plsb6T8Kq5A==" crossorigin="anonymous" />
    <title>React-SSR</title>
  </head>
  <body>
    <div id="root">${contents}</div>
    <script>
      window._content = {
        state: ${JSON.stringify(store.getState())}
      }
    </script>
    <script src="/index.js"></script>
  </body>
  </html>`;
}