
export const render = (contents) => {
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