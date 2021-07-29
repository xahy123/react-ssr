import express from 'express'
import { render } from './utils';

const app = express()
app.use(express.static('public'))
/** renderToString方法不会渲染方法  只能渲染html, 想要执行js事件需要利用同构 */

app.get('/*', function (req, res) {
  res.send(render(req));
});

const server = app.listen(3000)