import express from 'express'
import Home from './containers/Home'
import React from 'react'
import { renderToString } from 'react-dom/server'

const app = express()
/** renderToString方法不会渲染方法  只能渲染html */
const content = renderToString(<Home />)

app.get('/', function (req, res) {

  res.send(
    `<html>
    <head>
      <title>ssr</title>
    </head>
    <body>
      ${content}
    </body>
  </html>`
  );
});

const server = app.listen(3000)