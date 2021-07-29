import express from 'express'
import Home from './containers/Home'
import React from 'react'
import { renderToString } from 'react-dom/server'

const app = express()
const content = renderToString(<Home />)

app.get('/', function (req, res) {

  res.send(
    `<html>
    <head>
      <title>ssr</title>
    </head>
    <body>
      <h1>first lesson</h1>
      <p>hello world 43</p>
      ${content}
    </body>
  </html>`
  );
});

var server = app.listen(3000)