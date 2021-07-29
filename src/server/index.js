import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from '../containers/Home'

const app = express()
app.use(express.static('public'))
/** renderToString方法不会渲染方法  只能渲染html, 想要执行js事件需要利用同构 */
const content = renderToString(<Home />)

app.get('/', function (req, res) {

  res.send(
    `<html>
    <head>
      <title>ssr</title>
    </head>
    <body>
      <div id='root'>${content}</div>
      <script src='/index.js'></script>
    </body>
  </html>`
  );
});

const server = app.listen(3000)