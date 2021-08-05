import express from 'express'
import { render } from './utils';
import { getStore } from '../store'
import { matchRoutes } from "react-router-config"
import routes from '../Routes'

const app = express()
app.use(express.static('public'))
/** renderToString方法不会渲染方法  只能渲染html, 想要执行js事件需要利用同构 */

app.get('/*', function (req, res) {
  const store = getStore()

  // 如果在这里拿到数据填充到store中，服务端就能渲染数据
  // store中填充什么，需要根据路由来确定，
  // 根路由就拿Home组件数据，/login就拿Login组件数据
  // https://reactrouter.com/web/guides/server-rendering
  const mathedRoutes = matchRoutes(routes, req.path);

  // 让mathedRoutes里面的所有组件，对应的loadData方法执行一次
  const promises = [];
  mathedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store))
    }
  })

  Promise.all(promises).then(() => {
    res.send(render(store, routes, req));
  })

});

const server = app.listen(3000)