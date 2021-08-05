import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
// 服务端只能使用StaticRouter 不能使用BrowserRouter
import { Route, StaticRouter } from 'react-router-dom'

export const render = (store, routes, req) => {

  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        {
          routes.map((item =>
            <div key={item.key}>
              <Route {...item} />
            </div>
          ))
        }
      </StaticRouter>
    </Provider>
  ))
  return (`<html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id='root'>${content}</div>
        <script>
          window.context = {
            state: ${JSON.stringify(store.getState())}
          }
        </script>
        <script src='/index.js'></script>
      </body>
    </html>`)
}